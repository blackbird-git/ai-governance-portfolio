(() => {
  const nav=document.querySelector('.profile-nav');
  const toggle=document.querySelector('.profile-menu-toggle');
  if(nav&&toggle){
    const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
    toggle.addEventListener('click',()=>{let opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))close();});
  }
  const links=[...document.querySelectorAll('.profile-nav a')];
  const home=document.querySelector('.profile-home');
  if(home && 'IntersectionObserver' in window){
    const sections=[...document.querySelectorAll('#about,#projects,#resume')];
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible)return;
      links.forEach(a=>a.removeAttribute('aria-current'));
      const active=links.find(a=>a.getAttribute('href')==='#'+visible.target.id);
      if(active)active.setAttribute('aria-current','location');
    },{rootMargin:'-12% 0px -57% 0px',threshold:0});
    sections.forEach(s=>observer.observe(s));
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
