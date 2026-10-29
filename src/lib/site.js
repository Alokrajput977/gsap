import initRailYard from './railYard.js';
import initSectionMotion, { LOWER } from './sections.js';
import initInteractions from './interactions.js';
/* Site behaviour: theme, preloader, India live map, GSAP scroll scenes.
   Same logic as the original page; runs once after React has mounted the markup. */
export default function initSite() {
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG=typeof window.gsap!=='undefined'&&typeof window.ScrollTrigger!=='undefined';
  var $=function(s){return document.querySelector(s);};
  var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s));};
  var NS='http://www.w3.org/2000/svg';
  function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
  function f1(v){return (Math.round(v*10)/10).toString();}

  /* ---------- theme ---------- */
  var root=document.documentElement, themeBtn=$('#themeBtn');
  function applyTheme(t){ root.setAttribute('data-theme',t==='dark'?'dark':'light'); themeBtn.setAttribute('aria-label',t==='dark'?'Switch to light theme':'Switch to dark theme'); }
  var saved=null; try{ saved=localStorage.getItem('sunic-theme'); }catch(e){}
  applyTheme(saved||(root.getAttribute('data-theme')==='dark'?'dark':'light'));
  themeBtn.addEventListener('click',function(){ var t=root.getAttribute('data-theme')==='dark'?'light':'dark'; applyTheme(t); try{ localStorage.setItem('sunic-theme',t); }catch(e){} });

  /* ---------- preloader, header, menu, form ---------- */
  var pre=$('#pre');
  function endPre(){ if(pre.hidden) return; pre.classList.add('done'); setTimeout(function(){ pre.hidden=true; },650); }
  if(reduce||!hasG){ pre.hidden=true; } else {
    var pn=$('#preN'), pc=$('#preCity'), cities=['New Delhi','Mundra','Nhava Sheva','Chennai','Kochi','Visakhapatnam','Paradip','Kolkata'], po={v:0};
    gsap.to(po,{v:100,duration:1.4,ease:'power2.inOut',onUpdate:function(){ pn.textContent=String(Math.round(po.v)).padStart(2,'0'); pc.textContent=cities[Math.min(cities.length-1,Math.floor(po.v/100*cities.length))]; },onComplete:endPre});
  }
  setTimeout(endPre,3000);
  var hdr=$('#hdr');
  function onScroll(){ hdr.classList.toggle('scrolled',window.scrollY>40); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  var menuBtn=$('#menuBtn'), mnav=$('#mnav');
  function setMenu(open){ mnav.hidden=!open; menuBtn.setAttribute('aria-expanded',String(open)); menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu'); }
  menuBtn.addEventListener('click',function(){ setMenu(mnav.hidden); });
  $('#copyMail').addEventListener('click',function(){
    var b=this, t=$('#mail').textContent;
    function sel(){ var r=document.createRange(); r.selectNodeContents($('#mail')); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent='Selected'; }
    try{ navigator.clipboard.writeText(t).then(function(){ b.textContent='Copied'; },sel); }catch(e){ sel(); }
  });
  $('#qform').addEventListener('submit',function(e){
    e.preventDefault();
    var name=$('#f-name').value.trim(), email=$('#f-email').value.trim(), msg=$('#formMsg'); msg.hidden=false;
    if(!name||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msg.style.color='#ff8a6a'; msg.textContent='Add your name and a valid email so we can reply.'; return; }
    msg.style.color=''; msg.textContent='Thanks, '+name+'. Your request is ready. Connect this form to your email or CRM before going live.';
  });

  /* ================= INDIA LIVE MAP ================= */
  function M(lat){ return Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))*180/Math.PI; }
  var K=20.95, M0=M(37.08);
  function P(lat,lon){ return [(lon-68.18)*K, K*(M0-M(lat))]; }
  var MODS={live:['ANPR gate','QR pass','OCR crane','RFID seal','Yard planner'],dep:['ANPR gate','QR pass','Yard planner'],plan:['Site survey']};
  var NODES=[
    {id:'mun',n:'Mundra Port',t:'Sea port · Gujarat',la:22.74,lo:69.70,s:'live',lb:'MUNDRA',dx:-8,dy:16,ta:'end'},
    {id:'kan',n:'Deendayal Port (Kandla)',t:'Sea port · Gujarat',la:23.03,lo:70.22,s:'dep',lb:'KANDLA',dx:-6,dy:-8,ta:'end'},
    {id:'pip',n:'Pipavav Port',t:'Sea port · Gujarat',la:20.92,lo:71.51,s:'plan'},
    {id:'haz',n:'Hazira Port',t:'Sea port · Gujarat',la:21.10,lo:72.63,s:'plan'},
    {id:'jnp',n:'JNPA Nhava Sheva',t:'Sea port · Maharashtra',la:18.95,lo:72.95,s:'live',lb:'NHAVA SHEVA',dx:-8,dy:4,ta:'end'},
    {id:'mor',n:'Mormugao Port',t:'Sea port · Goa',la:15.41,lo:73.80,s:'plan',lb:'GOA',dx:-8,dy:4,ta:'end'},
    {id:'mng',n:'New Mangalore Port',t:'Sea port · Karnataka',la:12.92,lo:74.81,s:'plan'},
    {id:'koc',n:'Cochin Port',t:'Sea port · Kerala',la:9.97,lo:76.27,s:'dep',lb:'KOCHI',dx:-8,dy:4,ta:'end'},
    {id:'tut',n:'V.O. Chidambaranar Port',t:'Sea port · Tamil Nadu',la:8.76,lo:78.18,s:'plan',lb:'TUTICORIN',dx:8,dy:4,ta:'start'},
    {id:'che',n:'Chennai Port',t:'Sea port · Tamil Nadu',la:13.10,lo:80.30,s:'live',lb:'CHENNAI',dx:9,dy:4,ta:'start'},
    {id:'kri',n:'Krishnapatnam Port',t:'Sea port · Andhra Pradesh',la:14.25,lo:80.13,s:'plan'},
    {id:'viz',n:'Visakhapatnam Port',t:'Sea port · Andhra Pradesh',la:17.69,lo:83.29,s:'dep',lb:'VIZAG',dx:9,dy:4,ta:'start'},
    {id:'par',n:'Paradip Port',t:'Sea port · Odisha',la:20.26,lo:86.67,s:'dep',lb:'PARADIP',dx:9,dy:4,ta:'start'},
    {id:'hal',n:'Haldia Dock',t:'Sea port · West Bengal',la:22.03,lo:88.06,s:'plan',lb:'HALDIA',dx:9,dy:6,ta:'start'},
    {id:'del',n:'Sunic ICD Delhi (HQ)',t:'Inland container depot · Delhi',la:28.51,lo:77.28,s:'live',lb:'DELHI ICD',dx:9,dy:-6,ta:'start',hq:1},
    {id:'lud',n:'ICD Ludhiana',t:'Inland container depot · Punjab',la:30.90,lo:75.85,s:'dep',lb:'LUDHIANA',dx:-8,dy:-4,ta:'end'},
    {id:'nag',n:'ICD Nagpur',t:'Inland container depot · Maharashtra',la:21.15,lo:79.09,s:'plan',lb:'NAGPUR',dx:9,dy:4,ta:'start'},
    {id:'hyd',n:'ICD Hyderabad',t:'Inland container depot · Telangana',la:17.39,lo:78.49,s:'plan',lb:'HYDERABAD',dx:9,dy:4,ta:'start'},
    {id:'blr',n:'ICD Bengaluru',t:'Inland container depot · Karnataka',la:12.97,lo:77.59,s:'plan',lb:'BENGALURU',dx:-8,dy:14,ta:'end'},
    {id:'knp',n:'ICD Kanpur',t:'Inland container depot · Uttar Pradesh',la:26.45,lo:80.33,s:'plan',lb:'KANPUR',dx:9,dy:4,ta:'start'}
  ];
  var byId={}; NODES.forEach(function(n){ var p=P(n.la,n.lo); n.x=p[0]; n.y=p[1]; byId[n.id]=n; });
  var ROUTES=[['del','mun','rail'],['del','jnp','rail'],['lud','mun','rail'],['del','kan','road'],['nag','jnp','road'],['hyd','che','road'],['blr','che','road'],['hyd','viz','rail'],['knp','hal','rail'],['knp','par','road'],['blr','koc','road'],['nag','viz','road']];
  var india=$('#india');
  if(india){
    var gR=$('#routes'), gM=$('#movers'), gN=$('#nodes');
    var paths=[];
    ROUTES.forEach(function(r,i){
      var a=byId[r[0]], b=byId[r[1]], mx=(a.x+b.x)/2, my=(a.y+b.y)/2, dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy), k=(i%2?1:-1)*0.16;
      var cx=mx-dy/len*len*k, cy=my+dx/len*len*k;
      var p=el('path',{d:'M'+f1(a.x)+' '+f1(a.y)+' Q'+f1(cx)+' '+f1(cy)+' '+f1(b.x)+' '+f1(b.y),class:'route r-'+r[2]},gR);
      paths.push({p:p,L:p.getTotalLength(),mode:r[2]});
    });
    var movers=[];
    paths.forEach(function(pp,i){
      for(var j=0;j<2;j++){
        var g=el('g',{},gM);
        el('circle',{r:7,fill:pp.mode==='rail'?'#2f7fd1':'#f2a516',opacity:.25},g);
        el('circle',{r:3.6,fill:pp.mode==='rail'?'#2f7fd1':'#f2a516',stroke:'#fff','stroke-width':1.2},g);
        movers.push({g:g,pp:pp,t:(i*0.37+j*0.5)%1,v:(pp.mode==='rail'?0.045:0.06)*(0.8+((i*7+j*3)%5)/10),dir:j?-1:1});
      }
    });
    NODES.forEach(function(n){
      var g=el('g',{class:'node',tabindex:0,role:'button','aria-label':n.n+', automation '+(n.s==='live'?'live':n.s==='dep'?'deploying':'planned'),transform:'translate('+f1(n.x)+' '+f1(n.y)+')'},gN);
      var col=n.s==='live'?'#1fae62':n.s==='dep'?'#f2a516':'#8f9aa0';
      if(n.s!=='plan') el('circle',{class:'ring',r:8,fill:'none',stroke:col,'stroke-width':2},g);
      if(n.hq) el('circle',{r:16,fill:'url(#pGlow)'},g);
      el('circle',{r:n.hq?7:5.5,fill:n.s==='plan'?'var(--map-bg)':col,stroke:col,'stroke-width':2},g);
      el('circle',{r:14,fill:'transparent'},g);
      if(n.lb){ var t=el('text',{x:n.dx,y:n.dy,'text-anchor':n.ta},g); t.textContent=n.lb; }
      g.addEventListener('mouseenter',function(){ stopAuto(); showPop(n); });
      g.addEventListener('focus',function(){ stopAuto(); showPop(n); });
      g.addEventListener('click',function(){ stopAuto(); showPop(n); });
    });
    var pop=$('#portPop');
    function seedNum(s){ var h=0; for(var i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))%9973; return h; }
    function showPop(n){
      pop.hidden=false;
      $('#ppName').textContent=n.n; $('#ppType').textContent=n.t;
      var st=$('#ppStatus'); st.textContent=n.s==='live'?'Automation live':n.s==='dep'?'Deploying':'Planned'; st.className='chip-s'+(n.s==='live'?'':' '+n.s);
      var h=seedNum(n.id);
      $('#ppMoves').textContent=n.s==='live'?(800+h%900).toLocaleString('en-IN'):n.s==='dep'?(120+h%300).toLocaleString('en-IN'):'–';
      $('#ppTime').textContent=n.s==='live'?(4+h%3)+'m '+(10+h%50)+'s':n.s==='dep'?(9+h%6)+' min':'–';
      var mods=$('#ppMods'); mods.innerHTML=''; MODS[n.s].forEach(function(m){ var s=document.createElement('span'); s.textContent=m; mods.appendChild(s); });
    }
    var autoIds=['mun','del','jnp','che','viz','koc'], ai=0, autoT=null;
    function stopAuto(){ if(autoT){ clearInterval(autoT); autoT=null; } }
    showPop(byId.mun);
    if(!reduce) autoT=setInterval(function(){ ai=(ai+1)%autoIds.length; showPop(byId[autoIds[ai]]); },4200);
    var last=performance.now();
    function tick(now){
      var dt=Math.min(.05,(now-last)/1000); last=now;
      for(var i=0;i<movers.length;i++){
        var m=movers[i]; m.t+=m.v*dt; if(m.t>1) m.t-=1;
        var tt=m.dir>0?m.t:1-m.t, pt=m.pp.p.getPointAtLength(tt*m.pp.L);
        m.g.setAttribute('transform','translate('+f1(pt.x)+' '+f1(pt.y)+')');
      }
      requestAnimationFrame(tick);
    }
    if(!reduce) requestAnimationFrame(tick); else movers.forEach(function(m){ var pt=m.pp.p.getPointAtLength(m.t*m.pp.L); m.g.setAttribute('transform','translate('+f1(pt.x)+' '+f1(pt.y)+')'); });

    /* live feed + counters */
    var feed=$('#feed'), clockEl=$('#istClock');
    var plates=['GJ12 AT 2026','MH46 BM 7781','DL1L AB 4410','TN09 CK 3321','KA51 Q 9032','AP31 TW 6618','HR38 X 2207','PB10 GZ 5590'];
    var live=NODES.filter(function(n){return n.s==='live';});
    var tpl=[
      function(n,p){ return [p+' gate-in at '+n.lb,'QR verified · 41s']; },
      function(n){ return ['Rake SR-'+(4000+Math.floor(Math.random()*90))+' departed '+n.lb,'90 TEU']; },
      function(n){ return ['RS-'+(10+Math.floor(Math.random()*40))+' lift at '+n.lb,'24.'+Math.floor(Math.random()*9)+' t']; },
      function(n,p){ return [p+' security cleared at '+n.lb,'Seal OK']; },
      function(n){ return ['Box SNCU '+(100000+Math.floor(Math.random()*899999))+' loaded','Wagon '+(1+Math.floor(Math.random()*44))]; }
    ];
    function ist(){ try{ return new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false}); }catch(e){ return new Date().toTimeString().slice(0,8); } }
    function addFeed(){
      var n=live[Math.floor(Math.random()*live.length)], p=plates[Math.floor(Math.random()*plates.length)], r=tpl[Math.floor(Math.random()*tpl.length)](n,p);
      var li=document.createElement('li'), t=document.createElement('span'), b=document.createElement('span');
      t.textContent=ist().slice(0,8); var bb=document.createElement('b'); bb.textContent=r[0]; var em=document.createElement('em'); em.textContent=' · '+r[1];
      b.appendChild(bb); b.appendChild(em); li.appendChild(t); li.appendChild(b);
      feed.insertBefore(li,feed.firstChild);
      while(feed.children.length>5) feed.removeChild(feed.lastChild);
      if(hasG&&!reduce) gsap.from(li,{y:-12,opacity:0,duration:.5,ease:'power2.out'});
    }
    for(var fi=0;fi<5;fi++) addFeed();
    var kG=$('#kGate'), kT=$('#kTrucks'), kR=$('#kRakes'), gate=4812, trucks=184;
    function clock(){ clockEl.textContent=ist()+' IST'; }
    clock(); setInterval(clock,1000);
    if(!reduce) setInterval(function(){ addFeed(); gate+=1+Math.floor(Math.random()*3); trucks+=Math.random()<.5?1:-1; kG.textContent=gate.toLocaleString('en-IN'); kT.textContent=trucks; kR.textContent=12+Math.floor(Math.random()*2); },2200);
  }

  /* ================= QR for phone ================= */
  (function(){
    var svg=$('#qr'); if(!svg) return; var s=29;
    function r(x,y,w,h,fl){ el('rect',{x:x,y:y,width:w,height:h,fill:fl},svg); }
    r(0,0,21,21,'#fff');
    [[0,0],[14,0],[0,14]].forEach(function(p){ r(p[0],p[1],7,7,'#111'); r(p[0]+1,p[1]+1,5,5,'#fff'); r(p[0]+2,p[1]+2,3,3,'#111'); });
    for(var y=0;y<21;y++) for(var x=0;x<21;x++){ if((x<8&&y<8)||(x>12&&y<8)||(x<8&&y>12)) continue; s=(s*16807)%2147483647; if(s%100<46) r(x,y,1,1,'#111'); }
  })();

  /* ================= YARD SCENE ================= */
  var seed=11; function rnd(){ seed=(seed*9301+49297)%233280; return seed/233280; }
  var cols=['#e39b12','#2d5c82','#8f3b26','#4f6b3a','#d6d9d4','#1f3b52','#b5651d','#5a6670','#9c2f2f','#2f6f6a','#c9ccc6'];
  function pick(){ return cols[Math.floor(rnd()*cols.length)]; }
  var stacks=$('#stacks');
  for(var sx=2060; sx<7200; sx+=300){
    var h=1+Math.floor(rnd()*3);
    for(var k=0;k<h;k++) el('use',{href:'#ctr',x:sx,y:516-k*120,width:288,height:120,style:'color:'+pick()},stacks);
  }
  var wg=$('#wagons');
  var PART='images/parts/';
  function img(href,x,y,w,h,parent){ return el('image',{href:PART+href,x:x,y:y,width:w,height:h},parent); }
  function wagon(x,load){
    var g=el('g',{transform:'translate('+x+' 0)'},wg);
    el('ellipse',{cx:466,cy:646,rx:480,ry:9,fill:'url(#shadowG)'},g);
    img('wagon.png',0,527,933,116,g);
    var t=el('text',{x:466,y:604,'text-anchor':'middle','font-family':'JetBrains Mono, monospace','font-size':11,fill:'#e9e2d6'},g); t.textContent='BLCA · SR-4021 · W0'+(wg.children.length);
    if(load==='o') img('cont_o.png',466-266,398,533,175,g);
    if(load==='y') img('cont_y.png',101,400,730,173,g);
  }
  wagon(3500,'o'); wagon(4440,null); wagon(5380,'y');

  var world=$('#world'), words=$('#words'), truck=$('#truck'), ctr=$('#ctrHero'), train=$('#train');
  var spT=$$('#truck .sp'), spR=$$('#rs .sp'), rws=$$('#train .rw');
  rws.forEach(function(w){ w.setAttribute('data-b',w.getAttribute('transform')); });
  var arms=[$('#bar1 .arm'),$('#bar2 .arm')], lamps=[$('#bar1 .lamp'),$('#bar2 .lamp')];
  var laser=$('#laser'), kScreen=$('#kScreen'), kText=$('#kText');
  var guard=$('#guard'), legL=$('#guard .legL'), legR=$('#guard .legR');
  var rs=$('#rs'), boom=$('#boom'), boomIn=$('#boomIn'), cylB=$('#cylBase'), cylR=$('#cylRod'), spr=$('#spr');
  var tags={A:$('#tagA'),B:$('#tagB'),C:$('#tagC'),D:$('#tagD')};
  var ycaps=$$('#ycaps .ycap'), ysteps=$$('#ysteps li'), kmh=$('#kmh'), ybar=$('#ybar');
  var PX=-520, PY=488, DT=96, L0=1093, SPR=125;
  function tip(a,L){ var r=a*Math.PI/180; return {x:PX+L*Math.cos(r)+DT*Math.sin(r), y:PY-L*Math.sin(r)+DT*Math.cos(r)}; }
  function axisPt(a,d){ var r=a*Math.PI/180; return {x:PX+d*Math.cos(r), y:PY-d*Math.sin(r)}; }
  function angFor(topY,L){ var lo=0,hi=60; for(var i=0;i<40;i++){ var m=(lo+hi)/2; if(tip(m,L).y+SPR>topY) lo=m; else hi=m; } return (lo+hi)/2; }
  var L_PICK=L0, A_PICK=angFor(397,L_PICK), L_PLACE=L0+40, A_PLACE=angFor(400,L_PLACE);
  var X_TRUCK_C=2700, X_WAGON_C=4906;
  var RS_PICK=X_TRUCK_C-tip(A_PICK,L_PICK).x, RS_PLACE=X_WAGON_C-tip(A_PLACE,L_PLACE).x;
  var S={cam:-520,truckX:-1650,b1:0,b2:0,scan:0,gX:1620,rsX:-2600,a:30,L:L0,hold:0,onWagon:0,trainX:0,A:0,B:0,C:0,D:0};
  var lastG=S.gX, gDir=-1, camOff=0, tl=null;
  var CAPT=[0,3,7.6,13.6,18.8,24.4];
  function render(time,total){
    world.setAttribute('transform','translate('+f1(-S.cam-camOff)+' 0)');
    words.setAttribute('transform','translate('+f1(-S.cam*0.45)+' 0)');
    truck.setAttribute('transform','translate('+f1(S.truckX)+' 0)');
    var d=f1(S.truckX/(2*Math.PI*33)*360); for(var i=0;i<spT.length;i++) spT[i].setAttribute('transform','rotate('+d+')');
    train.setAttribute('transform','translate('+f1(S.trainX)+' 0)');
    var rd=f1(S.trainX/(2*Math.PI*22)*360); for(i=0;i<rws.length;i++) rws[i].setAttribute('transform',rws[i].getAttribute('data-b')+' rotate('+rd+')');
    arms[0].setAttribute('transform','rotate('+f1(S.b1*84)+' 0 510)'); lamps[0].setAttribute('fill',S.b1>.3?'#2fbf6b':'#e2412d');
    arms[1].setAttribute('transform','rotate('+f1(S.b2*84)+' 0 510)'); lamps[1].setAttribute('fill',S.b2>.3?'#2fbf6b':'#e2412d');
    laser.setAttribute('opacity',S.scan>0&&S.scan<1?f1(.4+.4*Math.abs(Math.sin(S.scan*30))):'0');
    var ok=S.scan>=.98; kScreen.setAttribute('fill',ok?'#1f9d55':'#c8322a'); kText.textContent=ok?'GRANTED':'SCAN QR';
    for(var k in tags) tags[k].setAttribute('opacity',f1(S[k]));
    var gd=S.gX-lastG; if(Math.abs(gd)>.3) gDir=gd<0?-1:1; lastG=S.gX;
    guard.setAttribute('transform','translate('+f1(S.gX)+' 0) scale('+gDir+' 1)');
    var sw=Math.abs(gd)>.05?Math.sin(S.gX/9)*20:0;
    legL.setAttribute('transform','rotate('+f1(sw)+' 0 568)'); legR.setAttribute('transform','rotate('+f1(-sw)+' 0 568)');
    rs.setAttribute('transform','translate('+f1(S.rsX)+' 0)');
    boom.setAttribute('transform','translate('+PX+' '+PY+') rotate('+f1(-S.a)+')');
    boomIn.setAttribute('x',f1(509+Math.max(0,Math.min(60,S.L-L0))));
    var c200=axisPt(S.a,560); cylR.setAttribute('x2',f1(c200.x)); cylR.setAttribute('y2',f1(c200.y+30));
    cylB.setAttribute('x2',f1(-60+(c200.x+60)*.55)); cylB.setAttribute('y2',f1(575+(c200.y+30-575)*.55));
    var tp=tip(S.a,S.L), wx=S.rsX+tp.x, wy=tp.y;
    spr.setAttribute('transform','translate('+f1(wx)+' '+f1(wy)+')');
    var rr=f1(S.rsX/(2*Math.PI*46)*360); for(i=0;i<spR.length;i++) spR[i].setAttribute('transform','rotate('+rr+')');
    var cx,cy;
    if(S.onWagon>.5){ cx=X_WAGON_C-365+S.trainX; cy=400; }
    else if(S.hold>.5){ cx=wx-365; cy=wy+SPR; }
    else { cx=S.truckX+8; cy=397; }
    ctr.setAttribute('transform','translate('+f1(cx)+' '+f1(cy)+')');
    if(typeof time==='number'){
      ybar.style.width=f1(time/total*100)+'%';
      var c=0; for(i=0;i<CAPT.length;i++) if(time>=CAPT[i]-.01) c=i;
      for(i=0;i<ysteps.length;i++){ ysteps[i].classList.toggle('on',i===c); ysteps[i].classList.toggle('done',i<c); }
      if(c!==render.c){ render.c=c; ycaps.forEach(function(y,j){ if(hasG&&!reduce) gsap.to(y,{opacity:j===c?1:0,y:j===c?0:(j<c?-24:24),duration:.45,overwrite:true}); else y.style.opacity=j===c?1:0; }); }
    }
  }
  ycaps.forEach(function(y,j){ y.style.opacity=j===0?1:0; });

  var lenis=null;
  function staticScene(){
    S={cam:1760,truckX:2327,b1:0,b2:0,scan:0,gX:1620,rsX:RS_PICK,a:30,L:L_PICK,hold:1,onWagon:0,trainX:0,A:0,B:0,C:1,D:0};
    render(15,28.6);
  }
  if(!hasG||reduce){ staticScene(); initRailYard(); finishRest(); return; }

  gsap.registerPlugin(ScrollTrigger);
  if(window.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);
  if(window.Lenis){ try{ lenis=new Lenis({lerp:0.085}); lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(function(t){ lenis.raf(t*1000); }); gsap.ticker.lagSmoothing(0); }catch(e){ lenis=null; } }

  var ysvg=$('#ysvg');
  function fitScene(){ var r=ysvg.getBoundingClientRect(), portrait=r.width/r.height<1.25; ysvg.setAttribute('viewBox',portrait?'0 -420 960 1150':'0 -230 2000 1030'); ysvg.setAttribute('preserveAspectRatio',portrait?'xMidYMax meet':'xMidYMax slice'); camOff=portrait?520:0; if(window.gsap&&tl) render(tl.time(),tl.duration()); }
  fitScene(); window.addEventListener('resize',fitScene);

  tl=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:'#yard',start:'top top',end:'+=1200%',pin:true,scrub:1,anticipatePin:1},onUpdate:function(){ render(tl.time(),tl.duration()); }});
  tl.to(S,{truckX:-348,duration:3,ease:'power2.out'},0)
    .to('#phone',{opacity:1,y:0,duration:.5},3.1)
    .fromTo('#scanline',{top:40},{top:150,duration:.7,repeat:1,yoyo:true,ease:'sine.inOut'},3.5)
    .to(S,{scan:1,duration:1.4},3.5)
    .fromTo('#granted',{opacity:0},{opacity:1,duration:.3},4.9)
    .to(S,{A:1,duration:.3},4.9)
    .to(S,{b1:1,duration:.7,ease:'power2.inOut'},5.1)
    .to('#phone',{opacity:0,y:-20,duration:.4},5.9)
    .to(S,{A:0,duration:.3},6.4)
    .to(S,{truckX:532,cam:380,duration:2.4,ease:'power1.inOut'},5.6)
    .to(S,{b1:0,duration:.6,ease:'power2.inOut'},7.6)
    .to(S,{gX:1080,duration:1.2},8.2)
    .to(S,{gX:1070,duration:.5},9.4)
    .to(S,{gX:1620,duration:1.1},9.9)
    .to(S,{B:1,duration:.3},11)
    .to(S,{b2:1,duration:.7,ease:'power2.inOut'},11.2)
    .to(S,{B:0,duration:.3},12.6)
    .to(S,{truckX:2327,cam:1760,duration:3,ease:'power1.inOut'},11.8)
    .to(S,{b2:0,duration:.6,ease:'power2.inOut'},14.2)
    .set(S,{rsX:1250},14.4).to(S,{rsX:RS_PICK,duration:1.6,ease:'power2.out'},14.4)
    .to(S,{a:A_PICK,L:L_PICK,duration:1.2,ease:'power1.inOut'},15.6)
    .to(S,{hold:1,duration:.01},16.8)
    .to(S,{C:1,duration:.3},16.8)
    .to(S,{a:28,L:L0+30,duration:1.2,ease:'power1.inOut'},16.9)
    .to(S,{truckX:7800,duration:3.6,ease:'power2.in'},18.2)
    .to(S,{C:0,duration:.3},18.6)
    .to(S,{a:26,L:L0+40,duration:.8},18.8)
    .to(S,{rsX:RS_PLACE,cam:3820,duration:3.2,ease:'power1.inOut'},19)
    .to(S,{a:A_PLACE,L:L_PLACE,duration:1.2,ease:'power1.inOut'},22.2)
    .to(S,{onWagon:1,hold:0,duration:.01},23.4)
    .to(S,{D:1,duration:.3},23.4)
    .to(S,{a:32,L:L0,rsX:RS_PLACE-1300,duration:1.2,ease:'power1.inOut'},23.5)
    .to(S,{trainX:3600,cam:5600,duration:4,ease:'power2.in'},24.4)
    .to(S,{D:0,duration:.3},25.4)
    .to({},{duration:.2},28.4);
  render(0,tl.duration());
  window.__seek=function(t){ if(tl.scrollTrigger) tl.scrollTrigger.disable(false); tl.pause(); tl.time(t); render(t,tl.duration()); };

  var pv={t:S.truckX,r:S.rsX,n:S.trainX}, spd=0;
  gsap.ticker.add(function(){
    var dd=Math.max(Math.abs(S.truckX-pv.t),Math.abs(S.rsX-pv.r),Math.abs(S.trainX-pv.n)); pv.t=S.truckX; pv.r=S.rsX; pv.n=S.trainX;
    spd+=(Math.min(dd*1.3,68)-spd)*.12; kmh.textContent=String(Math.round(spd)).padStart(2,'0');
  });

  /* ================= TOP-DOWN ROAD ================= */
  var rp=$('#roadPath'), done=$('#roadDone');
  if(rp&&window.MotionPathPlugin){
    var RL=done.getTotalLength(); done.style.strokeDasharray=RL; done.style.strokeDashoffset=RL;
    var rt=gsap.timeline({scrollTrigger:{trigger:'#road',start:'top top',end:'+=260%',pin:true,scrub:1,anticipatePin:1}});
    rt.to('#topTruck',{motionPath:{path:'#roadPath',align:'#roadPath',alignOrigin:[0.5,0.5],autoRotate:true,start:0.06,end:0.97},ease:'none',duration:1},0)
      .fromTo(done,{strokeDashoffset:RL*0.94},{strokeDashoffset:RL*0.03,ease:'none',duration:1},0)
      .fromTo('.roadword',{x:200},{x:-200,ease:'none',duration:1},0);
    var rdKm=$('#rdKm'), rdEta=$('#rdEta'), rdSt=$('#rdSt');
    rt.eventCallback('onUpdate',function(){ var p=rt.progress(); rdKm.textContent=Math.max(0,Math.round(86*(1-p)))+' km'; var m=13*60+42-Math.round((1-p)*84); rdEta.textContent=p>.97?'Arrived':String(Math.floor((13*60+42)/60))+':42'; rdSt.textContent=p<.45?'On route':p<.62?'At gate':p<.85?'In yard':'Rail siding'; });
    gsap.set('#topTruck',{motionPath:{path:'#roadPath',align:'#roadPath',alignOrigin:[0.5,0.5],autoRotate:true,start:0.06,end:0.06}});
  }

  initRailYard();
  finishRest();
  initInteractions({ lenis: lenis });

  function finishRest(){
    if(!hasG||reduce) return;
    gsap.to('#procFill',{height:'calc(100% - 20px)',ease:'none',scrollTrigger:{trigger:'.proc',start:'top 70%',end:'bottom 70%',scrub:true}});
    $$('.proc li').forEach(function(li){ ScrollTrigger.create({trigger:li,start:'top 72%',onEnter:function(){li.classList.add('on');},onLeaveBack:function(){li.classList.remove('on');}}); gsap.from(li.querySelector('.pb'),{x:40,opacity:.3,duration:.8,ease:'power3.out',scrollTrigger:{trigger:li,start:'top 88%',once:true}}); });
    var oi=$('#oceanImg'); if(oi) gsap.fromTo(oi,{yPercent:-10},{yPercent:10,ease:'none',scrollTrigger:{trigger:'#ocean',start:'top bottom',end:'bottom top',scrub:true}});
    $$('.rv').filter(function(e){ return !e.closest(LOWER); }).forEach(function(e){ gsap.from(e,{y:40,opacity:.3,duration:1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 90%',once:true}}); });
    gsap.from('.h-hero',{y:70,opacity:.2,duration:1.1,ease:'power4.out',delay:1.3});
    gsap.from('.map-card',{y:60,opacity:.2,duration:1.2,ease:'power3.out',delay:1.45});
    gsap.from('#trkFill',{width:0,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:'.trk',start:'top 80%',once:true}});
    initSectionMotion();
    $$('.svc-img img').forEach(function(im){ gsap.fromTo(im,{yPercent:-6},{yPercent:6,ease:'none',scrollTrigger:{trigger:im,start:'top bottom',end:'bottom top',scrub:true}}); });
    $$('.count').forEach(function(e){
      var to=parseFloat(e.getAttribute('data-to')), dec=parseInt(e.getAttribute('data-dec')||'0',10), suf=e.getAttribute('data-suffix')||'', o={v:0};
      ScrollTrigger.create({trigger:e,start:'top 90%',once:true,onEnter:function(){ gsap.fromTo(o,{v:0},{v:to,duration:1.8,ease:'power2.out',onUpdate:function(){ e.textContent=o.v.toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf; }}); }});
    });
    if(window.matchMedia('(pointer:fine)').matches){
      $$('.mag').forEach(function(b){
        var xTo=gsap.quickTo(b,'x',{duration:.5,ease:'elastic.out(1,0.4)'}), yTo=gsap.quickTo(b,'y',{duration:.5,ease:'elastic.out(1,0.4)'});
        b.addEventListener('pointermove',function(e){ var r=b.getBoundingClientRect(); xTo((e.clientX-r.left-r.width/2)*.25); yTo((e.clientY-r.top-r.height/2)*.35); });
        b.addEventListener('pointerleave',function(){ xTo(0); yTo(0); });
      });
      $$('.tilt').forEach(function(c){
        c.addEventListener('pointermove',function(e){ var r=c.getBoundingClientRect(), px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5; gsap.to(c,{rotateY:px*6,rotateX:-py*6,transformPerspective:900,duration:.5,ease:'power2.out'}); });
        c.addEventListener('pointerleave',function(){ gsap.to(c,{rotateY:0,rotateX:0,duration:.8,ease:'elastic.out(1,0.5)'}); });
      });
    }
    window.addEventListener('load',function(){ ScrollTrigger.refresh(); });
  }
}
