import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href={Resume} target="_blank" className='btn'>View Resume</a>
        <a href="#Contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA