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

                <img src="https://ibb.co/4RvNSTZ" alt="Facebook"/>

                <img src="https://ibb.co/q9KS0Mh" alt="Instagram"/>

                <img src="https://ibb.co/Jj8WZVS" alt="Github"/>

                <img src="https://ibb.co/XzckHH9" alt="Linkedin"/>

                <img src="https://ibb.co/3SsRTnK" alt="Discord"/>
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
