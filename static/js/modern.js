/* ============================================================
   Nextalin Enterprises – Modern JS enhancements
   Vanilla JS — no jQuery dependency
   ============================================================ */
(function () {
  'use strict';

  /* ── Scroll Progress Bar ──────────────────────────────────── */
  var bar = document.createElement('div');
  bar.id = 'nx-progress';
  document.body.prepend(bar);

  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0) bar.style.width = (window.scrollY / max * 100).toFixed(2) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();


  /* ── Sticky nav: add class on scroll ─────────────────────── */
  var navInner = document.querySelector('.site-header-menu-inner');
  if (navInner) {
    function onNavScroll() {
      navInner.classList.toggle('nx-scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();
  }


  /* ── Scroll-reveal with IntersectionObserver ─────────────── */
  var revealSelectors = [
    '.section-title',
    '.featured-icon-box',
    '.featured-imagebox.featured-imagebox-portfolio',
    '.featured-imagebox-sevices',
    '.testimonials',
    '.ttm-fid',
    '.call_detail',
  ].join(',');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('nx-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -36px 0px',
  });

  document.querySelectorAll(revealSelectors).forEach(function (el) {
    // Elements already in the viewport on load: reveal immediately, no animation
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      return;
    }

    el.classList.add('nx-reveal');

    // Apply stagger delay based on sibling index within its grid row
    var col = el.closest('[class*="col-lg"],[class*="col-md"],[class*="col-sm"],[class*="col-xl"]');
    if (col && col.parentElement) {
      var siblings = Array.from(col.parentElement.children);
      var idx = siblings.indexOf(col);
      if (idx >= 1 && idx <= 4) el.classList.add('nx-d' + idx);
    }

    io.observe(el);
  });


  /* ── Smooth scroll for on-page anchor links ──────────────── */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });


  /* ── Burger menu keyboard accessibility ──────────────────── */
  var burger = document.querySelector('.btn-show-menu-mobile');
  if (burger) {
    burger.setAttribute('tabindex', '0');
    burger.setAttribute('aria-label', 'Toggle navigation');
    burger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        burger.click();
      }
    });
  }


  /* ── Lazy-load images natively where supported ───────────── */
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img:not([loading])').forEach(function (img) {
      img.setAttribute('loading', 'lazy');
    });
  }


  /* ── Highlight active nav item from current URL ──────────── */
  var currentPath = window.location.pathname;
  document.querySelectorAll('.main-menu .menu > li').forEach(function (li) {
    var a = li.querySelector('a');
    if (!a) return;
    var href = (a.getAttribute('href') || '').replace(/\/$/, '');
    var path = currentPath.replace(/\/$/, '');
    var isHome = href === '' || href === '/';
    var match  = isHome
      ? (path === '' || path === '/')
      : (href !== '' && href !== '/' && path.startsWith(href));
    if (match) li.classList.add('active');
  });

}());
