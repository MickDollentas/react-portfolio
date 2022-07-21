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
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
                <small className='text-light'>Expert</small>
                </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article> 
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_tools">
          <h3>Tools</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Text Editor</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>FTP Client</h4>
                <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className='experience_details-icon'/>
              <div>
                <h4>CodeSandbox</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience