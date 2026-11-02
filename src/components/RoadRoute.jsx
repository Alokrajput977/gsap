export default function RoadRoute() {
  return (
    <section className="road" id="road" aria-label="Scroll to follow the route from factory to port">
      <svg className="rsvg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <text className="roadword" x={800} y={520} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={380} letterSpacing={12}>ROUTE</text>
        <path id="roadPath" d="M -120 200 H 420 C 620 200 640 460 860 460 H 1120 C 1330 460 1360 700 1560 700 H 1760" fill="none" stroke="#141819" strokeWidth={150} strokeLinecap="butt" />
        <path d="M -120 200 H 420 C 620 200 640 460 860 460 H 1120 C 1330 460 1360 700 1560 700 H 1760" fill="none" stroke="#2c3336" strokeWidth={150} strokeDasharray="1 0" opacity=".001" />
        <path d="M -120 200 H 420 C 620 200 640 460 860 460 H 1120 C 1330 460 1360 700 1560 700 H 1760" fill="none" stroke="#e9ece6" strokeOpacity=".55" strokeWidth={4} strokeDasharray="34 30" />
        <path id="roadDone" d="M -120 200 H 420 C 620 200 640 460 860 460 H 1120 C 1330 460 1360 700 1560 700 H 1760" fill="none" stroke="#f2a516" strokeWidth={6} />
        <g fontFamily="JetBrains Mono, monospace" fontSize={14} letterSpacing={1}>
          <g transform="translate(120 200)"><circle r={12} className="wp" /><text y={-100} textAnchor="middle" className="wpt">FACTORY · PANIPAT</text></g>
          <g transform="translate(520 236)"><circle r={12} className="wp" /><text x={0} y={-136} textAnchor="middle" className="wpt">NH-44 · GPS LIVE</text></g>
          <g transform="translate(990 460)"><circle r={12} className="wp" /><text y={-100} textAnchor="middle" className="wpt">SUNIC GATE 01</text></g>
          <g transform="translate(1300 590)"><circle r={12} className="wp" /><text x={120} y={-40} textAnchor="start" className="wpt">YARD · BLOCK C</text></g>
          <g transform="translate(1520 700)"><circle r={12} className="wp" /><text y={110} textAnchor="middle" className="wpt">RAIL SIDING</text></g>
        </g>
        <g id="topTruck">
          <rect x={-118} y={-24} width={190} height={48} rx={2} fill="#e39b12" />
          <g stroke="#9a5c00" strokeWidth={2} opacity=".6"><line x1={-108} y1={-24} x2={-108} y2={24} /><line x1={-88} y1={-24} x2={-88} y2={24} /><line x1={-68} y1={-24} x2={-68} y2={24} /><line x1={-48} y1={-24} x2={-48} y2={24} /><line x1={-28} y1={-24} x2={-28} y2={24} /><line x1={-8} y1={-24} x2={-8} y2={24} /><line x1={12} y1={-24} x2={12} y2={24} /><line x1={32} y1={-24} x2={32} y2={24} /><line x1={52} y1={-24} x2={52} y2={24} /></g>
          <text x={-23} y={7} textAnchor="middle" fontFamily="Big Shoulders Display, Impact, sans-serif" fontWeight={900} fontSize={20} letterSpacing={4} fill="#1a1204">SUNIC</text>
          <rect x={78} y={-22} width={46} height={44} rx={8} fill="#2d3438" />
          <rect x={110} y={-19} width={12} height={38} rx={3} fill="#7d97a8" />
          <rect x={74} y={-6} width={6} height={12} fill="#14181b" />
        </g>
      </svg>
      <div className="road-hud wrap">
        <p className="eyebrow">On the road</p>
        <h2 className="h-sec">Tracked before <span>it reaches the gate.</span></h2>
        <p className="lede">GPS on every Sunic truck shares an ETA with the gate. The booking, the yard slot and the crane job are ready before the truck arrives.</p>
        <div className="road-read"><div><small>Distance left</small><b id="rdKm">86 km</b></div><div><small>ETA gate</small><b id="rdEta">13:42</b></div><div><small>Status</small><b id="rdSt">On route</b></div></div>
      </div>
    </section>
  );
}
