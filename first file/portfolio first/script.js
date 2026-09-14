const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = menuButton?.querySelector('i');

function setMenuState(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
}

menuButton?.addEventListener('click', () => {
    setMenuState(!navLinks.classList.contains('active'));
});

navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuState(false);
});
