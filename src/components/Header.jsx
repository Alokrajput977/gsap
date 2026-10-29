export default function Header() {
  return (
    <header className="hdr" id="hdr">
      <div className="wrap">
        <a href="#top" className="logo" aria-label="Sunic Technologies home">
          <svg viewBox="0 0 30 30" aria-hidden="true"><rect width={30} height={30} rx={2} fill="#f2a516" /><g fill="#1a1204"><rect x={7} y={6} width={16} height={4} /><rect x={7} y={6} width={4} height={11} /><rect x={7} y={13} width={16} height={4} /><rect x={19} y={13} width={4} height={11} /><rect x={7} y={20} width={16} height={4} /></g></svg>
          <span>Sunic<small>Technologies</small></span>
        </a>
        <nav className="nav" aria-label="Main"><a href="#top-hero">Live map</a><a href="#yard">Gate to rail</a><a href="#how">How it works</a><a href="#services">Services</a><a href="#platform">Platform</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav>
        <div className="hdr-cta">
          <button className="icon-btn" id="themeBtn" type="button" aria-label="Switch to dark theme">
            <svg className="t-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
            <svg className="t-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></svg>
          </button>
          <a href="#platform" className="btn btn-ghost mag">Track container</a>
          <a href="#contact" className="btn btn-amber mag">Get a quote <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></a>
          <button className="icon-btn menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false"><span /><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
