const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function context(lang) {
 const ctx = vm.createContext({document:{documentElement:{lang},querySelectorAll:()=>[]},window:{addEventListener(){}},location:{href:'https://example.test/'+(lang==='en'?'en/':''),hash:''},URL});
 for(const file of ['beers.js','locales/en-beers.js','locales/i18n.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
 return ctx;
}
test('English translates every supplied description and sensory field without changing product facts',()=>{
 const ctx=context('en');
 const {base,localized,translations}=JSON.parse(vm.runInContext('JSON.stringify({base:beers,localized:catalog,translations:englishBeers})',ctx));
 assert.equal(localized.length,22);
 assert.equal(new Set(localized.map(b=>b.name)).size,22);
 for(let i=0;i<base.length;i++){
  const original=base[i],translated=localized[i];
  assert.equal(translated.name,original.name);
  assert.equal(translated.brand,original.brand);
  assert.equal(translated.ibu,original.ibu);
  assert.equal(translated.alcohol,original.alcohol.replace(',','.'));
  assert.equal(translated.image,'../'+original.image);
  if(original.category)assert.ok(translated.category);
  assert.ok(Object.hasOwn(translations,original.name),original.name);
  for(const field of ['description','pairing','appearance','aroma','flavor']){
   if(!original[field])continue;
   assert.ok(translations[original.name][field],`${original.name}: missing ${field}`);
   assert.notEqual(translated[field],original[field],`${original.name}: untranslated ${field}`);
  }
  for(const award of translated.awards||[])assert.doesNotMatch(award,/Medalla|Plata|Bronce|Noviembre|Agosto|Mayo/);
 }
});
test('Spanish catalog preserves the original data',()=>{
 assert.equal(vm.runInContext('JSON.stringify(catalog) === JSON.stringify(beers)',context('es')),true);
});
test('Both static pages declare languages and link to shared local resources',()=>{
 for(const [lang,file] of [['es','index.html'],['en','en/index.html']]){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  assert.ok(html.includes(`<html lang="${lang}">`));
  assert.equal((html.match(/class="language-switch"/g)||[]).length,2);
  for(const alternate of ['es','en','x-default'])assert.ok(html.includes(`rel="alternate" hreflang="${alternate}"`));
  for(const [,resource] of html.matchAll(/(?:src|href)="([^"]+)"/g)){
   if(resource.startsWith('#')||resource.startsWith('mailto:')||resource.startsWith('https:'))continue;
   assert.ok(fs.existsSync(path.resolve(root,path.dirname(file),resource)),`${file}: missing ${resource}`);
  }
 }
 const english=fs.readFileSync(path.join(root,'en/index.html'),'utf8');
 assert.ok(english.includes('ABOUT US'));
 assert.ok(english.includes('TRADE ENQUIRIES'));
 assert.ok(english.includes('locales/en-beers.js'));
});
