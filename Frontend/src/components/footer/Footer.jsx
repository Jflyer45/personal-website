import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thanks for visiting!</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jeremy-fischer/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Jflyer45" target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/jflyer45/'><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer