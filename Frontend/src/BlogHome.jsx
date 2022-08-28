import React, { useEffect, useState } from 'react'
import BlogNav from './BlogNav';
import './BlogHome.css'
import Axios from 'axios'


function createArticleCard(articleData){
    console.log(articleData)
    let articleLink = null
    try{
        articleLink = articleData["content"][0]["link"]
    } catch{
        
    }

    return(
        <article>
            <img src={articleLink} />
            <p>{articleData["title"]}</p>
        </article>
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