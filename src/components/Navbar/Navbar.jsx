import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div id='nav'>
        <div id='navlogo'>
            <img src="src\assets\logo.png" alt="Logo"/>
        </div>
        <div id='navItems'>
            <div id='Items'>
                <ul className='itemlist'>
                    <li className='itemlistText'>Home</li>
                    <li className='itemlistText'>Service</li>
                    <li className='itemlistText'>About us</li>
                    <li className='itemlistText'>Contact us</li>
                </ul>
            </div>
            <div id='NavSocialIcons'>
                <img className="NavSocialIcon" src="src\assets\Instagram.png" alt="Instagram" />
                <img className="NavSocialIcon" src="src\assets\LinkedIn.png" alt="LinkedIn" />
                <img className="NavSocialIcon" src="src\assets\TwitterX.png" alt="Twitter" />
            </div>
        </div>
    </div>
  )
}
