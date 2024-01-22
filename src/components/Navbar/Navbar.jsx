import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div id='nav'>
        <div id='navlogo'>
            <a href="#"><img src="https://i.ibb.co/NrKdybk/logo.png" alt="logo" border="0" /></a>
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
                <a href="#"><img src="https://i.ibb.co/3pqxDbM/Instagram.png" alt="Instagram" border="0" /></a>
                <a href="#"><img src="https://i.ibb.co/gSKyLkb/LinkedIn.png" alt="LinkedIn" border="0" /></a>
                <a href="#"><img src="https://i.ibb.co/WHZkrh9/TwitterX.png" alt="TwitterX" border="0" /></a>
            </div>
        </div>
    </div>
  )
}
