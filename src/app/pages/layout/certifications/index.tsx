import 'app/pages/layout/certifications/certifications.scss';

const Certifications = () => {
  const certs = [
    {
      icon: 'workspace_premium',
      title: 'Professional BA',
      issuer: 'International Institute of Business Analysis (IIBA)',
      badge: 'IIBA Certified'
    },
    {
      icon: 'design_services',
      title: 'UI/UX Design Master',
      issuer: 'Google Professional Certification',
      badge: 'Google Certified'
    },
    {
      icon: 'speed',
      title: 'Agile/Scrum Practitioner',
      issuer: 'Scrum.org Professional Level',
      badge: 'Scrum.org'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="section-label">
        <span className="material-icons-round">workspace_premium</span>
        Credentials
      </div>
      <h2 className="section-title">Professional Certifications</h2>
      <p className="section-desc">
        Internationally recognized credentials that validate expertise across business analysis,
        design, and agile delivery.
      </p>

      <div className="certs-grid">
        {certs.map(cert => (
          <div key={cert.title} className="cert-card">
            <div className="cert-icon-wrap">
              <span className="material-icons-round">{cert.icon}</span>
            </div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-badge">
              <span className="material-icons-round">verified</span>
              {cert.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;