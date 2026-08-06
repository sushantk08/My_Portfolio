/**
 * Toggle mobile navigation drawer
 */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

/**
 * Close mobile navigation drawer
 */
function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.remove('open');
  }
}

/**
 * Filter projects by category tag
 * @param {string} tag - Tag category to display ('all', 'fullstack', 'ml', 'backend', 'data', 'tested')
 * @param {HTMLElement} btn - Active filter button element
 */
function filterProjects(tag, btn) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card) => {
    if (tag === 'all') {
      card.classList.remove('hidden');
    } else {
      const cardTags = card.dataset.tags ? card.dataset.tags.split(',') : [];
      card.classList.toggle('hidden', !cardTags.includes(tag));
    }
  });
}

/**
 * Update active navigation link on scroll
 */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 80) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.style.color = 'var(--text)';
    } else {
      link.style.color = '';
    }
  });
});