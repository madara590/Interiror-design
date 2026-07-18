// Mobile nav toggle — shared across all pages
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const scrim = document.getElementById('navScrim');
  if (!toggle || !links || !scrim) return;

  function closeMenu(){
    toggle.classList.remove('open');
    links.classList.remove('open');
    scrim.classList.remove('open');
    document.body.style.overflow = '';
  }
  function openMenu(){
    toggle.classList.add('open');
    links.classList.add('open');
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? closeMenu() : openMenu();
  });
  scrim.addEventListener('click', closeMenu);
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if(window.innerWidth > 800) closeMenu(); });
});
