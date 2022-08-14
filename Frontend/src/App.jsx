import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import Blog from "./Blog"
import HomePage from './components/home/HomePage'

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/' element={<HomePage/>}/>

        {/* Blog front page */}
        {/* <Route path='/blog' element={<Blog/>}/> */}

        {/* Error Page, TODO */}
        <Route path='*' element={<HomePage />}/> 
      </Routes>
    </Router>
  )
}

export default app