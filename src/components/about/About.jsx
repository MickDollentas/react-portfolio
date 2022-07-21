import React from 'react'
import './about.css'
import ME from '../../assets/Michael_Drawing.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <p>
        A front-end developer based in Diamond Bar, California. I started my journey in 2020 and haven't looked back since. I pride myself in clean and creative coding. When I'm not coding I'm chasing around my 3 year old son or playing video games.
        </p>
      </div>
    </section>
  )
}

export default About