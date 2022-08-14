import Header from '../header/Header.jsx'
import Nav from '../nav/Nav.jsx'
import About from '../about/About.jsx'
import Experience from '../experience/Experience.jsx'
import Portfolio from '../portfolio/Portfolio.jsx'
import Contact from '../contact/Contact.jsx'
import Footer from '../footer/Footer'
import './Home.css'

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

export default HomePage