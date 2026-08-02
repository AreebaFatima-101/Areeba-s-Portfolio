import { FaShieldAlt, FaBriefcase, FaSitemap, FaCube } from 'react-icons/fa'

// Branded skills use real image files from /public/logos/ instead of
// an icon library - avoids the react-icons dependency crashes we kept
// hitting. `logo` = image path, `Icon` = react-icons component
// (only used for the 4 generic, non-branded skills).
const skills = [
  { label: 'Java', logo: '/logos/java.png' },
  { label: 'Python',logo: '/logos/python.png'  },
  { label: 'Node.Js',logo: '/logos/node.js.png'  },
  { label: 'HTML', logo: '/logos/html5.png' },
  { label: 'CSS', logo: '/logos/css3.png' },
  { label: 'SQL', logo: '/logos/mysql.png' },
  { label: 'Power BI / Data Analytics', logo: '/logos/powerbi.png' },
  { label: 'Graphics Design (Canva)', logo: '/logos/canva.png' },
  { label: 'UI/UX (Figma)', logo: '/logos/figma.png' },
  { label: 'C++', logo: '/logos/c++.png' },
  { label: 'React',logo: '/logos/react.png'  },
]

const analyticalSkills = [
  'Data Evaluation & Validation',
  'Software Quality & Assurance',
  'Structured Analysis & Reasoning',
  'Development and Design',
]

export default function Skills() {
  const total = skills.length
  const radius = 200

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <span className="eyebrow">Tech Stack</span>
        <h2 className="section-title">
          My <span className="hero-gradient-text">Skills</span>
        </h2>

       <div className="orbit-wrap reveal">
  <div className="orbit-sphere" />
  <div className="orbit-group">

            {skills.map(({ label, Icon, logo, color }, i) => {
              const angle = (360 / total) * i
              return (
                <div
                  className="orbit-item"
                  key={label}
                  style={{ transform: `rotate(${angle}deg) translate(${radius}px)` }}
                  title={label}
                >
                  <div
                    className="orbit-icon"
                    style={{ '--start-angle': `${-angle}deg`, color: color || undefined }}
                  >
                    {logo ? (
                      <img src={logo} alt={label} className="orbit-logo-img" />
                    ) : (
                      <Icon size={20} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="skill-card reveal" style={{ marginTop: '100px' }}>
          <h3>Analytical & Evaluation Skills</h3>
          <div className="skill-tags">
            {analyticalSkills.map((tag) => (
              <span className="skill-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}