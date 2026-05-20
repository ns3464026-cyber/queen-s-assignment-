// ===========================
// DARK MODE TOGGLE
// ===========================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const saved = localStorage.getItem('qoc-theme') || 'light';
html.setAttribute('data-theme', saved);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('qoc-theme', next);
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll(
  '.about-grid, .programs-grid, .team-grid, .stat-card, .program-card, .team-card, .contact-grid, .cta-inner'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));

// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===========================
// CONTACT FORM — simple feedback
// ===========================
const formBtn = document.querySelector('.contact-form .btn');
if (formBtn) {
  formBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let filled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        filled = false;
        input.style.borderColor = '#c1440e';
        setTimeout(() => (input.style.borderColor = ''), 2000);
      }
    });
    if (filled) {
      formBtn.textContent = '✓ Message Sent!';
      formBtn.style.background = '#2d7a3d';
      inputs.forEach(input => (input.value = ''));
      setTimeout(() => {
        formBtn.textContent = 'Send Message';
        formBtn.style.background = '';
      }, 3000);
    }
  });
}
