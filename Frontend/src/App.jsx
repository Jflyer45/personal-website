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
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios'

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

// async function getBlogPosts() {
//   const requestOptions = {
//     mode: "cors",
//     headers: {'Content-Type':'application/json'}
//     };  

//     Axios.get("http://localhost:8000/api/posts")
//     .then((response) => {
//       // console.log(response);
//       return response.data
//     })
  
//     //http://localhost:8000/api/posts'    
//   }


function Blog (){
  const [value, setValue] = React.useState("");
  
  useEffect(() => {
    Axios.get("http://localhost:8000/api/posts")
    .then((response) => {
      console.log(response)
      setValue(response.data[0].text);
    })
  }, []) // Second argurment, [], tells useEffect to rerender when that object changes
  // But since it is static, it never rerenders! Perfect, we only call api once

  return(
    <div>
      <h3>TEST</h3>
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blog' element={<Blog/>}/>
        {/* Error Page, TODO */}
        <Route path='*' element={<HomePage />}/> 
      </Routes>
    </Router>
  )
}

export default app