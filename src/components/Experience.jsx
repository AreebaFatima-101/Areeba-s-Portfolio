const experience = [
  {
  role: 'Full Stack (MEAN) & AI Intern',
  company: 'Directorate of Information Technology, Government College University (GCU), Lahore',
  date: 'July 2026 - Present',
  points: [
    'Developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
    'Building and integrating AI-powered features into web-based solutions.',
    'Working on frontend and backend development, database management, and API integration.',
    'Collaborating with mentors and team members to develop innovative software solutions and enhance technical skills.',
  ],
},
  {
    role: 'UI/UX Intern',
    company: 'FlyRank',
    date: 'June 2026 - Present',
    points: [
      'Designing user-friendly interfaces and creating wireframes.',
      'Improving user experience across digital product design projects.',
      'Collaborating with the team on design decisions and iterations.',
    ],
  },
  {
    role: 'Software Quality Assurance (SQA) Intern',
    company: 'Zee Outsourcing UK',
    date: 'June 2026 - Present',
    points: [
      'Performing manual testing and preparing test cases.',
      'Identifying bugs and reporting defects.',
      'Ensuring software quality standards are met.',
    ],
  },
  {
    role: 'Graphics Designer / Core Member',
    company: 'AWS Cloud Student Builder Group (BULC)',
    date: '03/26 - Present',
    points: [
      'Designed promotional materials, social media content, and event branding.',
      'Assisted in organizing cloud computing workshops and seminars.',
      'Collaborated with cross-functional teams to promote AWS cloud technologies.',
    ],
  },
  {
    role: 'AI Intern (Remote)',
    company: 'DecodeLabs',
    date: '06/26 - 07/26',
    points: [
      'Gained hands-on experience with artificial intelligence concepts and real-world applications.',
      'Assisted in AI-related projects, research, and problem-solving tasks.',
      'Collaborated with mentors, demonstrating strong communication and adaptability.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <span className="eyebrow">Where I've Worked</span>
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {experience.map((job, i) => (
            <div
              className="experience-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              key={job.role + job.company}
            >
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p className="date">{job.date}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
