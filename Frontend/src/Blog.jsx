import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import React, { useState, useEffect} from 'react';
import './Blog.css'
import BlogNav from './BlogNav';

function dateFormater(rawDate) {
  let year = rawDate.slice(0, 4)
  let month = rawDate.slice(5, 7)
  let day = rawDate.slice(8, 10)

  return `${month}/${day}/${year}`
}

function Blog (){
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("")
    const [mainImage, setMainImage] = useState("")
    const [date, setDate] = useState("")
    let {id} = useParams()

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/posts/${id}`)
      .then((response) => {
        setValue(response.data.text);
        setTitle(response.data.title);
        setMainImage(response.data.content[0].link);
        setDate(dateFormater(response.data.createdAt))
      })
    }, []) // Second argurment, [], tells useEffect to rerender when that object changes
    // But since it is static, it never rerenders! Perfect, we only call api once
  
    return(
      <div className='blogEntirePage'>
        <BlogNav />
        <div className='content'>
            <div className='post'>
                <img src={mainImage}></img>
                <small>{date}</small>
                <h2 className="title">{title}</h2>
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
            <div className='side-content'>
                
            </div>
        </div>
      </div>
    )
}

export default Blog
