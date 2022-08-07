import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/me.png'
import IMG3 from '../../assets/portfolio1.png'
import IMG4 from '../../assets/portfolio1.png'
import IMG5 from '../../assets/portfolio1.png'
import IMG6 from '../../assets/portfolio1.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  },
  {
    id:2,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  },
  {
    id:3,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  },
  {
    id:4,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  },
  {
    id:5,
    image: IMG1,
    title: "CIS 122 Data Structures Final Group Project",
    github: "https://github.com/Jflyer45/CIS122-Project",
    demo: "https://jflyer45.github.io/CIS122-Project/"
  }
]

const createPortfolioItem = (dataItem) => {
    return(
      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={dataItem.image} alt="" />
          </div>
          <h3>{dataItem.title}</h3>
          {/* Call the action buttons */}
          <div className='portfolio__item-cta'>
            <a href={dataItem.github} className='btn' target='_blank'>Github</a>
            <a href={dataItem.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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