// ====== Utilities ======
const $ = (sel, scope=document) => scope.querySelector(sel);
const $$ = (sel, scope=document) => Array.from(scope.querySelectorAll(sel));

// ====== Year ======
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// ====== Theme Toggle ======
const themeBtn = document.getElementById('themeBtn');
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  if(themeBtn) themeBtn.textContent = mode === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('eg-theme', mode);
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(cur === 'dark' ? 'light' : 'dark');
}
window.toggleTheme = toggleTheme;
setTheme(localStorage.getItem('eg-theme') || 'dark');
if(themeBtn) themeBtn.addEventListener('click', toggleTheme);

// ====== Mobile Drawer ======
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
function closeDrawer(){
  if(!drawer) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
}
window.closeDrawer = closeDrawer;
if(burger && drawer){
  burger.addEventListener('click',()=>{
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
  });
}

// ====== Simple Carousel ======
const slides = $$('.slide');
const dotsWrap = $('.dots');
let idx = 0, timer;

function renderDots(){
  if(!dotsWrap) return;
  dotsWrap.innerHTML = '';
  slides.forEach((_, i)=>{
    const d = document.createElement('button');
    d.className = 'dot' + (i===idx?' active':'');
    d.setAttribute('aria-label','Go to slide '+(i+1));
    d.onclick = ()=>{ idx = i; update(); resetTimer(); };
    dotsWrap.appendChild(d);
  });
}

function update(){
  slides.forEach((s,i)=> s.classList.toggle('active', i===idx));
  renderDots();
}

function next(){ idx = (idx+1) % slides.length; update(); }
function resetTimer(){ clearInterval(timer); timer = setInterval(next, 4500); }

if(slides.length){
  update();
  resetTimer();
}
