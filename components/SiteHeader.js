import React from 'react'
import capitalize from 'lodash/capitalize'

const sections = ['what', 'how', 'why', 'who', 'contact']

const SiteHeader = () =>
  <header className='SiteHeader'>
    <aside className='site-name'>
      <h1>AeroToast</h1>
      <h2>Time to disrupt your breakfast.</h2>
    </aside>
    <nav className='site-nav'>
      <ul>
        {sections.map((s, i) => (
          <li key={i}>
            <a href={`#${s}`}>
              {capitalize(s)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>

export default SiteHeader
