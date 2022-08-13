import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
        <Route path='/'><HomePage/></Route>

        {/* Error Page, TODO */}
        <Route path='*'></Route>  
      </Routes>
    </Router>
  )
}

export default app