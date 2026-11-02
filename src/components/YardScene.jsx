export default function YardScene() {
  return (
    <section className="yard" id="yard" aria-label="Scroll to watch a truck pass the gate and security, and a reach stacker load its container onto a train">
      <svg className="ysvg" id="ysvg" viewBox="0 -230 2000 1030" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Truck enters through a boom barrier, driver scans a QR pass, security checks the truck, a reach stacker lifts the container onto a rail wagon and the train departs">
        <defs>
          <linearGradient id="cab" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#5a6268" /><stop offset=".35" stopColor="#3a4247" /><stop offset=".7" stopColor="#262c30" /><stop offset={1} stopColor="#15191b" /></linearGradient>
          <linearGradient id="cabHi" x1={0} y1={0} x2={1} y2={0}><stop offset={0} stopColor="#fff" stopOpacity={0} /><stop offset=".5" stopColor="#fff" stopOpacity=".22" /><stop offset={1} stopColor="#fff" stopOpacity={0} /></linearGradient>
          <linearGradient id="glass" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#b9cfdc" /><stop offset=".35" stopColor="#5d7686" /><stop offset=".7" stopColor="#22313b" /><stop offset={1} stopColor="#0e161c" /></linearGradient>
          <linearGradient id="chrome" x1={0} y1={0} x2={1} y2={0}><stop offset={0} stopColor="#5f6765" /><stop offset=".4" stopColor="#f4f6f5" /><stop offset=".6" stopColor="#a9b1af" /><stop offset={1} stopColor="#4f5755" /></linearGradient>
          <linearGradient id="chromeV" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#f4f6f5" /><stop offset=".45" stopColor="#9ea6a4" /><stop offset=".6" stopColor="#dfe3e1" /><stop offset={1} stopColor="#4f5755" /></linearGradient>
          <linearGradient id="metal" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#4a535a" /><stop offset={1} stopColor="#14181b" /></linearGradient>
          <linearGradient id="amberB" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#ffc246" /><stop offset=".5" stopColor="#f2a516" /><stop offset={1} stopColor="#b9740a" /></linearGradient>
          <linearGradient id="boomG" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#5b646b" /><stop offset=".45" stopColor="#2c3338" /><stop offset={1} stopColor="#15191c" /></linearGradient>
          <linearGradient id="innerG" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#7c868d" /><stop offset={1} stopColor="#3a4248" /></linearGradient>
          <linearGradient id="shade" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#fff" stopOpacity=".22" /><stop offset=".3" stopColor="#fff" stopOpacity={0} /><stop offset={1} stopColor="#000" stopOpacity=".34" /></linearGradient>
          <linearGradient id="locoG" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#e7eaea" /><stop offset=".5" stopColor="#c3c9c8" /><stop offset={1} stopColor="#7f8886" /></linearGradient>
          <linearGradient id="wallG" x1={0} y1={0} x2={0} y2={1}><stop offset={0} className="w1" /><stop offset={1} className="w2" /></linearGradient>
          <radialGradient id="rim"><stop offset={0} stopColor="#f1f4f3" /><stop offset=".55" stopColor="#b3bbb9" /><stop offset=".8" stopColor="#6d7674" /><stop offset={1} stopColor="#3f4644" /></radialGradient>
          <radialGradient id="shadowG"><stop offset={0} stopColor="#000" stopOpacity=".5" /><stop offset={1} stopColor="#000" stopOpacity={0} /></radialGradient>
          <linearGradient id="beamL" x1={0} y1={0} x2={1} y2={0}><stop offset={0} stopColor="#fff2c4" stopOpacity=".55" /><stop offset={1} stopColor="#fff2c4" stopOpacity={0} /></linearGradient>
          <pattern id="corr" width={12} height={200} patternUnits="userSpaceOnUse"><rect width={5} height={200} fill="#fff" fillOpacity=".14" /><rect x={7} width={3} height={200} fill="#000" fillOpacity=".16" /></pattern>
          <pattern id="hazard" width={22} height={22} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width={11} height={22} fill="#f2a516" /><rect x={11} width={11} height={22} fill="#15191c" /></pattern>
          <pattern id="armStripe" width={64} height={14} patternUnits="userSpaceOnUse"><rect width={64} height={14} fill="#fbfbfb" /><rect width={32} height={14} fill="#d8322a" /></pattern>
          <pattern id="sleepers" width={28} height={16} patternUnits="userSpaceOnUse"><rect x={4} y={2} width={14} height={12} fill="#3a3430" /></pattern>
          <pattern id="ballast" width={8} height={8} patternUnits="userSpaceOnUse"><rect width={8} height={8} fill="#2a2c2d" /><circle cx={2} cy={2} r="1.5" fill="#45494a" /><circle cx={6} cy={5} r="1.3" fill="#1c1e1f" /></pattern>
          <pattern id="truss" width={56} height={40} patternUnits="userSpaceOnUse"><path d="M0 40 L28 0 L56 40" fill="none" stroke="#8a9296" strokeWidth={3} /></pattern>
          <symbol id="ctr" viewBox="0 0 480 200">
            <rect width={480} height={200} fill="currentColor" />
            <rect width={480} height={200} fill="url(#corr)" />
            <rect width={480} height={200} fill="url(#shade)" />
            <rect width={480} height={9} fill="#000" fillOpacity=".26" />
            <rect y={191} width={480} height={9} fill="#000" fillOpacity=".4" />
            <rect width={12} height={200} fill="#000" fillOpacity=".22" />
            <rect x={468} width={12} height={200} fill="#000" fillOpacity=".22" />
            <g fill="#1a1e20"><rect width={15} height={13} /><rect x={465} width={15} height={13} /><rect y={187} width={15} height={13} /><rect x={465} y={187} width={15} height={13} /></g>
          </symbol>
          <symbol id="wheel" viewBox="-50 -50 100 100">
            <circle r={48} fill="#0b0d0e" />
            <circle r={44} fill="none" stroke="#1d2225" strokeWidth={7} strokeDasharray="5 4" />
            <circle r={30} fill="url(#rim)" />
            <circle r={21} fill="none" stroke="#59615f" strokeWidth="2.4" />
            <g fill="#2a302f"><circle cy={-13} r="3.4" /><circle cx="11.3" cy="-6.5" r="3.4" /><circle cx="11.3" cy="6.5" r="3.4" /><circle cy={13} r="3.4" /><circle cx="-11.3" cy="6.5" r="3.4" /><circle cx="-11.3" cy="-6.5" r="3.4" /></g>
            <circle r={7} fill="#3b4341" />
            <rect x={-2} y={-29} width={4} height={9} fill="#78817f" />
            <rect x={-2} y={20} width={4} height={9} fill="#525a58" />
          </symbol>
          <symbol id="rwheel" viewBox="-26 -26 52 52">
            <circle r={25} fill="#1d2123" /><circle r={21} fill="#4a5153" /><circle r={8} fill="#22272a" />
            <rect x={-2} y={-21} width={4} height={13} fill="#2b2f31" /><rect x={-2} y={8} width={4} height={13} fill="#2b2f31" />
          </symbol>
        </defs>
        <rect className="sky" x={0} y={-230} width={2000} height={1030} />
        {/* parallax background words */}
        <g id="words" className="bigwords" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={420} letterSpacing={10}>
          <text x={-300} y={600}>GATE</text>
          <text x={1250} y={560}>CHECK</text>
          <text x={2700} y={560}>YARD</text>
          <text x={4300} y={560}>RAIL</text>
        </g>
        <g id="world">
          {/* distant yard stacks */}
          <g id="stacks" />
          {/* ground */}
          <rect className="ground" x={-3000} y={640} width={16000} height={400} />
          <rect x={-3000} y={636} width={16000} height={6} fill="#3a4045" />
          <line x1={-3000} y1={706} x2={13000} y2={706} stroke="#e9ece6" strokeOpacity=".5" strokeWidth={5} strokeDasharray="80 60" />
          {/* rail siding */}
          <rect x={3300} y={644} width={9000} height={26} fill="url(#ballast)" />
          <rect x={3300} y={648} width={9000} height={16} fill="url(#sleepers)" />
          <rect x={3300} y={642} width={9000} height={6} fill="#9aa3a7" />
          {/* GATE 01 (back) */}
          <g>
            <rect className="bld" x={760} y={440} width={190} height={200} />
            <rect className="bld2" x={760} y={440} width={190} height={14} />
            <rect x={780} y={476} width={64} height={54} fill="url(#glass)" />
            <rect x={860} y={476} width={64} height={54} fill="url(#glass)" />
            <rect x={870} y={548} width={44} height={92} fill="#59626a" />
            <rect x={700} y={318} width={10} height={322} fill="#9aa3a8" /><rect x={1200} y={318} width={10} height={322} fill="#9aa3a8" />
            <rect x={680} y={270} width={550} height={50} fill="#e9ecea" />
            <rect x={680} y={270} width={550} height={50} fill="url(#truss)" opacity=".35" />
            <rect x={680} y={316} width={550} height={6} fill="#f2a516" />
            <text x={955} y={304} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={28} letterSpacing={6} fill="#1d2326">SUNIC ICD · GATE 01</text>
            <rect x={560} y={300} width={6} height={200} fill="#59626a" /><rect x={540} y={288} width={46} height={18} rx={3} fill="#2a3036" /><circle cx={548} cy={297} r={4} fill="#3fd07a" className="blink" />
            <text x={563} y={282} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#7d878c">ANPR CAM</text>
          </g>
          {/* SECURITY (back) */}
          <g>
            <rect className="bld" x={1520} y={470} width={220} height={170} />
            <rect x={1506} y={452} width={248} height={20} fill="#4d4130" />
            <rect x={1540} y={494} width={84} height={56} fill="url(#glass)" />
            <rect x={1650} y={510} width={62} height={130} fill="#6b5a3e" />
            <rect x={1520} y={396} width={220} height={48} rx={3} fill="#102a4c" />
            <text x={1630} y={420} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={24} letterSpacing={4} fill="#ffffff">SECURITY</text>
            <text x={1630} y={436} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#ffd27a">CISF · CHECK POINT</text>
          </g>
          {/* yard sign */}
          <g><rect x={2196} y={380} width={8} height={260} fill="#9aa3a8" /><rect x={2110} y={340} width={180} height={54} rx={4} fill="#1b5e3a" /><text x={2200} y={365} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={800} fontSize={22} letterSpacing={3} fill="#fff">YARD · BLOCK C</text><text x={2200} y={383} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#d9f5e5">LOADING BAY 4</text></g>
          {/* TRAIN (real images) */}
          <g id="train">
            <g id="wagons" />
            <g id="loco" transform="translate(6320 0)">
              <ellipse cx={527} cy={646} rx={560} ry={10} fill="url(#shadowG)" />
              <image href="images/parts/loco.png" x={0} y={451} width={1055} height={192} />
              <rect x={300} y={560} width={300} height={24} rx={3} fill="#0f2a52" opacity=".85" />
              <text x={450} y={577} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={18} letterSpacing={4} fill="#ffd27a">SUNIC RAIL 4021</text>
            </g>
          </g>
          {/* TRUCK (real images), faces right; local x 0..918, ground 640 */}
          <g id="truck">
            <ellipse cx={460} cy={644} rx={490} ry={12} fill="url(#shadowG)" />
            <polygon id="headBeam" points="916,590 1400,540 1400,700 916,612" fill="url(#beamL)" opacity=".6" />
            <image href="images/parts/trailer.png" x={0} y={558} width={745} height={104} />
            <g transform="translate(110 608)"><g className="sp"><image href="images/parts/wheel.png" x={-33.0} y={-33.0} width={66} height={66} /></g></g>
            <g transform="translate(180 608)"><g className="sp"><image href="images/parts/wheel.png" x={-33.0} y={-33.0} width={66} height={66} /></g></g>
            <g transform="translate(250 608)"><g className="sp"><image href="images/parts/wheel.png" x={-33.0} y={-33.0} width={66} height={66} /></g></g>
            <g transform="translate(831 608)"><g className="sp"><image href="images/parts/wheel.png" x={-33.0} y={-33.0} width={66} height={66} /></g></g>
            <image href="images/parts/cab.png" x={675} y={405} width={243} height={222} />
            <g transform="translate(723 608)"><g className="sp"><image href="images/parts/wheel.png" x={-33.0} y={-33.0} width={66} height={66} /></g></g>
            <text x={790} y={598} fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={15} letterSpacing={3} fill="#1d2326" opacity=".8">SUNIC</text>
          </g>
          {/* HERO CONTAINER */}
          <g id="ctrHero">
            <image href="images/parts/cont_y.png" x={0} y={0} width={730} height={173} />
            <text x={365} y={112} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={72} letterSpacing={16} fill="#3a2700" fillOpacity=".72">SUNIC</text>
            <text x={40} y={38} fontFamily="JetBrains Mono, monospace" fontSize={15} fill="#3a2700">SNCU 240318 7</text>
            <text x={40} y={56} fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#3a2700" fillOpacity=".8">45G1 · 40FT HC</text>
          </g>
          {/* FRONT: gate barrier + kiosk */}
          <g id="kiosk">
            <rect x={586} y={420} width={18} height={222} fill="#59626a" />
            <rect x={548} y={334} width={96} height={92} rx={8} fill="#e8ebec" />
            <rect x={548} y={334} width={96} height={92} rx={8} fill="none" stroke="#9aa3a8" strokeWidth={2} />
            <rect x={638} y={364} width={10} height={30} rx={2} fill="#2a3036" />
            <rect id="kScreen" x={560} y={344} width={72} height={44} rx={3} fill="#c8322a" />
            <text id="kText" x={596} y={371} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#fff">SCAN QR</text>
            <text x={596} y={410} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#59626a">SUNIC GATE PASS</text>
            <polygon id="laser" points="646,372 700,352 700,410" fill="#ff3b30" opacity={0} />
          </g>
          <g id="bar1" transform="translate(1080 0)">
            <image href="images/parts/bar_post.png" x={-12} y={486} width={74} height={156} />
            <circle className="lamp" cx={26} cy={560} r={6} fill="#e2412d" />
            <g className="arm"><image href="images/parts/bar_arm.png" x={-400} y={495} width={412} height={32} /></g>
          </g>
          {/* guard */}
          <g id="guard">
            <ellipse cx={0} cy={644} rx={26} ry={5} fill="#000" opacity=".25" />
            <g className="legL"><rect x={-10} y={566} width={9} height={74} rx={3} fill="#5f4f33" /><rect x={-13} y={636} width={15} height={8} rx={2} fill="#111" /></g>
            <g className="legR"><rect x={1} y={566} width={9} height={74} rx={3} fill="#6b5a3c" /><rect x={0} y={636} width={15} height={8} rx={2} fill="#111" /></g>
            <rect x={-17} y={496} width={34} height={76} rx={9} fill="#8b774f" />
            <rect x={-17} y={560} width={34} height={7} fill="#2b2216" /><rect x={-3} y={560} width={6} height={7} fill="#c7a74a" />
            <rect x={-6} y={510} width={12} height={9} rx={2} fill="#102a4c" />
            <g transform="rotate(-50 8 506)"><rect x={4} y={502} width={9} height={46} rx={4} fill="#8b774f" /></g>
            <rect x={30} y={506} width={20} height={26} rx={3} fill="#1d2326" /><rect x={33} y={509} width={14} height={18} fill="#5fb4ff" />
            <rect x={-4} y={482} width={8} height={16} fill="#7b4f35" />
            <circle cx={0} cy={476} r={13} fill="#7b4f35" />
            <path d="M-15 472 Q-14 456 2 457 Q18 458 16 470 L-15 474 Z" fill="#5a1f22" />
            <rect x={-15} y={470} width={31} height={4} fill="#3a1416" />
          </g>
          <g id="bar2" transform="translate(1860 0)">
            <image href="images/parts/bar_post.png" x={-12} y={486} width={74} height={156} />
            <circle className="lamp" cx={26} cy={560} r={6} fill="#e2412d" />
            <g className="arm"><image href="images/parts/bar_arm.png" x={-400} y={495} width={412} height={32} /></g>
          </g>
          {/* REACH STACKER (real images, faces right). origin: front wheel centre-x, ground 640 */}
          <g id="rs">
            <ellipse cx={-260} cy={646} rx={420} ry={12} fill="url(#shadowG)" />
            <g id="wF" transform="translate(0 594)"><g className="sp"><image href="images/parts/wheel.png" x={-46} y={-46} width={92} height={92} /></g></g>
            <g id="wR" transform="translate(-507 594)"><g className="sp"><image href="images/parts/wheel.png" x={-46} y={-46} width={92} height={92} /></g></g>
            <image href="images/parts/stacker.png" x={-615} y={376} width={700} height={247} />
            <text x={-470} y={590} fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={22} letterSpacing={3} fill="#2a1d00" opacity=".8">SUNIC</text>
            <text x={-470} y={606} fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#2a1d00" opacity=".8">RS-45 · AUTO</text>
            <line id="cylBase" x1={-60} y1={575} x2={-40} y2={420} stroke="#30383e" strokeWidth={22} strokeLinecap="round" />
            <line id="cylRod" x1={-60} y1={575} x2={-40} y2={420} stroke="url(#chrome)" strokeWidth={9} strokeLinecap="round" />
            <g id="boom" transform="translate(-520 488) rotate(-30)">
              <image id="boomIn" href="images/parts/boom_inner.png" x={509} y={-64} width={629} height={171} />
              <image href="images/parts/boom_outer.png" x={-35} y={-64} width={579} height={171} />
            </g>
          </g>
          {/* spreader (world coords, follows boom tip) */}
          <g id="spr">
            <image href="images/parts/spreader.png" x={-342} y={-2} width={732} height={144} />
          </g>
          {/* status tags */}
          <g id="tagA" className="tag" opacity={0} transform="translate(380 190)"><rect width={330} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#3fd07a" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#3fd07a">✓ QR VERIFIED · ACCESS GRANTED</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">ANPR GJ12 AT 2026 · Slot C-14</text></g>
          <g id="tagB" className="tag" opacity={0} transform="translate(1180 190)"><rect width={330} height={58} rx={4} fill="#102a4c" /><rect width={6} height={58} fill="#ffd27a" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#ffd27a">✓ SECURITY CLEARED</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#e2e9f2">Seal 884120 intact · Driver ID OK</text></g>
          <g id="tagC" className="tag" opacity={0} transform="translate(2420 110)"><rect width={330} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#f2a516" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#f2a516">LIFT · 24.6 T · TWISTLOCKS ON</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">Job auto-assigned to RS-45</text></g>
          <g id="tagD" className="tag" opacity={0} transform="translate(4300 110)"><rect width={340} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#3fd07a" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#3fd07a">✓ LOADED · RAKE SR-4021 / W07</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">Departs DEL ICD → Mundra Port</text></g>
        </g>
      </svg>
      <div className="yhud">
        <div className="wrap yhud-in">
          <div className="ycaps" id="ycaps">
            <div className="ycap"><div className="num">01 / 06 · GATE ARRIVAL</div><h3>Truck reaches Gate 01</h3><p>The ANPR camera reads the number plate before the truck even stops. The booking is pulled up automatically.</p></div>
            <div className="ycap"><div className="num">02 / 06 · QR SCAN</div><h3>Driver scans the QR pass</h3><p>The kiosk matches truck, driver and container in under a second. Match found, so the boom barrier lifts.</p></div>
            <div className="ycap"><div className="num">03 / 06 · SECURITY</div><h3>Security check</h3><p>The guard checks seal number and driver ID on a handheld. Cleared trucks get the second barrier.</p></div>
            <div className="ycap"><div className="num">04 / 06 · YARD</div><h3>Reach stacker lifts the box</h3><p>The yard system assigns the job. The reach stacker locks its spreader on the container and lifts 24.6 tonnes off the trailer.</p></div>
            <div className="ycap"><div className="num">05 / 06 · RAIL LOADING</div><h3>Placed on the rail wagon</h3><p>The empty truck leaves. The container is carried to the siding and lowered onto wagon 07 of rake SR-4021.</p></div>
            <div className="ycap"><div className="num">06 / 06 · DEPARTURE</div><h3>Train leaves for the port</h3><p>The rake departs for Mundra. Every step you just saw is already logged on the customer's tracking page.</p></div>
          </div>
          <ol className="ysteps" id="ysteps">
            <li className="on"><i />Gate arrival</li><li><i />QR scan</li><li><i />Security</li><li><i />Yard lift</li><li><i />Rail loading</li><li><i />Departure</li>
          </ol>
        </div>
        <div className="phone" id="phone" aria-hidden="true">
          <div className="phone-scr">
            <small>SUNIC GATE PASS</small><b>SNCU 240318 7</b>
            <svg className="qr" id="qr" viewBox="0 0 21 21" shapeRendering="crispEdges" />
            <div className="scanline" id="scanline" />
            <div className="granted" id="granted">✓ ACCESS GRANTED</div>
          </div>
        </div>
        <div className="ygauge"><b id="kmh">00</b><small>km/h</small></div>
        <div className="ybar"><i id="ybar" /></div>
      </div>
    </section>
  );
}
