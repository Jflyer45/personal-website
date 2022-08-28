import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/vrSampleImage.png'
import IMG3 from '../../assets/BAC.png'
import BAC from '../../assets/BAC.pptx'

const data = [
  {
    id:1,
    image: IMG3,
    title: "2022 Business Analytics Competition - Python Programmer Role",
    download: BAC
  },
  {
    id:2,
    image: IMG2,
    title: "Mankato VR Hospital Project",
    github: "https://github.com/MNSU-CSET/Hospital_Simulator",
    video: "https://www.youtube.com/watch?v=qQh-Kb8ev-A&ab_channel=NathanBursch"
  },
  {
    id:3,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  },
]

const createGithubButton = (dataItem) => {
  if (dataItem.github !== undefined){
    return(
      <a href={dataItem.github} className='btn' target='_blank'>Github</a>
    )
  }else{
    return(null)
  }
}

const createDownloadButton = (dataItem) => {
  if (dataItem.download !== undefined){
    return(
      <a href={dataItem.download} className='btn btn-primary' target='_blank'>Download</a>
    )
  }else{
    return(null)
  }
}

const createLiveDemoButton = (dataItem) => {
  if (dataItem.demo !== undefined){
    return(
      <a href={dataItem.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
    )
  }else{
    return(null)
  }
}

const createVidoButton = (dataItem) => {
  if (dataItem.video !== undefined){
    return(
      <a href={dataItem.video} className='btn btn-primary' target='_blank'>Demo Video</a>
    )
  }else{
    return(null)
  }
}

const createPortfolioItem = (dataItem) => {
    
    return(
      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={dataItem.image} alt="" />
          </div>
          <h3>{dataItem.title}</h3>
          {/* Call the action buttons */}
          <div className='portfolio__item-cta'>
            {createGithubButton(dataItem)}
            {createLiveDemoButton(dataItem)}
            {createVidoButton(dataItem)}
            {createDownloadButton(dataItem)}
          </div>
        </article>
    )
}

const createAllPorfolioItems = () => {
  const jsxHtml = []
  data.forEach(element => {
    jsxHtml.push(createPortfolioItem(element))
  });
  return jsxHtml
}

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {createAllPorfolioItems(data)}
      </div>
    </section>
  )
}

export default Portfolio