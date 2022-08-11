import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {useState} from 'react';
// Icons
import {MdOutlineEmail} from "react-icons/md"
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  const [nameFeild, setNameFeild] = useState("")
  const [emailFeild, setEmailFeild] = useState("")
  const [textFeild, setTextFeild] = useState("")
  const [button, setButton] = useState("")

  // Set up email function
  const form = useRef();
  const sendEmail = (e) => {
    // Send email
    e.preventDefault();
    emailjs.sendForm('service_527kpwb', 'template_q91f14c', form.current, 'B-T2fGk65yyHTD7im')

    // Clear text
    setNameFeild("")
    setEmailFeild("")
    setTextFeild("")
    setButton("disabled")
  }

  return (
    <section id='Contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jeremyfischer52@gmail.com</h5>
              <a href="mailto:jeremyfischer52@gmial.com">Send an email</a>
            </article>
            <article className='contact__option'>
              <BsLinkedin className='contact__option-icon'/>
              <h4>Linkedin</h4>
              <a href="https://www.linkedin.com/in/jeremy-fischer/" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <AiOutlinePhone className='contact__option-icon'/>
              <h4>Phone</h4>
              <a>Please request it using the form</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required value={nameFeild} onChange={event => setNameFeild(event.target.value)}/>
            <input type="email" name='email' placeholder='Your Email' required value={emailFeild} onChange={event => setEmailFeild(event.target.value)}/>
            <textarea name="message" id="message" placeholder='Your Message' required cols="30" rows="5" value={textFeild} onChange={event => setTextFeild(event.target.value)}></textarea>
            <button type='submit' className="btn btn-primary" disabled={button}>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact