export default function HowItWorks() {
  return (
    <section className="process" id="how">
      <div className="wrap">
        <div className="proc-head">
          <div className="rv"><p className="eyebrow">How it works</p><h2 className="h-sec">Booking to delivery, <span>step by step.</span></h2></div>
          <p className="lede rv">This is exactly what happens to your container with Sunic, who does it, and what you see on your tracking screen at each step.</p>
        </div>
        <ol className="proc"><span className="proc-fill" id="procFill" aria-hidden="true" />
          <li><div className="pn">01</div><div className="pb"><h3>Booking</h3><p>You share origin, destination, cargo and ready date. Our desk confirms rate, truck, rake and vessel in one booking.</p><dl><dt>Who</dt><dd>Sunic booking desk</dd><dt>You see</dt><dd>Booking ID, plan and itemised quote</dd><dt>Time</dt><dd>Under 2 hours</dd></dl></div></li>
          <li><div className="pn">02</div><div className="pb"><h3>Pickup &amp; road</h3><p>A GPS-tracked truck collects the container from your factory. The driver gets a digital QR gate pass on the phone.</p><dl><dt>Who</dt><dd>Sunic fleet</dd><dt>You see</dt><dd>Live truck location, speed, ETA</dd><dt>Docs</dt><dd>E-way bill, seal number</dd></dl></div></li>
          <li><div className="pn">03</div><div className="pb"><h3>Gate entry</h3><p>At the depot gate an ANPR camera reads the plate. The driver scans the QR pass at the kiosk, and the system matches truck, driver and container before the boom barrier opens.</p><dl><dt>Who</dt><dd>Automated gate</dd><dt>You see</dt><dd>Gate-in time and lane</dd><dt>Time</dt><dd>About 1 minute</dd></dl></div></li>
          <li><div className="pn">04</div><div className="pb"><h3>Security check</h3><p>Security (CISF at port gates, gate security at the ICD) checks the seal, driver ID and vehicle. Only cleared trucks go into the yard.</p><dl><dt>Who</dt><dd>Security team</dd><dt>You see</dt><dd>Cleared status, seal verified</dd><dt>Time</dt><dd>3 to 5 minutes</dd></dl></div></li>
          <li><div className="pn">05</div><div className="pb"><h3>Yard handling</h3><p>The yard system gives the box a slot. A reach stacker lifts it off the trailer, and weight and condition photos are saved.</p><dl><dt>Who</dt><dd>Yard operations</dd><dt>You see</dt><dd>Slot, lift time, photos</dd><dt>Docs</dt><dd>Equipment interchange receipt</dd></dl></div></li>
          <li><div className="pn">06</div><div className="pb"><h3>Customs</h3><p>Our licensed customs broker files the shipping bill and handles examination if required, so the box is cleared before rail loading.</p><dl><dt>Who</dt><dd>Sunic customs desk</dd><dt>You see</dt><dd>Filing status, LEO</dd><dt>Docs</dt><dd>Shipping bill, invoice, packing list</dd></dl></div></li>
          <li><div className="pn">07</div><div className="pb"><h3>Rail to port</h3><p>The container is loaded onto a rail wagon and the rake runs to the port on a fixed schedule.</p><dl><dt>Who</dt><dd>Rail operations</dd><dt>You see</dt><dd>Rake and wagon number, train position</dd><dt>Time</dt><dd>About 30 hours to Mundra</dd></dl></div></li>
          <li><div className="pn">08</div><div className="pb"><h3>Port &amp; vessel</h3><p>The box enters the port before vessel cut-off, is loaded on board and sails. The bill of lading is released to you.</p><dl><dt>Who</dt><dd>Port team and carrier</dd><dt>You see</dt><dd>Vessel name, ETD, ETA</dd><dt>Docs</dt><dd>Bill of lading</dd></dl></div></li>
          <li><div className="pn">09</div><div className="pb"><h3>Delivery</h3><p>We follow the container to the destination port and the consignee, then close the shipment with proof of delivery.</p><dl><dt>Who</dt><dd>Your account manager</dd><dt>You see</dt><dd>Arrival, delivery, POD</dd><dt>Support</dt><dd>24/7 control tower</dd></dl></div></li>
        </ol>
      </div>
    </section>
  );
}
