import PlanetGraphic from './PlanetGraphic'

const stats = [
  { value: '3.87', label: 'Current GPA' },
  { value: '4/8', label: 'Semesters Completed' },
  { value: '14+', label: 'Certifications' },
  {value: '10+',label: 'Projects'},
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <PlanetGraphic />

      <div className="hero-content">
        {/* No profile photo was provided, so this is an initials badge
            instead of an <img> - swap it for a real photo later by
            replacing this div with <img src="/your-photo.jpg" .../>
            once you add the file to /public. */}
        <div className="avatar-badge hero-fade" style={{ animationDelay: '0s' }}>
          <div className="avatar-circle">AF</div>
          <span className="">BULC'28</span>
        </div>

        <span className="availability-badge hero-fade" style={{ animationDelay: '0.1s' }}>
          Open to Internship & Full-Time Opportunities
        </span>

        <h1 className="hero-fade hero-gradient-text" style={{ animationDelay: '0.2s' }}>
          Areeba Fatima
        </h1>
        <p className="role hero-fade" style={{ animationDelay: '0.3s' }}>
          Aspiring Full Stack Developer&nbsp;<span className="blink-cursor">_</span>
        </p>
        <p className="tagline hero-fade" style={{ animationDelay: '0.4s' }}>
          AI/ML Enthusiast &nbsp;||&nbsp; SQA &nbsp;||&nbsp; Turning ideas into
          digital solutions through Artificial Intelligence, Software
          Development, UI/UX Design, and Software Quality Assurance.
        </p>

        <div className="hero-buttons hero-fade" style={{ animationDelay: '0.5s' }}>
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Get in Touch</a>
        </div>

        <div className="hero-buttons hero-fade" style={{ marginTop: '16px', animationDelay: '0.6s' }}>
         
          <a
            className="btn btn-outline"
            href="/Areeba_Fatima_Resume.pdf"
            download="Areeba_Fatima_Resume.pdf"

          >
            Download Resume

          </a>
        </div>

        <div className="hero-stats hero-fade" style={{ animationDelay: '0.7s' }}>
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
