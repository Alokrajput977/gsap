export default function Platform() {
  return (
    <section className="platform" id="platform">
      <div className="wrap plat-grid">
        <div className="rv">
          <p className="eyebrow">Sunic Platform</p>
          <h2 className="h-sec">Your container, <span>on one screen.</span></h2>
          <ul className="feat">
            <li><svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth={2}><rect x={4} y={4} width={7} height={7} /><rect x={15} y={4} width={7} height={7} /><rect x={4} y={15} width={7} height={7} /><path d="M15 15h3v3h-3zM19 19h3v3" /></svg><div><b>QR gate passes</b><span>Drivers carry a QR pass on their phone. One scan at the lane opens the barrier and logs the gate-in.</span></div></li>
            <li><svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth={2}><path d="M13 3 L22 7 V13 C22 18 18 22 13 23 C8 22 4 18 4 13 V7 Z" /><path d="M9 13 L12 16 L17 10" /></svg><div><b>Security and seal records</b><span>Seal number, driver ID and security clearance saved against each container.</span></div></li>
            <li><svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={13} cy={11} r={4} /><path d="M13 24 C5 15 5 11 5 11 A8 8 0 0 1 21 11 C21 11 21 15 13 24 Z" /></svg><div><b>Live road, yard and rail tracking</b><span>Truck GPS, yard slot, lift time, rake number and vessel status in one timeline.</span></div></li>
            <li><svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth={2}><path d="M8 8 L3 13 L8 18 M18 8 L23 13 L18 18 M15 5 L11 21" /></svg><div><b>API and ERP integration</b><span>Push bookings from your ERP and pull every status update back automatically.</span></div></li>
          </ul>
        </div>
        <div className="rv">
          <div className="trk tilt">
            <div className="trk-top"><div className="trk-id"><small>Container</small>SEGU 606917 4 · 40' HC</div><span className="pill"><span className="dot-live" />On rail</span></div>
            <div className="troute"><i id="trkFill" /></div>
            <div className="route-stops">
              <div className="done"><b>Gate-in</b><span>13:42</span></div>
              <div className="done"><b>Yard lift</b><span>14:02</span></div>
              <div className="now"><b>Rake SR-4021</b><span>14:20</span></div>
              <div><b>Mundra</b><span>28 Oct</span></div>
            </div>
            <div className="trk-kv"><div><small>Gross wt</small><b>24.6 t</b></div><div><small>Gate time</small><b>5m 40s</b></div><div><small>On plan</small><b>+0.2 d</b></div></div>
            <ul className="trk-log">
              <li><span>14:20</span><b>Loaded on wagon 07, rake SR-4021</b></li>
              <li><span>14:02</span><span>Lifted by reach stacker RS-02</span></li>
              <li><span>13:44</span><span>Security cleared · seal 884120 intact</span></li>
              <li><span>13:42</span><span>QR gate pass scanned at Lane 2</span></li>
            </ul>
          </div>
          <p className="sample">Sample container shown for illustration.</p>
        </div>
      </div>
    </section>
  );
}
