import './App.css';

function App() {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  const features = [
    {
      title: 'Fast to build',
      desc: 'Simple sections + clean layout. Easy to modify for your assignment topic.',
      icon: '⚡',
    },
    {
      title: 'Responsive',
      desc: 'Works on mobile, tablet, and desktop without extra libraries.',
      icon: '📱',
    },
    {
      title: 'Modern UI',
      desc: 'Cards, gradients, and spacing tuned for a professional look.',
      icon: '✨',
    },
  ];

  const plans = [
    {
      name: 'Basic',
      price: '₹0',
      note: 'Good for demo',
      cta: 'Start free',
      highlight: false,
      bullets: ['Hero + features', 'Pricing section', 'FAQ section'],
    },
    {
      name: 'Standard',
      price: '₹499',
      note: 'Recommended',
      cta: 'Choose Standard',
      highlight: true,
      bullets: ['Everything in Basic', 'Better UI polish', 'Ready for submission'],
    },
  ];

  const faqs = [
    {
      q: 'Is this a single-page landing page?',
      a: 'Yes. It’s one page with anchor links (Features, Pricing, FAQ).',
    },
    {
      q: 'Can I change the topic?',
      a: 'Yes—just replace text (name, features, pricing) and you’re done.',
    },
    {
      q: 'Do I need any library like Tailwind?',
      a: 'No. This is plain React + CSS (works out-of-the-box in CRA).',
    },
  ];

  return (
    <div className="lp">
      <a className="lp-skip" href="#main">
        Skip to content
      </a>

      <header className="lp-header">
        <div className="lp-container lp-header-inner">
          <div className="lp-brand" aria-label="Brand">
            <span className="lp-mark" aria-hidden="true">
              ◼
            </span>
            <span className="lp-brand-name">LandingPage</span>
          </div>

          <nav className="lp-nav" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} className="lp-nav-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="lp-header-cta">
            <a className="lp-btn lp-btn-ghost" href="#pricing">
              View pricing
            </a>
            <a className="lp-btn lp-btn-primary" href="#get-started">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="lp-hero" id="get-started">
          <div className="lp-container">
            <div className="lp-pill">React Landing Page</div>
            <h1 className="lp-h1">
              A landing page that looks
              <span className="lp-gradient"> professional</span>.
            </h1>
            <p className="lp-subtitle">
              Hero, features, pricing and FAQ — that’s it. Clean and easy to edit.
            </p>
            <div className="lp-hero-actions">
              <a className="lp-btn lp-btn-primary" href="#pricing">
                See pricing
              </a>
              <a className="lp-btn lp-btn-ghost" href="#features">
                View features
              </a>
            </div>
          </div>
        </section>

        <section className="lp-section" id="features">
          <div className="lp-container">
            <div className="lp-section-head">
              <h2 className="lp-h2">Features</h2>
              <p className="lp-lead">
                A small set of features to keep your page clean and readable.
              </p>
            </div>

            <div className="lp-grid lp-grid-3">
              {features.map((f) => (
                <div key={f.title} className="lp-card">
                  <div className="lp-card-icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <div className="lp-card-title">{f.title}</div>
                  <div className="lp-card-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-section" id="pricing">
          <div className="lp-container">
            <div className="lp-section-head">
              <h2 className="lp-h2">Pricing</h2>
              <p className="lp-lead">Simple pricing cards (you can edit the values).</p>
            </div>

            <div className="lp-grid lp-grid-3">
              {plans.map((p) => (
                <div key={p.name} className={p.highlight ? 'lp-plan lp-plan-highlight' : 'lp-plan'}>
                  {p.highlight ? <div className="lp-badge">Most popular</div> : null}
                  <div className="lp-plan-name">{p.name}</div>
                  <div className="lp-plan-price">
                    <span className="lp-plan-price-main">{p.price}</span>
                    <span className="lp-plan-price-sub">/month</span>
                  </div>
                  <div className="lp-plan-note">{p.note}</div>
                  <ul className="lp-plan-list">
                    {p.bullets.map((b) => (
                      <li key={b} className="lp-plan-item">
                        <span className="lp-check" aria-hidden="true">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a className={p.highlight ? 'lp-btn lp-btn-primary lp-plan-cta' : 'lp-btn lp-btn-ghost lp-plan-cta'} href="#get-started">
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-section lp-section-alt" id="faq">
          <div className="lp-container">
            <div className="lp-section-head">
              <h2 className="lp-h2">FAQ</h2>
              <p className="lp-lead">Quick answers to common questions.</p>
            </div>

            <div className="lp-faq">
              {faqs.map((f) => (
                <details key={f.q} className="lp-faq-item">
                  <summary className="lp-faq-q">
                    <span>{f.q}</span>
                    <span className="lp-faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="lp-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <div>
            <div className="lp-brand lp-footer-brand">
              <span className="lp-mark" aria-hidden="true">
                ◼
              </span>
              <span className="lp-brand-name">LandingPage</span>
            </div>
            <div className="lp-footer-note">A React landing page template for assignments and demos.</div>
          </div>
          <div className="lp-footer-links" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.href} className="lp-footer-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="lp-footer-copy">© {new Date().getFullYear()} LandingPage. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
