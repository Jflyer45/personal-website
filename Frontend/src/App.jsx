import React, { useEffect } from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import Blog from "./Blog"

const HomePage = () =>{
  return(
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  )
}

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blog/:id' element={<Blog/>}/>

        {/* Blog front page */}
        {/* <Route path='/blog' element={<Blog/>}/> */}

        {/* Error Page, TODO */}
        <Route path='*' element={<HomePage />}/> 
      </Routes>
    </Router>
  )
}

export default app