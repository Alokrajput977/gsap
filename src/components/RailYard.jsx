const P = 'images/parts/';

/* Pinned scroll scene: a rake arrives and stops, a reach stacker lifts a
   container off the wagon and stacks it in the yard. Animated by lib/railYard.js. */
export default function RailYard() {
  return (
    <section className="yard ry" id="railyard" aria-label="Scroll to watch a train stop, and a reach stacker move a container from the wagon to a yard stack">
      <svg className="ysvg" id="rySvg" viewBox="0 -230 2000 1030" preserveAspectRatio="xMidYMax slice" role="img" aria-label="A container train stops at the siding, a reach stacker lifts a container off the wagon and places it on a yard stack">
        <rect className="sky" x={-200} y={-1600} width={2400} height={2800} />
        <g id="ryWords" className="bigwords" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={420} letterSpacing={10}>
          <text x={-200} y={600}>RAIL</text>
          <text x={1700} y={560}>YARD</text>
          <text x={3600} y={560}>STACK</text>
        </g>
        <g id="ryWorld">
          {/* distant yard */}
          <g id="ryBack" className="ry-back" />
          {/* ground + rail siding (back lane, ground 610) */}
          <rect className="ground" x={-4000} y={604} width={14000} height={600} />
          <rect x={-4000} y={604} width={14000} height={30} fill="url(#ballast)" />
          <rect x={-4000} y={609} width={14000} height={16} fill="url(#sleepers)" />
          <rect x={-4000} y={604} width={14000} height={6} fill="#9aa3a7" />
          <rect x={-4000} y={636} width={14000} height={6} fill="#3a4045" />
          <line x1={-4000} y1={706} x2={10000} y2={706} stroke="#e9ece6" strokeOpacity=".5" strokeWidth={5} strokeDasharray="80 60" />
          {/* signal + siding sign */}
          <g>
            <rect x={1540} y={380} width={10} height={228} fill="#59626a" />
            <rect x={1522} y={340} width={46} height={92} rx={8} fill="#1b2023" />
            <circle id="rySigR" cx={1545} cy={364} r={11} fill="#e2412d" />
            <circle id="rySigG" cx={1545} cy={404} r={11} fill="#1f3a2a" />
            <rect x={300} y={330} width={8} height={278} fill="#9aa3a8" />
            <rect x={200} y={290} width={210} height={54} rx={4} fill="#102a4c" />
            <text x={305} y={315} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={800} fontSize={22} letterSpacing={3} fill="#fff">SIDING · LINE 2</text>
            <text x={305} y={333} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#ffd27a">SUNIC ICD · DELHI</text>
          </g>
          {/* TRAIN (back lane) */}
          <g id="ryTrain">
            <g id="ryWagons" />
            <g transform="translate(2414 0)">
              <ellipse cx={527} cy={614} rx={560} ry={10} fill="url(#shadowG)" />
              <image href={P + 'loco.png'} x={0} y={421} width={1055} height={192} />
              <rect x={300} y={530} width={300} height={24} rx={3} fill="#0f2a52" opacity=".85" />
              <text x={450} y={547} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={18} letterSpacing={4} fill="#ffd27a">SUNIC RAIL 4021</text>
              <polygon points="1050,520 1500,470 1500,620 1050,548" fill="url(#beamL)" opacity=".5" />
            </g>
          </g>
          {/* yard block D (front lane, ground 640) */}
          <g id="ryBlock" />
          <g id="ryLabel" transform="translate(2900 0)">
            <rect x={-70} y={-110} width={140} height={40} rx={4} fill="#1b5e3a" />
            <text x={0} y={-84} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={800} fontSize={20} letterSpacing={3} fill="#fff">D-07 · T3</text>
            <line x1={0} y1={-70} x2={0} y2={112} stroke="#1b5e3a" strokeWidth={3} strokeDasharray="8 8" />
          </g>
          {/* REACH STACKER (front lane) */}
          <g id="ryRs">
            <ellipse cx={-260} cy={646} rx={420} ry={12} fill="url(#shadowG)" />
            <g transform="translate(0 594)"><g className="rysp"><image href={P + 'wheel.png'} x={-46} y={-46} width={92} height={92} /></g></g>
            <g transform="translate(-507 594)"><g className="rysp"><image href={P + 'wheel.png'} x={-46} y={-46} width={92} height={92} /></g></g>
            <image href={P + 'stacker.png'} x={-615} y={376} width={700} height={247} />
            <text x={-470} y={590} fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={22} letterSpacing={3} fill="#2a1d00" opacity=".8">SUNIC</text>
            <text x={-470} y={606} fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#2a1d00" opacity=".8">RS-46 · AUTO</text>
            <line id="ryCylB" x1={-60} y1={575} x2={-40} y2={420} stroke="#30383e" strokeWidth={22} strokeLinecap="round" />
            <line id="ryCylR" x1={-60} y1={575} x2={-40} y2={420} stroke="url(#chrome)" strokeWidth={9} strokeLinecap="round" />
            <g id="ryBoom" transform="translate(-520 488) rotate(-30)">
              <image id="ryBoomIn" href={P + 'boom_inner.png'} x={509} y={-64} width={629} height={171} />
              <image href={P + 'boom_outer.png'} x={-35} y={-64} width={579} height={171} />
            </g>
          </g>
          {/* the container we follow */}
          <g id="ryCtr">
            <image href={P + 'cont_y.png'} x={0} y={0} width={730} height={173} />
            <text x={365} y={112} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={72} letterSpacing={16} fill="#3a2700" fillOpacity=".72">SUNIC</text>
            <text x={40} y={38} fontFamily="JetBrains Mono, monospace" fontSize={15} fill="#3a2700">SNCU 311207 2</text>
            <text x={40} y={56} fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#3a2700" fillOpacity=".8">45G1 · 40FT HC · IMPORT</text>
          </g>
          <g id="rySpr">
            <image href={P + 'spreader.png'} x={-342} y={-2} width={732} height={144} />
          </g>
          {/* status tags */}
          <g id="ryTagA" className="tag" opacity="0" transform="translate(620 120)"><rect width={340} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#3fd07a" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#3fd07a">✓ RAKE SR-4021 ARRIVED · LINE 2</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">45 wagons · 90 TEU · from Mundra</text></g>
          <g id="ryTagB" className="tag" opacity="0" transform="translate(1180 60)"><rect width={330} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#f2a516" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#f2a516">LIFT · 24.6 T · TWISTLOCKS ON</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">Wagon 07 → Block D, slot 07</text></g>
          <g id="ryTagC" className="tag" opacity="0" transform="translate(2735 -80)"><rect width={330} height={58} rx={4} fill="#111518" /><rect width={6} height={58} fill="#3fd07a" /><text x={20} y={25} fontFamily="JetBrains Mono, monospace" fontSize={13} fill="#3fd07a">✓ STACKED · D-07 · TIER 3</text><text x={20} y={45} fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#cfd6d9">Yard map + customer page updated</text></g>
        </g>
      </svg>

      <div className="yhud">
        <div className="wrap yhud-in">
          <div className="ycaps" id="ryCaps">
            <div className="ycap"><div className="num">01 / 04 · RAKE ARRIVAL</div><h3>The train rolls in and stops</h3><p>Rake SR-4021 arrives from Mundra and stops on siding line 2. Its wagon list is already in the yard system.</p></div>
            <div className="ycap"><div className="num">02 / 04 · STACKER ASSIGNED</div><h3>Reach stacker moves in</h3><p>RS-46 gets the job for wagon 07. The spreader lines up with the container on its own.</p></div>
            <div className="ycap"><div className="num">03 / 04 · LIFT</div><h3>Box off the wagon</h3><p>Twistlocks lock and 24.6 tonnes come off the wagon. Weight and photos are saved with the lift.</p></div>
            <div className="ycap"><div className="num">04 / 04 · STACKED</div><h3>Stacked in the yard</h3><p>Placed in Block D, slot 07, tier 3. The yard map and the customer's tracking page update at the same moment.</p></div>
          </div>
          <ol className="ysteps" id="rySteps">
            <li className="on"><i />Rake arrival</li><li><i />Stacker assigned</li><li><i />Lift</li><li><i />Stacked</li>
          </ol>
        </div>
        <div className="ygauge"><b id="rySlot">--</b><small id="rySlotL">yard slot</small></div>
        <div className="ybar"><i id="ryBar" /></div>
      </div>
    </section>
  );
}
