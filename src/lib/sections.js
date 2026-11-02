/* Scroll animations for the lower page: Services, Platform, Why, Industries,
   FAQ, Contact and Footer. Everything plays once as it enters the screen,
   except the contact panel and footer wordmark, which follow the scroll. */
export const LOWER = '#services, #platform, #why, #industries, #faq, #contact, .ftr';

export default function initSectionMotion() {
  var gsap = window.gsap;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* wrap every word in a mask so it can rise into view (keeps inner spans and colours) */
  function splitWords(el) {
    if (!el || el.dataset.split) return [];
    el.dataset.split = '1';
    var out = [];
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var parts = n.textContent.split(/(\s+)/), frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            var wd = document.createElement('span'), wi = document.createElement('span');
            wd.className = 'wd'; wi.className = 'wi'; wi.textContent = p; wd.appendChild(wi); frag.appendChild(wd); out.push(wi);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    })(el);
    return out;
  }
  function rise(words, trigger, delay) {
    if (!words.length) return;
    gsap.from(words, { yPercent: 115, rotate: 5, duration: 1, ease: 'power4.out', stagger: .055, delay: delay || 0,
      scrollTrigger: { trigger: trigger, start: 'top 86%', once: true } });
  }
  function eyebrow(e) {
    if (!e) return;
    gsap.from(e, { x: -30, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: e, start: 'top 90%', once: true } });
  }

  /* section headings */
  $$('#services .h-sec, #platform .h-sec, #why .h-sec, #industries .h-sec, #faq .h-sec, .cta h2').forEach(function (h) { rise(splitWords(h), h); });
  $$('#services .eyebrow, #platform .eyebrow, #why .eyebrow, #industries .eyebrow, #faq .eyebrow, .cta .eyebrow').forEach(eyebrow);
  $$('#services .lede, #faq .lede, .cta-grid > div > p:not(.eyebrow)').forEach(function (p) {
    gsap.from(p, { y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: .25, scrollTrigger: { trigger: p, start: 'top 90%', once: true } });
  });

  /* SERVICES: cards rise in 3D, photos wipe up and settle */
  var cards = $$('.svc');
  cards.forEach(function (c, i) {
    var tl = gsap.timeline({ scrollTrigger: { trigger: c, start: 'top 88%', once: true }, delay: (i % 3) * .12 });
    tl.from(c, { y: 90, rotateX: 14, opacity: 0, transformPerspective: 900, transformOrigin: '50% 100%', duration: 1.1, ease: 'power3.out' }, 0);
    var box = $('.svc-img', c), im = $('.svc-img img', c), ui = $('.svc-ui', c);
    if (box) tl.fromTo(box, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.out' }, .15);
    if (im) tl.from(im, { scale: 1.45, duration: 1.6, ease: 'expo.out' }, .15);
    var code = $('.code', c); if (code) tl.from(code, { x: -40, opacity: 0, duration: .6, ease: 'power3.out' }, .6);
    if (ui) tl.from($$('.r', ui), { x: -50, opacity: 0, stagger: .12, duration: .6, ease: 'power3.out' }, .3);
    tl.from($$('.svc-body > *', c), { y: 24, opacity: 0, stagger: .08, duration: .7, ease: 'power3.out' }, .45);
  });

  /* PLATFORM: feature rows slide in with icon pop, tracker card swings in */
  $$('.feat li').forEach(function (li, i) {
    var tl = gsap.timeline({ scrollTrigger: { trigger: li, start: 'top 90%', once: true }, delay: i * .08 });
    tl.from(li, { x: -60, opacity: 0, duration: .8, ease: 'power3.out' }, 0)
      .from($('svg', li), { scale: 0, rotate: -90, duration: .7, ease: 'back.out(2.2)' }, .15);
  });
  var trk = $('.trk');
  if (trk) {
    var tt = gsap.timeline({ scrollTrigger: { trigger: trk, start: 'top 82%', once: true } });
    tt.from(trk, { x: 120, rotateY: -22, opacity: 0, transformPerspective: 1100, transformOrigin: '100% 50%', duration: 1.2, ease: 'power3.out' }, 0)
      .from($$('.route-stops > div', trk), { y: 20, opacity: 0, stagger: .12, duration: .5, ease: 'power2.out' }, .5)
      .from($$('.trk-kv > div', trk), { y: 26, opacity: 0, stagger: .1, duration: .55, ease: 'power2.out' }, .8)
      .from($$('.trk-log li', trk), { x: 30, opacity: 0, stagger: .1, duration: .5, ease: 'power2.out' }, 1);
  }

  /* WHY: photo card wipes open, other cards flip up one by one */
  var photo = $('.why-card.photo');
  if (photo) {
    var pt = gsap.timeline({ scrollTrigger: { trigger: photo, start: 'top 85%', once: true } });
    pt.fromTo(photo, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' }, 0)
      .from($('img', photo), { scale: 1.4, duration: 1.8, ease: 'expo.out' }, .2)
      .from($$('div > *', photo), { y: 30, opacity: 0, stagger: .1, duration: .7, ease: 'power3.out' }, .8);
    gsap.fromTo($('img', photo), { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: photo, start: 'top bottom', end: 'bottom top', scrub: true } });
  }
  $$('.why-card:not(.photo)').forEach(function (c, i) {
    gsap.from(c, { rotateX: -75, y: 40, opacity: 0, transformPerspective: 900, transformOrigin: '50% 0%', duration: 1, ease: 'back.out(1.4)', delay: i * .12,
      scrollTrigger: { trigger: '.why-grid', start: 'top 80%', once: true } });
  });

  /* INDUSTRIES: chips pop in, then drift slightly with the scroll */
  var chips = $$('.chip');
  if (chips.length) {
    gsap.from(chips, { scale: .4, y: 40, opacity: 0, duration: .7, ease: 'back.out(2)', stagger: { each: .05, from: 'random' },
      scrollTrigger: { trigger: '.chips', start: 'top 88%', once: true } });
    chips.forEach(function (c, i) {
      gsap.to(c, { y: (i % 2 ? -1 : 1) * 14, ease: 'none', scrollTrigger: { trigger: '.chips', start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  }

  /* FAQ: questions slide in from the right */
  var qs = $$('.faq details');
  if (qs.length) {
    gsap.from(qs, { x: 80, opacity: 0, duration: .8, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: qs[0], start: 'top 88%', once: true } });
    gsap.from($$('.faq summary i'), { rotate: -180, scale: 0, duration: .7, ease: 'back.out(2)', stagger: .1, delay: .3, scrollTrigger: { trigger: qs[0], start: 'top 88%', once: true } });
  }

  /* CONTACT: amber panel opens up with the scroll, form fields rise */
  var cta = $('.cta');
  if (cta) {
    gsap.fromTo(cta, { clipPath: 'inset(10% 5% 10% 5% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
      scrollTrigger: { trigger: cta, start: 'top bottom', end: 'top 25%', scrub: true } });
    gsap.from($$('.form > *', cta), { y: 40, opacity: 0, duration: .7, ease: 'power3.out', stagger: .08, scrollTrigger: { trigger: '.form', start: 'top 85%', once: true } });
  }

  /* FOOTER: columns rise, wordmark slides up with the scroll */
  var ftr = $('.ftr');
  if (ftr) {
    gsap.from($$('.ftr-grid > div', ftr), { y: 50, opacity: 0, duration: .9, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: '.ftr-grid', start: 'top 90%', once: true } });
    var big = $('.big', ftr);
    if (big) {
      gsap.fromTo(big, { clipPath: 'inset(0% 0% 100% 0%)', yPercent: 45 }, { clipPath: 'inset(0% 0% -10% 0%)', yPercent: 0, duration: 1.3, ease: 'expo.out',
        scrollTrigger: { trigger: big, start: 'top 98%', once: true } });
    }
  }
}
