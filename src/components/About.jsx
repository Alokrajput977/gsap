export default function About() {
  return (
    <section className="intro" id="about">
      <div className="wrap">
        <div className="intro-grid">
          <div className="rv"><p className="eyebrow">About Sunic</p><h2 className="h-sec">We automate the gate. <span>We own the outcome.</span></h2></div>
          <div className="rv">
            <p className="lede">Sunic Technologies builds and runs terminal automation for ports and inland container depots. Our system reads the truck, checks the paperwork, opens the barrier, tells the crane where to lift and tracks the box onto rail or ship.</p>
            <p className="lede">Every event lands on one platform, so operators, shipping lines and cargo owners see the same truth at the same moment.</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><b className="count" data-to={18} data-suffix>18</b><span>Ports &amp; ICDs on the network</span></div>
          <div className="stat"><b className="count" data-to={62} data-suffix="%">62%</b><span>Faster gate-in</span></div>
          <div className="stat"><b className="count" data-to="1.4" data-dec={1} data-suffix="M">1.4M</b><span>Gate moves a year</span></div>
          <div className="stat"><b>24/7</b><span>Control room</span></div>
        </div>
      </div>
    </section>
  );
}
