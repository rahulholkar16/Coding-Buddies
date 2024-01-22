import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left-div'>
            <div className="footer-heading">Email</div>
            <div className="text-white text-xl font-normal font-['ABeeZee'] footer-paragrap">Codingbuddies@gmail.com</div>
        </div>
        <div className='footer-center-div'>
            <div className='icons'>

                <a href="#"><img src="https://i.ibb.co/MkwN1VD/Vector.png" alt="Vector" border="0" /></a>

                <a href="#/"><img src="https://i.ibb.co/L6mFQzB/skill-icons-instagram.png" alt="skill-icons-instagram" border="0" /></a>

                <a href="#"><img src="https://i.ibb.co/0y1p5Tz/skill-icons-github-dark.png" alt="skill-icons-github-dark" border="0" /></a>

                <a href="#"><img src="https://i.ibb.co/TH9qyyZ/skill-icons-linkedin.png" alt="skill-icons-linkedin" border="0" /></a>

                <a href="#"><img src="https://i.ibb.co/8PBYmHk/skill-icons-discord.png" alt="skill-icons-discord" border="0" /></a>
                </div>

            <div className="footer-center-txt">Copyright © www.Website.com all rights are reserved!!!</div>
        </div>
        <div className='footer-right-div'>
            <div className="footer-heading">Address</div>
            <div className="footer-paragrap">Knowledge Park 2, Greater Noida</div>
        </div>
    </div>
  )
}
