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
    let articleLink = null
    try{
        articleLink = articleData["content"][0]["link"]
    } catch{
        
    }

    
    let imageBackgroundStyle = "--bg-img: url('" + articleLink +  "')"

    return(
        // <article>
        //     <a href={titleLinkFormatter(articleData.title)}>
        //         <img src={articleLink} />
        //         <p>{articleData["title"]}</p>
        //     </a>
        // </article>v

        <a className="card" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/" style={{"backgroundImage": "linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), url(" + articleLink + ")"}}>
            <div>
                <h1>Basic types of HTML tags</h1>
                <p>Learn about some of the most common HTML tags…</p>
                <div class="date">9 Oct 2017</div>
                <div class="tags">
                <div class="tag">HTML</div>
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