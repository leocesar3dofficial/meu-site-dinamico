/* eslint-disable import/extensions */
import handlePath from './router.js';

if (!window.import === false) {
  document.getElementById('module-support-warning').style.display = 'block';
}

// themes
const themeToggle = document.getElementById('theme-toggle');
const { body } = document;

function enableThemes() {
  themeToggle.addEventListener('change', () => {
    if (body.getAttribute('data-theme') === 'light') {
      body.setAttribute('data-theme', 'dark');
    } else if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
    }
  });
}

const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

if (prefersDarkMode) {
  body.setAttribute('data-theme', 'dark');
} else {
  body.setAttribute('data-theme', 'light');
}

// Close the menu when the user clicks outside of it
const menuCheckbox = document.querySelector('#menu-toggle input');
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('#menu a');

document.addEventListener('click', (event) => {
  if (!menuToggle.contains(event.target) && menuCheckbox.checked) {
    menuCheckbox.checked = false;
  }
});

// Close the menu when a link is clicked
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuCheckbox.checked = false;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  enableThemes();
  handlePath();
});
