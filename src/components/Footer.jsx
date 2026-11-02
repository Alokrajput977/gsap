export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <a href="#top" className="logo"><svg viewBox="0 0 30 30" aria-hidden="true"><rect width={30} height={30} rx={2} fill="#f2a516" /><g fill="#1a1204"><rect x={7} y={6} width={16} height={4} /><rect x={7} y={6} width={4} height={11} /><rect x={7} y={13} width={16} height={4} /><rect x={19} y={13} width={4} height={11} /><rect x={7} y={20} width={16} height={4} /></g></svg><span>Sunic<small>Technologies</small></span></a>
            <div className="ftr-photo"><img src="images/rail.jpg" alt="Container rake at the rail siding" loading="lazy" /></div>
          </div>
          <div><h4>Company</h4><ul><li><a href="#about">About</a></li><li><a href="#yard">Gate to rail</a></li><li><a href="#platform">Platform</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contact">Contact</a></li></ul></div>
          <div><h4>Services</h4><ul><li><a href="#services">Road &amp; Linehaul</a></li><li><a href="#services">ICD &amp; CFS</a></li><li><a href="#services">Yard Handling</a></li><li><a href="#services">Rail Freight</a></li><li><a href="#services">Rail to Port</a></li></ul></div>
          <div><h4>Head office</h4><ul><li>New Delhi, India</li><li><span id="mail">hello@sunictechnologies.com</span><button className="copy-btn" id="copyMail" type="button">Copy</button></li><li>Mon to Sat · 9:30 to 18:30</li></ul></div>
        </div>
        <div className="big" aria-hidden="true"><svg viewBox="0 0 1000 118" preserveAspectRatio="xMidYMid meet"><text x={0} y={100} textLength={1000} lengthAdjust="spacingAndGlyphs"><tspan className="b1">SUNIC</tspan> <tspan className="b2">TECHNOLOGIES</tspan></text></svg></div>
        <div className="ftr-bot"><span>© 2026 Sunic Technologies</span><span>Privacy · Terms · Shipping policy</span></div>
      </div>
    </footer>
  );
}
