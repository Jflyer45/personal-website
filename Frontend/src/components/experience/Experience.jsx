import React from 'react'
import './Experience.css'
import {AiFillHtml5} from "react-icons/ai"
import {IoLogoJavascript} from "react-icons/io"
import {DiReact} from "react-icons/di"
import {DiCss3} from "react-icons/di"
import {BsFillBootstrapFill} from "react-icons/bs"
import {FaNode} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"
import {FiServer} from "react-icons/fi"
import {SiMongodb} from "react-icons/si"
import {DiPython} from "react-icons/di"
import {BsGithub} from "react-icons/bs"
import {BsHash} from "react-icons/bs"
import {FaJava} from "react-icons/fa"
import {BsGraphUp} from "react-icons/bs"
import {DiLinux} from "react-icons/di"

const createArticle = (title, icon) => {
  return(
    <article className='experience__detials'>
      {icon}
      <div>
        <h4>{title}</h4>
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
            {createArticle("HTML", <AiFillHtml5 className='icon'/>)}
            {createArticle("Javascript", <IoLogoJavascript className='icon'/>)}
            {createArticle("React", <DiReact className='icon'/>)}
            {createArticle("CSS", <DiCss3 className='icon'/>)}
            {createArticle("Bootstrap", <BsFillBootstrapFill className='icon'/>)}
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            {createArticle("Node.js", <FaNode className='icon'/>)}
            {createArticle("MySQL", <GrMysql className='icon'/>)}
            {createArticle("Express", <FiServer className='icon'/>)}
            {createArticle("MongodDB", <SiMongodb className='icon'/>)}
          </div>
        </div>

        <div className="experience__backend">
        <h3>Other Experience</h3>
          <div className="experience__content">
            {createArticle("Python", <DiPython className='icon'/>)}
            {createArticle("Version Control", <BsGithub className='icon'/>)}
            {createArticle("C#", <BsHash className='icon'/>)}
            {createArticle("Java", <FaJava className='icon'/>)}
            {createArticle("D3/Data Visualization", <BsGraphUp className='icon'/>)}
            {createArticle("Linux", <DiLinux className='icon'/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience