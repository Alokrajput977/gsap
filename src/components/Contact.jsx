export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div><p className="eyebrow">Get a quote</p><h2>Ready to move smarter?</h2><p>Tell us what you are shipping and where. A person from our desk will come back with options and a clear price.</p></div>
        <form className="form" id="qform" noValidate>
          <label htmlFor="f-name">Name<input id="f-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
          <label htmlFor="f-co">Company<input id="f-co" name="company" autoComplete="organization" placeholder="Company" /></label>
          <label htmlFor="f-email">Email<input id="f-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
          <label htmlFor="f-mode">Mode<select id="f-mode" name="mode"><option>Road + ICD + Rail</option><option>Ocean (FCL / LCL)</option><option>Road only</option><option>Customs only</option></select></label>
          <label htmlFor="f-msg" className="full">Shipment details<textarea id="f-msg" name="msg" placeholder="Origin, destination, cargo, container size, ready date" defaultValue={""} /></label>
          <button className="btn btn-amber mag" type="submit">Request a quote <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></button>
          <p className="form-msg" id="formMsg" role="status" hidden />
        </form>
      </div>
    </section>
  );
}
