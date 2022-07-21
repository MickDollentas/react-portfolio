import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle/>
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle/>
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
            </article> 
          </div>
        </div>
        <div className="experience_tools">
          <h3>Tools</h3>
        </div>
      </div>

    </section>
  )
}

export default Experience