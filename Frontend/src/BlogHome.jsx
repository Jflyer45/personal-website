import React, { useEffect, useState } from 'react'
import BlogNav from './BlogNav';
import './BlogHome.css'
import Axios from 'axios'

function dateFormater(rawDate) {
    let year = rawDate.slice(0, 4)
    let month = rawDate.slice(5, 7)
    let day = rawDate.slice(8, 10)
  
    return `${month}/${day}/${year}`
}

function titleLinkFormatter(title){
    return "/blog/" + title.replaceAll(" ", "-")
}

function createArticleCard(articleData){
    console.log(articleData)
    let articleContentLink = null
    try{
        articleContentLink = articleData["content"][0]["link"]
    } catch{
        
    }
    let articleLink = titleLinkFormatter(articleData.title)
    return(
        <a className="card" href={articleLink} style={{"backgroundImage": "linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), url(" + articleContentLink + ")"}}>
            <div>
                <h1>{articleData.title}</h1>
                <p>Learn about some of the most common HTML tags…</p>
                <div class="date">{dateFormater(articleData.createdAt)}</div>
                <div class="tags">
                    {/* <div class="tag">HTML</div> */}
                </div>
            </div>
        </a>
    )
}

function createArticleCards(articles){
    let html = []
    articles.forEach(article => {
        html.push(createArticleCard(article))
    })
    console.log(html)
    return html
}

function BlogHome() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/posts/`)
        .then((response) => {
            setArticles(response.data)
        })
    }, [])

    return(
    <div className='blogEntirePage'>
        <BlogNav />
        <div className='blogHome'>
            <div className='articlePanel'>
                {createArticleCards(articles)}
            </div>
            <div className='side-content'>
                <p>sadf</p>    
            </div>
        </div>
    </div>
    )
} 

export default BlogHome