import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import ReactTypingEffect from 'react-typing-effect';  //https://www.npmjs.com/package/react-typing-effect


const ReactTypingEffectDemo = () => {
  const typeAndDeleteSpeed = 40;
  return (
    <>
      <ReactTypingEffect
        text={["Software Engineer", "Economic Research Co-author", "Athlete"]}
        speed={typeAndDeleteSpeed}
        eraseSpeed={typeAndDeleteSpeed}
        eraseDelay={2000}
        typingDelay={10}
      />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jeremy Fischer</h1>
        <h5 className='text-light'><ReactTypingEffectDemo /></h5>
        
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header