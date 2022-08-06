import React from 'react'
import './About.css'
import ME from '../../assets/me2.png'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id='About'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about__cards'>
            {/* Article for each box */}
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year as a Software Engineer Intern</small>              
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year as a Software Engineer Intern</small>              
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year as a Software Engineer Intern</small>              
            </article>
          </div>
          {/* Content Below the cards */}
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis voluptatum nemo modi magnam? Dolorum dolore ab, 
              quod magni hic ipsum laudantium vel! Eius consectetur 
              officiis id nam. Quod, animi corporis.
            </p>

            <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About