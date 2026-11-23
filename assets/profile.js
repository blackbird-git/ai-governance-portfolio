(() => {
  const nav = document.querySelector('.profile-nav');
  const toggle = document.querySelector('.profile-menu-toggle');
  if (nav && toggle) {
    const close = () => {nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
    toggle.addEventListener('click', () => {const expanded = !nav.classList.contains('open');nav.classList.toggle('open',expanded);toggle.setAttribute('aria-expanded',String(expanded));});
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click',close));
    document.addEventListener('keydown', event => {if(event.key === 'Escape')close();});
    document.addEventListener('click', event => {if(!nav.contains(event.target) && !toggle.contains(event.target))close();});
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const links = [...document.querySelectorAll('.profile-home-page .profile-nav a[href^="#"]')];
  const sections = links.map(link => ({link,section:document.getElementById(link.getAttribute('href').slice(1))})).filter(x => x.section);
  if (sections.length && 'IntersectionObserver' in window) {
    const visible = new Set();
    const mark = () => {let current = sections[0]; for(const item of sections){if(item.section.getBoundingClientRect().top < innerHeight * .36)current = item;} sections.forEach(item => {if(item === current)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');});};
    const observer = new IntersectionObserver(() => mark(),{rootMargin:'-10% 0px -55% 0px'});
    sections.forEach(item => observer.observe(item.section));
    addEventListener('scroll',mark,{passive:true});mark();
  }
})();