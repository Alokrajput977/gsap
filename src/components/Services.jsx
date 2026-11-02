export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="svc-head">
          <div className="rv"><p className="eyebrow">Services</p><h2 className="h-sec">Everything your cargo needs. <span>One group.</span></h2></div>
          <p className="lede rv">Each leg is run by our own desk and shows up on the same tracking screen. One partner, one contact, one record of the container.</p>
        </div>
        <div className="svc-grid">
          <article className="svc tilt"><div className="svc-img"><img src="images/truck.jpg" alt="Container truck" loading="lazy" /><span className="code">SVC 01 · ROAD</span></div><div className="svc-body"><h3>Road &amp; Linehaul</h3><p>Container haulage and FTL across India on a GPS-tracked fleet, with e-way bills generated automatically.</p></div></article>
          <article className="svc tilt"><div className="svc-img"><img src="images/gate.jpg" alt="Gate lane with boom barrier" loading="lazy" /><span className="code">SVC 02 · ICD</span></div><div className="svc-body"><h3>ICD &amp; CFS</h3><p>Gate-in with QR passes and ANPR, stuffing, de-stuffing and bonded storage at our inland depot.</p></div></article>
          <article className="svc tilt"><div className="svc-img"><img src="images/yard.jpg" alt="Reach stacker in the yard" loading="lazy" /><span className="code">SVC 03 · YARD</span></div><div className="svc-body"><h3>Yard Handling</h3><p>Reach stackers and gantries for lift-on, lift-off and stacking, planned slot by slot in our yard system.</p></div></article>
          <article className="svc tilt"><div className="svc-img"><img src="images/rail.jpg" alt="Container rail wagons" loading="lazy" /><span className="code">SVC 04 · RAIL</span></div><div className="svc-body"><h3>Rail Freight</h3><p>Scheduled rakes between our ICD and Mundra, Nhava Sheva and Pipavav, booked and tracked with the box.</p></div></article>
          <article className="svc tilt"><div className="svc-img"><img src="images/train-card.jpg" alt="Sunic container train with loaded wagons" loading="lazy" /><span className="code">SVC 05 · RAIL TO PORT</span></div><div className="svc-body"><h3>Rail to Port</h3><p>Container rakes from our ICDs to Mundra, Nhava Sheva and Chennai, timed to vessel cut-offs so the box never waits.</p></div></article>
          <article className="svc tilt"><div className="svc-ui" aria-hidden="true"><div className="r"><span>13:38 Gate-in</span><b>Lane 2</b></div><div className="r"><span>13:44 Security</span><b>Cleared</b></div><div className="r"><span>14:02 Yard lift</span><b>RS-02</b></div><div className="r w"><span>14:20 Rail</span><b>SR-4021</b></div></div><div className="svc-body"><h3>Customs &amp; Platform</h3><p>Licensed customs desk plus one tracking page for every container, with documents attached.</p></div></article>
        </div>
      </div>
    </section>
  );
}
