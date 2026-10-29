/* Rail-to-yard scroll scene: train arrives and stops, reach stacker lifts
   the container off wagon 07 and stacks it on tier 3 of Block D. */
export default function initRailYard() {
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  var NS = 'http://www.w3.org/2000/svg';
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var svg = $('#rySvg'); if (!svg) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PART = 'images/parts/';
  function el(tag, a, parent) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (parent) parent.appendChild(e); return e; }
  function img(href, x, y, w, h, parent, extra) { var a = { href: PART + href, x: x, y: y, width: w, height: h, preserveAspectRatio: 'none' }; for (var k in extra) a[k] = extra[k]; return el('image', a, parent); }
  function f1(v) { return (Math.round(v * 10) / 10).toString(); }

  /* ---------- static set: distant yard, wagons, block D ---------- */
  var back = $('#ryBack');
  var seed = 7; function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var bx = -1400; bx < 6200; bx += 0) {
    var three = rnd() < 0.5, h = three ? 220 : 150, w = three ? 270 : 280;
    img(three ? 'stack3.png' : 'stack2.png', bx, 540 - h, w, h, back);
    bx += w + 30 + Math.floor(rnd() * 140);
  }
  var wg = $('#ryWagons');
  function wagon(x, load) {
    var g = el('g', { transform: 'translate(' + x + ' 0)' }, wg);
    el('ellipse', { cx: 466, cy: 614, rx: 480, ry: 9, fill: 'url(#shadowG)' }, g);
    img('wagon.png', 0, 497, 933, 116, g);
    var t = el('text', { x: 466, y: 574, 'text-anchor': 'middle', 'font-family': 'JetBrains Mono, monospace', 'font-size': 11, fill: '#e9e2d6' }, g);
    t.textContent = 'BLCA · SR-4021 · W0' + (wg.children.length);
    if (load === 'o') img('cont_o.png', 466 - 266, 368, 533, 175, g);
    if (load === 'y') img('cont_y.png', 101, 370, 730, 173, g);
  }
  wagon(-2286, 'o'); wagon(-1346, 'y'); wagon(-406, 'o'); wagon(534, null); wagon(1474, 'y');

  var block = $('#ryBlock');
  // target column (2 tiers) centred at x=2900, then two more columns to the right
  img('stack2.png', 2535, 640 - 346, 730, 346, block);
  img('stack3.png', 3285, 640 - 519, 730, 519, block);
  img('cont_o.png', 4035 + 98, 640 - 175, 533, 175, block);
  img('cont_y.png', 4035, 640 - 175 - 173, 730, 173, block);
  img('stack2.png', 4785, 640 - 346, 730, 346, block);

  /* ---------- rig geometry (same as the gate scene) ---------- */
  var PX = -520, PY = 488, DT = 96, L0 = 1093, SPR = 125;
  function tip(a, L) { var r = a * Math.PI / 180; return { x: PX + L * Math.cos(r) + DT * Math.sin(r), y: PY - L * Math.sin(r) + DT * Math.cos(r) }; }
  function axisPt(a, d) { var r = a * Math.PI / 180; return { x: PX + d * Math.cos(r), y: PY - d * Math.sin(r) }; }
  function angFor(topY, L) { var lo = 0, hi = 70; for (var i = 0; i < 40; i++) { var m = (lo + hi) / 2; if (tip(m, L).y + SPR > topY) lo = m; else hi = m; } return (lo + hi) / 2; }
  var WAGON_X = 534, X_W = WAGON_X + 466, X_S = 2900, TOP_W = 370, TOP_S = 640 - 346 - 173;
  var L_PICK = L0 + 10, A_PICK = angFor(TOP_W, L_PICK), L_PLACE = L0 + 60, A_PLACE = angFor(TOP_S, L_PLACE);
  var RS_PICK = X_W - tip(A_PICK, L_PICK).x, RS_PLACE = X_S - tip(A_PLACE, L_PLACE).x;

  var world = $('#ryWorld'), words = $('#ryWords'), train = $('#ryTrain'), rs = $('#ryRs'), boom = $('#ryBoom'), boomIn = $('#ryBoomIn');
  var cylB = $('#ryCylB'), cylR = $('#ryCylR'), spr = $('#rySpr'), ctr = $('#ryCtr'), sp = $$('#ryRs .rysp');
  var sigR = $('#rySigR'), sigG = $('#rySigG'), label = $('#ryLabel');
  var tags = { A: $('#ryTagA'), B: $('#ryTagB'), C: $('#ryTagC') };
  var caps = $$('#ryCaps .ycap'), steps = $$('#rySteps li'), bar = $('#ryBar'), slot = $('#rySlot'), slotL = $('#rySlotL');
  var S = { cam: -700, trainX: -3200, rsX: -1500, a: 34, L: L0, hold: 0, stacked: 0, A: 0, B: 0, C: 0, sig: 0, lab: 0 };
  var camOff = 0, tl = null, CAPT = [0, 4.2, 7.1, 11.2];

  function render(time, total) {
    world.setAttribute('transform', 'translate(' + f1(-S.cam - camOff) + ' 0)');
    words.setAttribute('transform', 'translate(' + f1(-S.cam * 0.45) + ' 0)');
    train.setAttribute('transform', 'translate(' + f1(S.trainX) + ' 0)');
    rs.setAttribute('transform', 'translate(' + f1(S.rsX) + ' 0)');
    boom.setAttribute('transform', 'translate(' + PX + ' ' + PY + ') rotate(' + f1(-S.a) + ')');
    boomIn.setAttribute('x', f1(509 + Math.max(0, Math.min(60, S.L - L0))));
    var c = axisPt(S.a, 560);
    cylR.setAttribute('x2', f1(c.x)); cylR.setAttribute('y2', f1(c.y + 30));
    cylB.setAttribute('x2', f1(-60 + (c.x + 60) * .55)); cylB.setAttribute('y2', f1(575 + (c.y + 30 - 575) * .55));
    var tp = tip(S.a, S.L), wx = S.rsX + tp.x, wy = tp.y;
    spr.setAttribute('transform', 'translate(' + f1(wx) + ' ' + f1(wy) + ')');
    var rr = f1(S.rsX / (2 * Math.PI * 46) * 360); for (var i = 0; i < sp.length; i++) sp[i].setAttribute('transform', 'rotate(' + rr + ')');
    var cx, cy;
    if (S.stacked > .5) { cx = X_S - 365; cy = TOP_S; }
    else if (S.hold > .5) { cx = wx - 365; cy = wy + SPR; }
    else { cx = WAGON_X + 101 + S.trainX; cy = TOP_W; }
    ctr.setAttribute('transform', 'translate(' + f1(cx) + ' ' + f1(cy) + ')');
    sigR.setAttribute('fill', S.sig > .5 ? '#3a1512' : '#e2412d'); sigG.setAttribute('fill', S.sig > .5 ? '#2fbf6b' : '#1f3a2a');
    label.setAttribute('opacity', f1(S.lab));
    for (var k in tags) tags[k].setAttribute('opacity', f1(S[k]));
    if (typeof time === 'number') {
      bar.style.width = f1(time / total * 100) + '%';
      var n = 0; for (i = 0; i < CAPT.length; i++) if (time >= CAPT[i] - .01) n = i;
      for (i = 0; i < steps.length; i++) { steps[i].classList.toggle('on', i === n); steps[i].classList.toggle('done', i < n); }
      slot.textContent = n < 1 ? 'L-2' : n < 3 ? 'W-07' : 'D-07';
      slotL.textContent = n < 1 ? 'siding line' : n < 3 ? 'wagon' : 'yard slot · tier 3';
      if (n !== render.n) {
        render.n = n;
        caps.forEach(function (y, j) { if (!reduce) gsap.to(y, { opacity: j === n ? 1 : 0, y: j === n ? 0 : (j < n ? -24 : 24), duration: .45, overwrite: true }); else y.style.opacity = j === n ? 1 : 0; });
      }
    }
  }
  caps.forEach(function (y, j) { y.style.opacity = j === 0 ? 1 : 0; });

  function fit() {
    var r = svg.getBoundingClientRect(), portrait = r.width / r.height < 1.25;
    svg.setAttribute('viewBox', portrait ? '0 -420 960 1150' : '0 -230 2000 1030');
    svg.setAttribute('preserveAspectRatio', portrait ? 'xMidYMax meet' : 'xMidYMax slice');
    camOff = portrait ? 520 : 0;
    if (tl) render(tl.time(), tl.duration());
  }

  if (!gsap || !ScrollTrigger || reduce) {
    S = { cam: 1600, trainX: 0, rsX: RS_PLACE, a: A_PLACE, L: L_PLACE, hold: 0, stacked: 1, A: 0, B: 0, C: 1, sig: 1, lab: 1 };
    fit(); render(12, 14); return;
  }
  fit(); window.addEventListener('resize', fit);

  tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '#railyard', start: 'top top', end: '+=700%', pin: true, scrub: 1, anticipatePin: 1 }, onUpdate: function () { render(tl.time(), tl.duration()); } });
  tl.to(S, { sig: 1, duration: .2 }, 0)
    .to(S, { trainX: 0, cam: -330, duration: 4, ease: 'power3.out' }, 0)
    .to(S, { A: 1, duration: .3 }, 3.6)
    .to(S, { rsX: RS_PICK, duration: 2.2, ease: 'power2.out' }, 4.2)
    .to(S, { a: A_PICK + 6, duration: 1.2, ease: 'power1.inOut' }, 4.6)
    .to(S, { A: 0, duration: .3 }, 5.4)
    .to(S, { a: A_PICK, L: L_PICK, duration: .8, ease: 'power1.inOut' }, 6.3)
    .to(S, { hold: 1, duration: .01 }, 7.1)
    .to(S, { B: 1, duration: .3 }, 7.1)
    .to(S, { a: 36, L: L0 + 40, duration: 1.3, ease: 'power1.inOut' }, 7.2)
    .to(S, { lab: 1, duration: .4 }, 8.2)
    .to(S, { B: 0, duration: .3 }, 9)
    .to(S, { rsX: RS_PLACE, cam: 1600, duration: 2.8, ease: 'power1.inOut' }, 8.4)
    .to(S, { a: A_PLACE, L: L_PLACE, duration: 1.2, ease: 'power1.inOut' }, 11.2)
    .to(S, { stacked: 1, hold: 0, duration: .01 }, 12.4)
    .to(S, { C: 1, lab: 0, duration: .3 }, 12.4)
    .to(S, { a: 34, L: L0, rsX: RS_PLACE - 700, duration: 1.4, ease: 'power1.inOut' }, 12.5)
    .to({}, { duration: .4 }, 13.9);
  render(0, tl.duration());
  window.__rySeek = function (t) { if (tl.scrollTrigger) tl.scrollTrigger.disable(false); tl.pause(); tl.time(t); render(t, tl.duration()); };
}
