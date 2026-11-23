(() => {
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open',open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if(!nav.contains(e.target)&&!toggle.contains(e.target)) close(); });
  }
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    },{threshold:.08,rootMargin:'0px 0px 45px 0px'});
    items.forEach(el=>observer.observe(el));
  } else items.forEach(el=>el.classList.add('visible'));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
