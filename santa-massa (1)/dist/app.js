'use strict';
const c = window.SANTA_MASSA;
const map = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(c.address);
document.querySelectorAll('[data-map]').forEach(a => a.href = map);
document.querySelectorAll('[data-phone]').forEach(a => a.href = 'tel:+' + c.phoneDigits);
document.querySelectorAll('[data-phone-text]').forEach(a => a.textContent = c.phone);
document.querySelectorAll('[data-address]').forEach(a => a.textContent = c.address);
document.querySelectorAll('[data-rating]').forEach(a => a.textContent = c.rating);
document.querySelectorAll('[data-reviews]').forEach(a => a.textContent = c.reviews);
document.querySelectorAll('[data-price]').forEach(a => a.textContent = c.price);
document.querySelectorAll('[data-copy]').forEach(el => { if (el.dataset.copy === 'title') el.innerHTML = c.copy.title; else el.textContent = c.copy[el.dataset.copy]; });
document.querySelector('.hero-image img').src = c.heroImage;
document.querySelector('.hero-image source').srcset = c.heroImageMobile;
const schema = JSON.parse(document.getElementById('restaurant-data').textContent); schema.name=c.name; schema.telephone='+'+c.phoneDigits; document.getElementById('restaurant-data').textContent=JSON.stringify(schema);
document.getElementById('year').textContent = new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle'), nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',closeMenu);
if(c.whatsappEnabled){const wa=document.getElementById('whatsapp');wa.href='https://wa.me/'+c.phoneDigits+'?text='+encodeURIComponent(c.whatsappMessage);wa.hidden=false;document.body.classList.add('has-whatsapp');}
