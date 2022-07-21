import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port2.png'
import IMG2 from '../../assets/port4.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Guess The Word',
    code: 'https://github.com/MickDollentas/guess-the-word',
    demo: 'https://mickdollentas.github.io/guess-the-word/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Unplugged Retreat',
    code: 'https://github.com/MickDollentas/unplugged-retreat',
    demo: 'https://mickdollentas.github.io/unplugged-retreat/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Name Tag Generator',
    code: 'https://codesandbox.io/s/name-tag-generator-1632dv',
    demo: 'https://1632dv.csb.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sticky Notes App',
    code: 'https://codesandbox.io/s/sticky-note-ui-wtck0r',
    demo: 'https://wtck0r.csb.app/'
  },
]



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
          {
            data.map(({id, image, title, code,demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={code} className='btn' target='_blank'> Code</a>
                  <a href={demo} className='btn btn primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Portfolio