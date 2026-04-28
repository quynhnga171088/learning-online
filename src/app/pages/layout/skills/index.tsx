
const Skills = () => {
  const skills = [
    {
      icon: 'manage_search',
      title: 'Requirements Gathering',
      desc: 'Expert at eliciting complex needs from stakeholders through deep interviews, workshops, and observation techniques.'
    },
    {
      icon: 'design_services',
      title: 'Wireframing & Prototyping',
      desc: 'Low-fi and High-fi prototyping using Figma, Balsamiq, and Adobe XD for rapid validation cycles.'
    },
    {
      icon: 'handshake',
      title: 'Stakeholder Management',
      desc: 'Negotiation and conflict resolution across multi-disciplinary teams and executive stakeholders.'
    },
    {
      icon: 'article',
      title: 'User Stories & Documentation',
      desc: 'Detailed BRD, FRD, and INVEST-compliant user stories that guide teams to successful delivery.'
    },
    {
      icon: 'account_tree',
      title: 'System & Process Modeling',
      desc: 'BPMN 2.0, UML, sequence diagrams, data flow diagrams and entity-relationship modeling.'
    },
    {
      icon: 'query_stats',
      title: 'Data Analysis',
      desc: 'SQL queries, Excel Power Query, and business intelligence dashboards to support decision-making.'
    }
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-label">
          <span className="material-icons-round">psychology</span>
          Expertise
        </div>
        <h2 className="section-title">Key Skills</h2>
        <p className="section-desc">
          A diverse toolkit spanning analytical, technical, and interpersonal domains — delivering
          comprehensive coverage across the software delivery lifecycle.
        </p>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.title} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <span className="material-icons-round">{skill.icon}</span>
                </div>
                <div>
                  <div className="skill-card-title">{skill.title}</div>
                  <div className="skill-card-desc">{skill.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;