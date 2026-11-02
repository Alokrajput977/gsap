export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="rv"><p className="eyebrow">F.A.Q.</p><h2 className="h-sec">Straight <span>answers.</span></h2><p className="lede" style={{marginTop: 20}}>Still have a question? Write to us and a person from the desk will reply.</p></div>
        <div>
          <details open><summary>What does Sunic Technologies do?<i /></summary><p>We run road, inland depot, yard, rail, customs and ocean logistics, with our own platform that tracks every container from pickup to delivery.</p></details>
          <details><summary>How does the QR gate pass work?<i /></summary><p>Once a booking is confirmed, the driver gets a QR pass on their phone. They scan it at the lane kiosk, the system matches truck, driver and container, and the barrier opens.</p></details>
          <details><summary>Is every truck security checked?<i /></summary><p>Yes. Seal number, driver ID and the vehicle are checked at the gate before the truck enters the yard.</p></details>
          <details><summary>Can I track my container in real time?<i /></summary><p>Yes. You see the truck on the road, gate-in, yard lift, rail loading and vessel status as they happen.</p></details>
          <details><summary>How is pricing calculated?<i /></summary><p>Price depends on container size, route, mode, cargo type, handling and current carrier rates. Every quote is itemised.</p></details>
        </div>
      </div>
    </section>
  );
}
