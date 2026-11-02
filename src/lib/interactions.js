/* Click interactions, all animated with GSAP:
   - every #link scrolls smoothly and lands exactly at the start of its section
     (pinned scenes land on their first frame, other sections sit just under the header)
   - active section is underlined in the header nav
   - mobile menu, FAQ answers, theme switch, buttons, form message and copy button animate */
export default function initInteractions(opts) {
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  var lenis = opts && opts.lenis;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement, hdr = $('#hdr'), mnav = $('#mnav'), menuBtn = $('#menuBtn');

  /* ---------- progress line shown while travelling ---------- */
  var line = document.createElement('div'); line.className = 'go-line'; document.body.appendChild(line);

  /* ---------- exact landing point for a section ---------- */
  function pinFor(el) {
    var all = ScrollTrigger ? ScrollTrigger.getAll() : [];
    for (var i = 0; i < all.length; i++) { var st = all[i]; if (st.pin && (st.pin === el || st.trigger === el)) return st; }
    return null;
  }
  function landing(el) {
    var st = pinFor(el);
    if (st) return Math.ceil(st.start) + 2;                         // first frame of a pinned scene
    var hh = hdr ? hdr.getBoundingClientRect().height : 70;
    if (el.id === 'top' || el.id === 'top-hero') return 0;
    var y = el.getBoundingClientRect().top + window.scrollY - hh;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    return Math.max(0, Math.min(max, Math.round(y)));
  }
  function arrive(el) {
    if (reduce || pinFor(el)) return;
    var head = $('.h-sec, h2, .ycap', el);
    if (head) gsap.fromTo(head, { y: 26, opacity: .35 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', clearProps: 'transform,opacity' });
    var eb = $('.eyebrow', el);
    if (eb) gsap.fromTo(eb, { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: .6, ease: 'power3.out', clearProps: 'transform,opacity' });
  }
  var going = false;
  function goTo(el, id) {
    var from = window.scrollY, to = landing(el), dist = Math.abs(to - from);
    if (dist < 4) { arrive(el); return; }
    var dur = reduce ? 0 : Math.min(2.4, Math.max(.9, dist / 4200));
    going = true;
    gsap.killTweensOf(line);
    gsap.set(line, { scaleX: 0, opacity: 1 });
    gsap.to(line, { scaleX: 1, duration: dur, ease: 'power2.inOut' });
    function done() {
      going = false;
      gsap.to(line, { opacity: 0, duration: .4, delay: .1 });
      // re-measure once: pinned spacers can shift after the jump
      var fix = landing(el);
      if (Math.abs(window.scrollY - fix) > 3) { if (lenis) lenis.scrollTo(fix, { immediate: true, force: true }); else window.scrollTo(0, fix); }
      arrive(el);
      if (id && history.replaceState) history.replaceState(null, '', id);
    }
    if (lenis) {
      lenis.scrollTo(to, { duration: dur, easing: function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }, lock: true, force: true, onComplete: done });
    } else {
      var o = { y: from };
      gsap.to(o, { y: to, duration: dur, ease: 'power3.inOut', onUpdate: function () { window.scrollTo(0, o.y); }, onComplete: done });
    }
  }
  window.__goTo = function (sel) { var el = document.querySelector(sel); if (el) goTo(el, sel); };

  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href'); if (id.length < 2) return;
      var t = document.querySelector(id); if (!t) return;
      e.preventDefault();
      if (mnav && !mnav.hidden) { setMenu(false, function () { goTo(t, id); }); } else goTo(t, id);
    });
  });

  /* ---------- active link in header nav ---------- */
  var navLinks = $$('.nav a[href^="#"]');
  navLinks.forEach(function (a) {
    var t = document.querySelector(a.getAttribute('href')); if (!t || !ScrollTrigger) return;
    var spacer = t.parentElement && t.parentElement.classList.contains('pin-spacer') ? t.parentElement : t;
    ScrollTrigger.create({ trigger: spacer, start: 'top 45%', end: 'bottom 45%', onToggle: function (self) { a.classList.toggle('on', self.isActive); } });
  });

  /* ---------- mobile menu ---------- */
  function setMenu(open, after) {
    if (!mnav || !menuBtn) { if (after) after(); return; }
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.classList.toggle('open', open);
    var links = $$('a', mnav);
    gsap.killTweensOf([mnav].concat(links));
    if (open) {
      mnav.hidden = false;
      if (lenis) lenis.stop();
      if (reduce) { if (after) after(); return; }
      gsap.fromTo(mnav, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .6, ease: 'expo.out' });
      gsap.fromTo(links, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'power3.out', stagger: .05, delay: .12, onComplete: after });
    } else {
      if (lenis) lenis.start();
      if (mnav.hidden || reduce) { mnav.hidden = true; if (after) after(); return; }
      gsap.to(links, { y: -20, opacity: 0, duration: .25, stagger: .02, ease: 'power2.in' });
      gsap.to(mnav, { clipPath: 'inset(0% 0% 100% 0%)', duration: .45, ease: 'expo.in', delay: .1, onComplete: function () { mnav.hidden = true; gsap.set(mnav, { clearProps: 'clipPath' }); gsap.set(links, { clearProps: 'all' }); if (after) after(); } });
    }
  }
  if (menuBtn) {
    var fresh = menuBtn.cloneNode(true); menuBtn.parentNode.replaceChild(fresh, menuBtn); menuBtn = fresh;   // drop the old instant handler
    menuBtn.addEventListener('click', function () { setMenu(mnav.hidden); });
  }
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mnav && !mnav.hidden) setMenu(false); });

  /* ---------- FAQ: answers slide open and closed ---------- */
  $$('.faq details').forEach(function (d) {
    var sum = $('summary', d), body = $('p', d);
    sum.addEventListener('click', function (e) {
      if (reduce) return;
      e.preventDefault();
      gsap.killTweensOf(body);
      if (!d.open) {
        $$('.faq details[open]').forEach(function (o) { if (o !== d) closeIt(o); });
        d.open = true;
        gsap.fromTo(body, { height: 0, opacity: 0, y: -10 }, { height: 'auto', opacity: 1, y: 0, duration: .5, ease: 'power3.out', clearProps: 'height' });
      } else closeIt(d);
    });
    function closeIt(o) {
      var p = $('p', o);
      gsap.to(p, { height: 0, opacity: 0, duration: .35, ease: 'power2.in', onComplete: function () { o.open = false; gsap.set(p, { clearProps: 'all' }); } });
    }
  });

  /* ---------- theme switch: colours fade, icon spins ---------- */
  var themeBtn = $('#themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    if (reduce) return;
    root.classList.add('theme-anim');
    clearTimeout(themeBtn._t); themeBtn._t = setTimeout(function () { root.classList.remove('theme-anim'); }, 700);
    gsap.fromTo($$('svg', themeBtn), { rotate: -120, scale: .4 }, { rotate: 0, scale: 1, duration: .6, ease: 'back.out(2)' });
  }, true);

  /* ---------- buttons: press feedback ---------- */
  $$('.btn, .icon-btn, .copy-btn, .chip').forEach(function (b) {
    b.addEventListener('pointerdown', function () { if (!reduce) gsap.to(b, { scale: .94, duration: .12, ease: 'power2.out' }); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { b.addEventListener(ev, function () { gsap.to(b, { scale: 1, duration: .5, ease: 'elastic.out(1,.45)' }); }); });
  });

  /* ---------- form message + copy button ---------- */
  var form = $('#qform'), msg = $('#formMsg');
  if (form && msg) form.addEventListener('submit', function () {
    if (reduce) return;
    setTimeout(function () {
      var bad = /valid email/.test(msg.textContent);
      gsap.fromTo(msg, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .45, ease: 'power3.out' });
      if (bad) gsap.fromTo(form, { x: -10 }, { x: 0, duration: .5, ease: 'elastic.out(1,.25)' });
    }, 0);
  });
  var copy = $('#copyMail');
  if (copy) copy.addEventListener('click', function () { if (!reduce) setTimeout(function () { gsap.fromTo(copy, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: .4, ease: 'back.out(2)' }); }, 30); });

  /* ---------- map port card ---------- */
  var pop = $('#portPop');
  if (pop && window.MutationObserver && !reduce) {
    var last = '';
    new MutationObserver(function () {
      var n = ($('#ppName') || {}).textContent || '';
      if (n === last) return; last = n;
      gsap.fromTo(pop, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .45, ease: 'power3.out', overwrite: true });
    }).observe(pop, { childList: true, subtree: true, characterData: true });
  }

  /* open with a #hash in the address bar: land there after load */
  if (location.hash && document.querySelector(location.hash)) {
    var h = location.hash; window.addEventListener('load', function () { setTimeout(function () { window.__goTo(h); }, 300); });
  }

  return { goTo: goTo, setMenu: setMenu };
}
