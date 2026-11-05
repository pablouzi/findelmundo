// Reveal only on entry; content stays visible if motion or observers are unavailable.
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
 for (const entry of entries) {
  if (!entry.isIntersecting) continue;
  entry.target.classList.add('is-visible');
  revealObserver.unobserve(entry.target);
 }
}, {threshold: 0.08}) : null;
function observeReveals(){
 if (!revealObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 document.querySelectorAll('.section > .section-label, .section-heading, .world-grid, .contact-grid, .brand-card, .beer-card').forEach((element, index) => {
  if (element.classList.contains('reveal')) return;
  element.classList.add('reveal');
  if (element.classList.contains('beer-card')) element.style.setProperty('--reveal-delay', `${index % 4 * 55}ms`);
  revealObserver.observe(element);
 });
}
let filter='Todas';
const grid=document.querySelector('#beer-grid');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(){
 if (revealObserver) grid.querySelectorAll('.reveal:not(.is-visible)').forEach(element => revealObserver.unobserve(element));
 const query=normalize(document.querySelector('#search').value.trim());
 const shown=catalog.filter(b=>(filter==='Todas'||b.brand===filter)&&normalize(b.name+' '+b.style+' '+b.brand).includes(query));
 document.querySelector('#result-count').textContent=ui.count(shown.length,catalog.length);
 grid.innerHTML=shown.length?shown.map(b=>{const i=catalog.indexOf(b);return `<article class="beer-card ${b.brand==='Crápula'?'crapula':''}"><div class="beer-image ${b.image?'has-photo '+b.imageLayout:''}"><span class="beer-number">${ui.number} ${String(i+1).padStart(2,'0')}</span><span class="beer-code">${b.brand==='Crápula'?'CR':'IN'} / ${ui.south}</span>${b.image?`<img class="product-photo" src="${b.image}" alt="${b.brand} ${b.name}, ${ui.can}" loading="lazy" decoding="async">`:`<div class="placeholder"><em>${ui.soon}</em><small>${ui.pendingImage}</small></div>`}</div><div class="beer-info"><p class="beer-brand">${b.brand.toUpperCase()}</p><h3>${b.name.toUpperCase()}</h3><div class="beer-meta"><span>${ui.alcoholShort} ${b.alcohol==='—'?ui.missing:b.alcohol}</span><span>IBU ${b.ibu==='—'?ui.missing:b.ibu}</span></div></div><button class="beer-open" data-beer="${i}" aria-label="${ui.open} ${b.name}">${ui.explore} <span aria-hidden="true"><svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></button></article>`}).join(''):`<p class="empty">${ui.empty}</p>`;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))});
 observeReveals();
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render()}));
document.querySelector('#search').addEventListener('input',render);
document.querySelectorAll('[data-brand-link]').forEach(a=>a.addEventListener('click',()=>{filter=a.dataset.brandLink;document.querySelector('#search').value='';render()}));
const dialog=document.querySelector('#beer-dialog');
grid.addEventListener('click',e=>{const button=e.target.closest('[data-beer]');if(!button)return;const b=catalog[button.dataset.beer];document.querySelector('#dialog-brand').textContent=b.brand.toUpperCase()+' / '+ui.collection;document.querySelector('#dialog-title').textContent=b.name.toUpperCase();document.querySelector('#dialog-style').textContent=b.style;document.querySelector('#dialog-description').textContent=b.description||(b.appearance?'':ui.pendingDescription);renderDetails(b);const photo=document.querySelector('#dialog-photo');photo.replaceChildren();photo.hidden=!b.image;photo.className='dialog-photo '+(b.imageLayout||'');if(b.image){const image=document.createElement('img');image.src=b.image;image.alt=b.brand+' '+b.name+', '+ui.can;photo.append(image)};document.querySelector('#dialog-alcohol').textContent=b.alcohol==='—'?ui.missing:b.alcohol;document.querySelector('#dialog-ibu').textContent=b.ibu==='—'?ui.missing:b.ibu;dialog.showModal()});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
const menu=document.querySelector('#menu-toggle');const sidebar=document.querySelector('#sidebar');
function closeMenu(){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',ui.openMenu)}
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?ui.closeMenu:ui.openMenu)});
sidebar.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}),{rootMargin:'-10% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));render();

function renderDetails(beer){
 const details=document.querySelector('#dialog-details');details.replaceChildren();
 const fields=[[ui.category,beer.category],[ui.format,beer.format],[ui.appearance,beer.appearance],[ui.aroma,beer.aroma],[ui.flavor,beer.flavor],[ui.pairing,beer.pairing]];
 for(const [label,value] of fields){if(!value)continue;const heading=document.createElement('h3');heading.textContent=label;const text=document.createElement('p');text.textContent=value;details.append(heading,text)}
 if(beer.awards?.length){const heading=document.createElement('h3');heading.textContent=ui.awards;const list=document.createElement('ul');for(const award of beer.awards){const item=document.createElement('li');item.textContent=award;list.append(item)}details.append(heading,list)}
 if((beer.category==='Edición especial'||beer.category==='Special edition')){const note=document.createElement('p');note.className='catalog-note';note.textContent=ui.provisional;details.append(note)}
}

// Move only the decorative layer; text stays still and readable.
(function setupStoryParallax(){
 const section=document.querySelector('#mundo');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(!section || !('IntersectionObserver' in window)) return;
 let visible=false,frame=0,pointerX=0,pointerY=0;
 function update(){
  frame=0;
  if(!visible || motion.matches) return;
  const rect=section.getBoundingClientRect();
  const progress=(innerHeight/2-(rect.top+rect.height/2))/((innerHeight+rect.height)/2);
  section.style.setProperty('--world-scroll',`${Math.max(-32,Math.min(32,progress*32))}px`);
  section.style.setProperty('--world-x',`${pointerX}px`);
  section.style.setProperty('--world-y',`${pointerY}px`);
 }
 function schedule(){if(visible && !motion.matches && !frame) frame=requestAnimationFrame(update)}
 function reset(){
  if(frame)cancelAnimationFrame(frame);
  frame=0;pointerX=0;pointerY=0;
  for(const property of ['--world-scroll','--world-x','--world-y'])section.style.removeProperty(property);
 }
 function sync(){
  window.removeEventListener('scroll',schedule);
  if(visible && !motion.matches){window.addEventListener('scroll',schedule,{passive:true});schedule()}
  else reset();
 }
 const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()});
 visibility.observe(section);
 section.addEventListener('pointermove',event=>{
  if(motion.matches || event.pointerType!=='mouse')return;
  const rect=section.getBoundingClientRect();
  pointerX=((event.clientX-rect.left)/rect.width-.5)*-20;
  pointerY=((event.clientY-rect.top)/rect.height-.5)*-14;
  schedule();
 });
 section.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;schedule()});
 window.addEventListener('resize',schedule,{passive:true});
 motion.addEventListener('change',sync);
})();

// A second native dialog keeps the beer details open underneath the enlarged photo.
const photoButton=document.querySelector('#dialog-photo');
const photoViewer=document.querySelector('#photo-viewer');
const photoStage=document.querySelector('#photo-stage');
photoButton.addEventListener('click',()=>{
 const source=photoButton.querySelector('img');
 if(!source)return;
 const image=document.createElement('img');
 image.src=source.src;
 image.alt=source.alt;
 photoStage.className='photo-stage '+(photoButton.classList.contains('mockup')?'mockup':'photograph');
 photoStage.replaceChildren(image);
 document.querySelector('#photo-caption').textContent=source.alt;
 photoViewer.showModal();
});
document.querySelector('.photo-viewer-close').addEventListener('click',()=>photoViewer.close());
photoViewer.addEventListener('click',event=>{
 if(event.target!==photoViewer)return;
 const rect=photoViewer.getBoundingClientRect();
 if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)photoViewer.close();
});
photoViewer.addEventListener('close',()=>photoStage.replaceChildren());
dialog.addEventListener('close',()=>{if(photoViewer.open)photoViewer.close()});
