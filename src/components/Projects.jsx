const projects = [
  {
    title: 'AI Chatbot',
    stack: 'AI | Python',
    // Placeholder until real links are added - see the "#" note below.
    github: 'https://github.com/AreebaFatima-101/DecodeLabs-Internship/tree/main/Project-1-Rule-Based-Chatbot',
    
    points: [
      'Developed an AI-based chatbot in C++ capable of text-based conversations.',
      'Designed a response-handling system to process queries and generate replies.',
      'Integrated decision-making logic and conditional statements for intelligent interactions.',
      'Improved problem-solving skills through debugging, testing, and optimizing.',
    ],
  },
  {
    title: 'Event Planner & Organizer',
    stack: 'SQL | Node.js | HTML & CSS | Design',
    github: 'https://github.com/AreebaFatima-101/Event-Planner-Organizer-Management-System',
    
    points: [
      'Built a frontend-based Event Planner system integrated with an SQL database.',
      'Designed user-friendly interfaces for registration, scheduling, and participant management.',
      'Created and managed SQL databases for event, user, and booking records.',
      'Implemented SQL queries for insert, retrieve, update, and delete operations.',
    ],
  },
  {
    title: 'Airline Reservation Systems',
    stack: 'C++ | OOP | DSA ',
    github: 'https://github.com/AreebaFatima-101/Project-Airline-Reservation-System',
    
    points: [
      'Develop a project using c++ and object oriented programming',
      'An efficient platform dealing with all types of Reservations',
      'System Allows to search for flight, tickets & bokings',
    
    ],
  },
  {
    title: 'Assembly Language Calculator',
    stack: '| RARS |',
    github: 'https://github.com/AreebaFatima-101/Assembly-Language-Calculator',
    
    points: [
      'This Project implements a calculator using assembly language.',
      'Addition,Subtraction,Multiplication,Division',
      'Power Modulus,Previous Result Usage',
      'User Friendly Menu-Driven Interface',
    ],
  },
  {
    title: 'Maize',
    stack: 'C++ | OOP | DSA ',
    github: 'https://github.com/AreebaFatima-101/MAIZE-game',
    
    points: [
      'A game Develop using Dsa to implement Coding into gaming',
      'Develop and enhance my skills in algo thinking & logical optimization',
    
    ],
  },
{
  title: 'Consistly.ai Manual Testing',
stack: '| Manual Testing | Test Cases | Bug Reporting | QA Documentation |',
github: 'https://github.com/AreebaFatima-101/Zee-Outsourcing-SQA-internship',

points: [
  'Performed comprehensive manual testing of the Consistly.ai web application.',
  'Designed and executed test cases for multiple modules and user workflows.',
  'Identified, documented, and reported bugs with detailed reproduction steps.',
  'Prepared test reports, checklists, and validation documentation.',
],
},
{
title: 'AI Recommendation System',
stack: '| Python | Machine Learning | Recommendation Engine | Data Analysis |',
github: 'https://github.com/AreebaFatima-101/DecodeLabs-Internship/tree/main/Project-3-AI-Recommendation-System',

points: [
  'Developed an AI-powered recommendation system using Python.',
  'Implemented recommendation logic to suggest relevant items based on user preferences.',
  'Utilized data processing and filtering techniques to improve recommendation accuracy.',
  'Demonstrated practical applications of Artificial Intelligence and machine learning concepts.',
],
},
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow">Selected Work</span>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              key={project.title}
            >
              <h3>{project.title}</h3>
              <p className="project-stack">{project.stack}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* github/demo are "#" placeholders right now - swap them
                  for the real URLs in the data array above once the
                  repos/deployments exist. Nothing else needs to change. */}
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Code
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
