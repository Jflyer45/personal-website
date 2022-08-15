import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import React, { useState, useEffect} from 'react';
import './Blog.css'


function Blog (){
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("")
    let {id} = useParams()
    
    console.log(id)

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/posts/${id}`)
      .then((response) => {
        console.log(response)
        setValue(response.data.text);
        setTitle(response.data.title)
      })
    }, []) // Second argurment, [], tells useEffect to rerender when that object changes
    // But since it is static, it never rerenders! Perfect, we only call api once
  
    return(
      <div className='entirePage'>
        <h3>Nav bar lol</h3>
        <div className='content'>
            <h2 className="title">{title}</h2>
            <div className='post'>
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
            <div className='side-content'>
                <p>Side content</p>
            </div>
        </div>
      </div>
    )
}

export default Blog
