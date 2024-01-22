import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div id='nav'>
        <div id='navlogo'>
            <img src="https://ibb.co/dtDw5x3" alt="Logo"/>
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
                <img className="NavSocialIcon" src="https://ibb.co/F5MQS10" alt="Instagram" />
                <img className="NavSocialIcon" src="https://ibb.co/v3n160C" alt="LinkedIn" />
                <img className="NavSocialIcon" src="https://ibb.co/fXfk3gR" alt="Twitter" />
            </div>
        </div>
    </div>
  )
}
