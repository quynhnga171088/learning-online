import 'app/pages/layout/contact/contact.scss';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-inner">
        <div>
          <div className="section-label">
            <span className="material-icons-round">mail</span>
            Get In Touch
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Available for contract projects, consulting engagements, and full-time BA opportunities.
            I bring clarity to complexity and help teams deliver with confidence.
          </p>

          <div className="contact-availability">
            <div className="availability-dot" />
            Available for contract projects and consulting
          </div>
        </div>

        <div>
          <div className="contact-links">
            {[
              { icon: 'mail', label: 'Email', value: 'nga.quynh@example.com', href: 'mailto:nga.quynh@example.com' },
              { icon: 'share', label: 'LinkedIn', value: 'linkedin.com/in/quynhngaba', href: 'https://linkedin.com/in/quynhngaba' },
              { icon: 'location_on', label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: '#' }
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} className="contact-link-card" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className="contact-link-icon">
                  <span className="material-icons-round">{icon}</span>
                </div>
                <div>
                  <div className="contact-link-label">{label}</div>
                  <div className="contact-link-value">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;