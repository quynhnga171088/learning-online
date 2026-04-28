import 'app/pages/layout/about/about.scss';

const About = () => {
  const coreSkills = [
    'Software Design',
    'System Flows & Data Models',
    'Stakeholder Management',
    'Executive Communication',
    'Agile / Scrum',
    'UX Research',
    'BRD / FRD Writing',
    'Process Optimization'
  ];

  return (
    <div id="summary" className="about-section">
      <div className="about-inner">
        <div>
          <div className="section-label">
            <span className="material-icons-round">auto_awesome</span>
            About Me
          </div>
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-desc" style={{ marginBottom: '1rem' }}>
            Business Analyst specializing in <strong>Software Design &amp; System Architecture</strong>. With
            a focus on Agile methodologies and user-centric design, I translate high-level vision
            into executable technical specifications that developers and stakeholders both understand.
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', lineHeight: 1.75 }}>
            My approach combines analytical rigor with creative thinking — ensuring that every
            requirement is not just documented, but truly understood and actionable.
          </p>
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            <span className="material-icons-round">category</span>
            Core Competencies
          </div>
          <div className="core-skills">
            {coreSkills.map(skill => (
              <div key={skill} className="skill-pill">
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;