/* ============================================================
   Nextalin Enterprises — Modern JS v2
   Vanilla JS — no jQuery dependency
   ============================================================ */
(function () {
  'use strict';

  /* ── Page fade-in ─────────────────────────────────────────── */
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity .4s ease';
  window.addEventListener('load', function () {
    document.documentElement.style.opacity = '1';
  });


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


  /* ── Sticky nav scroll class ──────────────────────────────── */
  var navInner = document.querySelector('.site-header-menu-inner');
  if (navInner) {
    function onNavScroll() {
      navInner.classList.toggle('nx-scrolled', window.scrollY > 48);
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();
  }


  /* ── Scroll-reveal (IntersectionObserver) ─────────────────── */
  var revealSelectors = [
    '.section-title',
    '.featured-icon-box',
    '.featured-imagebox.featured-imagebox-portfolio',
    '.featured-imagebox-sevices',
    '.testimonials',
    '.ttm-fid',
    '.call_detail',
    '.spacing-1',
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
    rootMargin: '0px 0px -32px 0px',
  });

  document.querySelectorAll(revealSelectors).forEach(function (el) {
    /* Skip elements already in view on load — no flash of hidden content */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.classList.add('nx-reveal');

    /* Stagger siblings in the same Bootstrap row */
    var col = el.closest('[class*="col-lg"],[class*="col-md"],[class*="col-sm"],[class*="col-xl"]');
    if (col && col.parentElement) {
      var idx = Array.from(col.parentElement.children).indexOf(col);
      if (idx >= 1 && idx <= 4) el.classList.add('nx-d' + idx);
    }

    io.observe(el);
  });


  /* ── Smooth counter animation ─────────────────────────────── */
  /* Runs alongside numinate.js — uses data-nx-done to avoid doubling */
  var counterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-to]').forEach(function (el) {
        if (el.dataset.nxDone) return;
        el.dataset.nxDone = '1';
        var target = +el.dataset.to;
        var after  = el.dataset.after || '';
        var start  = performance.now();
        var dur    = 1800;

        function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

        (function tick(now) {
          var pct = Math.min((now - start) / dur, 1);
          el.textContent = Math.floor(easeOut(pct) * target) + after;
          if (pct < 1) requestAnimationFrame(tick);
        })(start);
      });
      counterIO.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.ttm-fid').forEach(function (el) {
    counterIO.observe(el);
  });


  /* ── Active nav highlighting from URL ─────────────────────── */
  var path = window.location.pathname;
  document.querySelectorAll('.main-menu .menu > li').forEach(function (li) {
    var a = li.querySelector('a');
    if (!a) return;
    var href = (a.getAttribute('href') || '').replace(/\/$/, '');
    var p    = path.replace(/\/$/, '');
    var home = href === '' || href === '/';
    if (home ? (p === '' || p === '/') : (href && p.startsWith(href) && href !== '/')) {
      li.classList.add('active');
    }
  });


  /* ── Smooth scroll for same-page anchors ──────────────────── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });


  /* ── Burger keyboard accessibility ───────────────────────── */
  var burger = document.querySelector('.btn-show-menu-mobile');
  if (burger) {
    burger.setAttribute('tabindex', '0');
    burger.setAttribute('aria-label', 'Toggle navigation');
    burger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); burger.click(); }
    });
  }


  /* ── Native lazy-load for images ─────────────────────────── */
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img:not([loading])').forEach(function (img) {
      img.setAttribute('loading', 'lazy');
    });
  }

}());
