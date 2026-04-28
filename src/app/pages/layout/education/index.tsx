import 'app/pages/layout/education/education.scss';

const Education = () => {
  const timeline = [
    {
      period: '2014 – 2018',
      degree: 'Bachelor of Science in Information Technology',
      school: 'Ho Chi Minh City University of Technology (HCMUT)',
      desc: 'Major in Software Engineering. Graduated with Distinction (GPA 8.4/10). Final thesis on "Applying UML in Agile Software Projects."'
    },
    {
      period: '2018 – 2019',
      degree: 'Diploma in Business Analysis',
      school: 'FPT Training Center, Ho Chi Minh City',
      desc: 'Intensive program covering requirements elicitation, process modeling, and business case development.'
    },
    {
      period: '2021 – 2022',
      degree: 'UX Design Professional Certificate',
      school: 'Google / Coursera Online Program',
      desc: 'Completed 7-course specialization on user experience research, wireframing, prototyping, and usability testing.'
    }
  ];

  return (
    <div id="education" className="education-section">
      <div className="section" style={{ paddingBottom: '4rem' }}>
        <div className="section-label">
          <span className="material-icons-round">school</span>
          Academic Background
        </div>
        <h2 className="section-title">Education</h2>
        <p className="section-desc">
          A solid academic foundation combined with continuous professional development ensures
          both theoretical depth and practical expertise.
        </p>

        <div className="timeline">
          {timeline.map(item => (
            <div key={item.degree} className="timeline-item">
              <div className="timeline-period">
                <span className="material-icons-round">schedule</span>
                {item.period}
              </div>
              <div className="timeline-degree">{item.degree}</div>
              <div className="timeline-school">{item.school}</div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)', marginTop: '0.625rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;