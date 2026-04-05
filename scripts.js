/**
 * @file scripts.js
 * @description Scroll-triggered animations and EN/ES language toggle.
 */

(function () {
  'use strict';

  /* ---- Scroll animations (IntersectionObserver) ---- */
  var targets = document.querySelectorAll('[data-animate]');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-delay') || '0', 10);

          setTimeout(function () {
            el.classList.add('is-visible');
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Language toggle (EN / ES) ---- */
  var STORAGE_KEY = 'portfolio-lang';
  var toggleBtn = document.querySelector('.lang-toggle');
  var optionEn = toggleBtn.querySelector('[data-lang-value="en"]');
  var optionEs = toggleBtn.querySelector('[data-lang-value="es"]');

  /**
   * Applies the chosen language to all elements with data-lang-* attributes.
   * @param {string} lang - 'en' or 'es'
   */
  function setLanguage(lang) {
    var attr = 'data-lang-' + lang;
    var elements = document.querySelectorAll('[' + attr + ']');

    elements.forEach(function (el) {
      var value = el.getAttribute(attr);
      if (value !== null) {
        el.innerHTML = value;
      }
    });

    document.documentElement.lang = lang;

    optionEn.classList.toggle('lang-toggle__option--active', lang === 'en');
    optionEs.classList.toggle('lang-toggle__option--active', lang === 'es');

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — silently ignore */
    }
  }

  toggleBtn.addEventListener('click', function () {
    var current = document.documentElement.lang || 'en';
    setLanguage(current === 'en' ? 'es' : 'en');
  });

  /* Restore saved preference on load */
  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* localStorage unavailable */
  }

  if (saved === 'es') {
    setLanguage('es');
  }
})();
