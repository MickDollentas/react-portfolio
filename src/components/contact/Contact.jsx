import React from 'react'
import './contact.css'
import {TbMail} from 'react-icons/tb'
import {BsDiscord} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <TbMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5 className="email_overflow">michael.dollentas@gmail.com</h5>
            <a href="mailto:michael.dollentas@gmail.com">Message</a>
          </article>
          <article className="contact_option">
            <BsDiscord className='contact_option-icon'/>
            <h4>Discord</h4>
            <h5>Mick (Naps)#5908</h5>
            <a href="https://discord.gg/YkHRCu9V">Join My Server</a>
          </article>
          <article className="contact_option">
            <AiFillPhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>+1 951 786 8595</h5>
            <a href="tel:9517868595">Chit Chat</a>
          </article>
        </div>
        <form action="mailto:michael.dollentas@gmail.com" method="post" enctype="text/plain">
          <input type="text" name='name' placeholder='Your Full Name' required/>        
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required > </textarea>
          <div className="contact_btn">
            <button type="submit" value="Send" className='btn btn-primary'>Send Message</button>
            <input type="reset" value="Reset" className='btn'></input>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact