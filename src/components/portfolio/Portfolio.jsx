import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port2.png'
import IMG2 from '../../assets/port4.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port1.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Guess The Word"/>
          </div>
          <h3>Guess The Word</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/MickDollentas/guess-the-word" className='btn' target='_blank'>Code</a>
            <a href="https://mickdollentas.github.io/guess-the-word/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Unplugged Retreat"/>
          </div>
          <h3>Unplugged Retreat</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/MickDollentas/unplugged-retreat" className='btn' target='_blank'>Code</a>
            <a href="https://mickdollentas.github.io/unplugged-retreat/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Name Tag Generator"/>
          </div>
          <h3>Name Tag Generator</h3>
          <div className="portfolio_item-cta">
            <a href="https://codesandbox.io/s/name-tag-generator-1632dv" className='btn' target='_blank'>Code</a>
            <a href="https://1632dv.csb.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Sticky Notes"/>
          </div>
          <h3>Sticky Notes App</h3>
          <div className="portfolio_item-cta">
            <a href="https://codesandbox.io/s/sticky-note-ui-wtck0r" className='btn' target='_blank'>Code</a>
            <a href="https://wtck0r.csb.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}


export default Portfolio