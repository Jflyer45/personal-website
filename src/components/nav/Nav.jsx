import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#About"><AiOutlineUser/></a>
      <a href="#Experience"><BiBook/></a>
      <a href="#Services"><RiServiceLine/></a>
      <a href="#Contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav