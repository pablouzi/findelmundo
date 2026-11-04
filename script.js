let filter='Todas';
const grid=document.querySelector('#beer-grid');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(){
 const query=normalize(document.querySelector('#search').value.trim());
 const shown=beers.filter(b=>(filter==='Todas'||b.brand===filter)&&normalize(b.name+' '+b.style+' '+b.brand).includes(query));
 document.querySelector('#result-count').textContent=`${shown.length} REFERENCIAS EN ESTA VISTA · ${beers.length} EN EL CATÁLOGO`;
 grid.innerHTML=shown.length?shown.map(b=>{const i=beers.indexOf(b);return `<article class="beer-card ${b.brand==='Crápula'?'crapula':''}"><div class="beer-image ${b.image?'has-photo '+b.imageLayout:''}"><span class="beer-number">N° ${String(i+1).padStart(2,'0')}</span><span class="beer-code">${b.brand==='Crápula'?'CR':'IN'} / SUR</span>${b.image?`<img class="product-photo" src="${b.image}" alt="${b.brand} ${b.name}, presentación en lata" loading="lazy" decoding="async">`:`<div class="placeholder"><em>Próximamente</em><small>IMAGEN DE ENVASE<br>PENDIENTE</small></div>`}</div><div class="beer-info"><p class="beer-brand">${b.brand.toUpperCase()}</p><h3>${b.name.toUpperCase()}</h3><div class="beer-meta"><span>ALC. ${b.alcohol==='—'?'No informado':b.alcohol}</span><span>IBU ${b.ibu==='—'?'No informado':b.ibu}</span></div></div><button class="beer-open" data-beer="${i}" aria-label="Explorar ficha de ${b.name}">EXPLORAR FICHA <span aria-hidden="true"><svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></button></article>`}).join(''):'<p class="empty">No encontramos cervezas con esa búsqueda. Prueba otro nombre o estilo.</p>';
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))});
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render()}));
document.querySelector('#search').addEventListener('input',render);
document.querySelectorAll('[data-brand-link]').forEach(a=>a.addEventListener('click',()=>{filter=a.dataset.brandLink;document.querySelector('#search').value='';render()}));
const dialog=document.querySelector('#beer-dialog');
grid.addEventListener('click',e=>{const button=e.target.closest('[data-beer]');if(!button)return;const b=beers[button.dataset.beer];document.querySelector('#dialog-brand').textContent=b.brand.toUpperCase()+' / LA COLECCIÓN';document.querySelector('#dialog-title').textContent=b.name.toUpperCase();document.querySelector('#dialog-style').textContent=b.style;document.querySelector('#dialog-description').textContent=b.description||(b.appearance?'':'Descripción pendiente de la ficha técnica.');renderDetails(b);const photo=document.querySelector('#dialog-photo');photo.replaceChildren();photo.hidden=!b.image;photo.className='dialog-photo '+(b.imageLayout||'');if(b.image){const image=document.createElement('img');image.src=b.image;image.alt=b.brand+' '+b.name+', presentación en lata';photo.append(image)};document.querySelector('#dialog-alcohol').textContent=b.alcohol==='—'?'No informado':b.alcohol;document.querySelector('#dialog-ibu').textContent=b.ibu==='—'?'No informado':b.ibu;dialog.showModal()});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
const menu=document.querySelector('#menu-toggle');const sidebar=document.querySelector('#sidebar');
function closeMenu(){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú')}
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
sidebar.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}),{rootMargin:'-10% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));render();

function renderDetails(beer){
 const details=document.querySelector('#dialog-details');details.replaceChildren();
 const fields=[['Colección',beer.category],['Formato',beer.format],['Apariencia',beer.appearance],['Aroma',beer.aroma],['Sabor',beer.flavor],['Maridaje',beer.pairing]];
 for(const [label,value] of fields){if(!value)continue;const heading=document.createElement('h3');heading.textContent=label;const text=document.createElement('p');text.textContent=value;details.append(heading,text)}
 if(beer.awards?.length){const heading=document.createElement('h3');heading.textContent='Reconocimientos';const list=document.createElement('ul');for(const award of beer.awards){const item=document.createElement('li');item.textContent=award;list.append(item)}details.append(heading,list)}
 if(beer.category==='Edición especial'){const note=document.createElement('p');note.className='catalog-note';note.textContent='Denominación provisional del portafolio de trabajo.';details.append(note)}
}
