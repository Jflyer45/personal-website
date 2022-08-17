import React from 'react';
import Logo from "./assets/jeremyfischer-info-logo-final.png"

function BlogNav() {
    return (
        <div className='BlogNav'>
            <a href='/blog'>
                <img src={Logo} alt="" className='logo'/>
            </a>
            <ul className='menu-buttons'>
                <li><a href="default.asp">Home</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>  
    )
}

export default BlogNav

