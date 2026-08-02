const certifications = [
  { name: 'Basics of Microsoft Power BI', org: 'UniAthena' },
  { name: 'TATA - GenAI Powered Data Analytics', org: 'Forage' },
  { name: 'Graphics Designing & Marketing', org: 'CANVA' },
  { name: 'Digital Transformation in Power Sector', org: 'IEEE' },
  { name: 'AWS IAM Security Workshop', org: 'AWS Student Builder Group BULC' },
  { name: 'Cyber Security', org: 'Deloitte Australia' },
  { name: 'Data Analytics', org: 'Deloitte Australia' },
  { name: 'Entrepreneurship Workshop', org: 'IEEE Computer Society' },
  { name: 'StartUp Competition', org: 'Bahria University Lahore Campus' },
  { name: 'MasterCard - Cyber Security (CTH)', org: 'Forage' },
  { name: 'Artificial Intelligence Internship', org: 'DecodeLabs' }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <span className="eyebrow">Certifications & Honors</span>
        <h2 className="section-title">Credentials</h2>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div
              className="cert-item reveal"
              style={{ transitionDelay: `${(i % 4) * 0.06}s` }}
              key={cert.name}
            >
              <h4>{cert.name}</h4>
              <span>{cert.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
