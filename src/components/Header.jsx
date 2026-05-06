import React from 'react'
import { useToggle } from '@uidotdev/usehooks'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import bgImg from '../assets/images/mobile/image-hero.jpg'
import '../Css/Header.css'
const Header = ({ Navlink }) => {


  const [isMenuOpen, toggleMenu] = useToggle()

  return (
    <div className='header-wrapper'>
      <div className='background-img'>

        <img src={bgImg} alt="" />
      </div>
      <header className="header">

        <div className="logo">

          <a href="/">
            <img src={logo} alt="Loopstudios logo" />
          </a>
          
        </div>
        <div>
          <button className="hamburger-btn" onClick={() => toggleMenu()} aria-expanded={isMenuOpen} aria-label="Toggle menu">
            <img src={isMenuOpen ? closeIcon : hamburger} alt={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"} />
          </button>
        </div>


        <nav className={` ${isMenuOpen? "open" :"" }`}>
          

            <ul>
              {Navlink.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          
        </nav>

      </header>

      <div className="hero-content">
             <div className='wrapper-content'> 
        <h1>Immersive experiences that deliver</h1>
        </div>  
      </div>
    </div>
  )
}

export default Header