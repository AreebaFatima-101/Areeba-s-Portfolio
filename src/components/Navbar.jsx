import { useState } from 'react'

// useState here just tracks whether the mobile menu is open or closed.
// On desktop, CSS keeps the menu visible regardless of this state
// (see the @media rule in index.css) - the toggle only matters on
// small screens.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">Areeba💜</span>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

