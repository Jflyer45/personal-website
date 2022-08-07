import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const createArticle = (title, experienceLevel) => {
  return(
    <article className='experience__detials'>
      <BsPatchCheckFill className='icon'/>
      <div>
        <h4>{title}</h4>
        <small className='text-light'>{experienceLevel}</small>
      </div>
    </article>
  )
}


const Experience = () => {
  return (
    <section id='Experience'>
      <h2>My Experience</h2>
      
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {createArticle("HTML", "Experienced")}
            {createArticle("Javascript", "Intermediate")}
            {createArticle("React", "Basic")}
            {createArticle("CSS", "Basic")}
            {createArticle("Bootstrap", "Basic")}
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            {createArticle("Node.js", "Experienced")}
            {createArticle("MySQL", "Intermediate")}
            {createArticle("Express", "Intermediate")}
            {createArticle("Java", "Intermediate")}
            {createArticle("MongodDB", "Basic")}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience