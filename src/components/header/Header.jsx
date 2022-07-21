import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Michael_Drawing.png'
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Michael Dollentas</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header