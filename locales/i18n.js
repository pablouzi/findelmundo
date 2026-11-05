const siteLanguage = document.documentElement.lang === 'en' ? 'en' : 'es';
const ui = siteLanguage === 'en' ? {
 count: (shown, total) => `${shown} BEERS SHOWN · ${total} IN THE COLLECTION`,
 south: 'SOUTH', number: 'No.', alcoholShort: 'ABV', missing: 'Not provided', can: 'can presentation', soon: 'Coming soon', pendingImage: 'PRODUCT IMAGE<br>PENDING',
 open: 'View details for', explore: 'VIEW DETAILS', empty: 'No beers match your search. Try another name or style.',
 collection: 'THE COLLECTION', pendingDescription: 'Description awaiting the technical specification.',
 openMenu: 'Open menu', closeMenu: 'Close menu', category: 'Collection', format: 'Format', appearance: 'Appearance',
 aroma: 'Aroma', flavor: 'Flavour', pairing: 'Food pairing', awards: 'Awards', provisional: 'Provisional name from the working portfolio.'
} : {
 count: (shown, total) => `${shown} REFERENCIAS EN ESTA VISTA · ${total} EN EL CATÁLOGO`,
 south: 'SUR', number: 'N°', alcoholShort: 'ALC.', missing: 'No informado', can: 'presentación en lata', soon: 'Próximamente', pendingImage: 'IMAGEN DE ENVASE<br>PENDIENTE',
 open: 'Explorar ficha de', explore: 'EXPLORAR FICHA', empty: 'No encontramos cervezas con esa búsqueda. Prueba otro nombre o estilo.',
 collection: 'LA COLECCIÓN', pendingDescription: 'Descripción pendiente de la ficha técnica.',
 openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', category: 'Colección', format: 'Formato', appearance: 'Apariencia',
 aroma: 'Aroma', flavor: 'Sabor', pairing: 'Maridaje', awards: 'Reconocimientos', provisional: 'Denominación provisional del portafolio de trabajo.'
};
const categoryTranslations = {'Regular':'Core range','Rotativa':'Rotating release','Edición especial':'Special edition','Vendimia · Cosecha 2024':'Grape harvest · 2024 vintage','Clásica':'Classic','Experimental':'Experimental'};
// Competition and beer names remain proper names. Translate medals, dates and locations.
function translateAward(award) {
 const replacements = [
  ['Medalla de Oro Mejor Hazy IPA chilena','Gold medal for Best Chilean Hazy IPA'],
  ['Tercer lugar como mejor cerveza internacional en','Third place for best international beer at'],
  ['Elegida Mejor Cerveza de la competencia en','Named Best Beer of the Competition at'],
  ['Medalla de Plata en','Silver medal at'],['Medalla de Bronce en','Bronze medal at'],
  ['Medalla de Oro en','Gold medal at'],['Medalla Bronce en','Bronze medal at'],['Medalla de Oro','Gold medal'],
  ['Noviembre','November'],['Diciembre','December'],['Septiembre','September'],['Agosto','August'],['Mayo','May'],['Abril','April'],['Junio','June'],['Julio','July'],
  ['Inglaterra','England'],['México','Mexico'],['Paraguay','Paraguay'],['Gose Frambuesa','Raspberry Gose'],
  [': Bronce',': Bronze'],[': Plata',': Silver'],[': Oro',': Gold'],['Llacolén y San Sebastián','Llacolén and San Sebastián'],['Invierno y San Sebastián','Invierno and San Sebastián']
 ];
 for (const [from,to] of replacements) award=award.replaceAll(from,to);
 return award;
}
const catalog = beers.map(beer => {
 if (siteLanguage === 'es') return beer;
 return {...beer, ...englishBeers[beer.name],
  image: beer.image ? `../${beer.image}` : undefined,
  category: categoryTranslations[beer.category],
  alcohol: beer.alcohol.replace(',', '.'),
  awards: beer.awards?.map(translateAward)
 };
});
// Keep the current section when changing languages; relative URLs support subpath hosting.
function updateLanguageLinks(){
 document.querySelectorAll('.language-switch a').forEach(link=>{
  const target=new URL(link.getAttribute('href'),location.href);
  target.hash=location.hash;
  link.href=target.href;
 });
}
updateLanguageLinks();
window.addEventListener('hashchange',updateLanguageLinks);
