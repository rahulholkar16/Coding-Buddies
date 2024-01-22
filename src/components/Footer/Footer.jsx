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

                <img src="src\assets\Vector.png" alt="Facebook"/>

                <img src="src\assets\skill-icons_instagram.png" alt="Instagram"/>

                <img src="src\assets\skill-icons_github-dark.png" alt="Github"/>

                <img src="src\assets\skill-icons_linkedin.png" alt="Linkedin"/>

                <img src="src\assets\skill-icons_discord.png" alt="Discord"/>
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
