import React from 'react'
import '../Css/Footer.css'
import logo from '../assets/iconPhotos/logo.svg'
import facebookIcon from '../assets/iconPhotos/icon-facebook.svg'
import instagramIcon from '../assets/iconPhotos/icon-instagram.svg'
import pinterestIcon from '../assets/iconPhotos/icon-pinterest.svg'
import twitterIcon from '../assets/iconPhotos/icon-twitter.svg'


const Footer = ({ Navlink }) => {

const links =  [facebookIcon,instagramIcon,pinterestIcon,twitterIcon]

  return (
    <footer>
      <div className='footer-top'>
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
        <div className='nav-link-footer'>
          <ul>
            {Navlink.map((e) => (

              <li key={e}>
                <a href="">{e}</a>
              </li>

            ))}
          </ul>
        </div>
      </div>
      <div className='social-links'>
           
              {links.map((e)=>(
                <a key={e} href="#">
                  <img src={e} alt="link" />
                </a>
              ))}
            
      </div>
      <p className='footer-bottom-p'>2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer