import 'app/pages/layout/hero/hero.scss';

const Index = () => {
  return (
    <section id="profile" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-label">
            <span className="material-icons-round">verified</span>
            Business Analyst — Portfolio 2025
          </div>

          <h1 className="hero-title">
            Nguyễn Thị<br />
            <span className="highlight">Quỳnh Nga</span>
          </h1>

          <p className="hero-role">Senior Business Analyst &amp; System Designer</p>

          <p className="hero-desc">
            Bridging the gap between complex business requirements and elegant software solutions.
            Specializing in Agile methodologies and user-centric design — I translate high-level
            vision into executable technical specifications.
          </p>

          <div className="hero-cta">
            <a
              href="#contact"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span className="btn-icon material-icons-round">mail</span>
              Get in Touch
            </a>
            <a
              href="#certifications"
              className="btn-secondary"
              onClick={e => { e.preventDefault(); document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span className="btn-icon material-icons-round">workspace_premium</span>
              View Certificates
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">6+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">30+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-ring">
              <div className="avatar-ring-inner" />
            </div>
            <div className="avatar-img">
              <img
                src="/avatar.png"
                alt="Nguyễn Thị Quỳnh Nga — Business Analyst"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            <div className="badge-floating badge-top">
              <span className="badge-icon material-icons-round">workspace_premium</span>
              <div >
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--on-surface)' }}>IIBA Certified</div>
                <div style={{ fontSize: '0.625rem', color: 'var(--on-surface-variant)' }}>Professional BA</div>
              </div>
            </div>

            <div className="badge-floating badge-bottom">
              <span className="badge-icon material-icons-round">account_tree</span>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--on-surface)' }}>Agile / Scrum</div>
                <div style={{ fontSize: '0.625rem', color: 'var(--on-surface-variant)' }}>Practitioner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;