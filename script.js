const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const topButton = document.querySelector('.top-button');
window.addEventListener('scroll',()=>{
  topButton.classList.toggle('show', window.scrollY > 700);
});
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const menu = document.querySelector('.nav-links');
document.querySelector('.menu-toggle').addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
