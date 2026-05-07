import React, { useEffect } from 'react'
import { useToggle, useWindowSize } from '@uidotdev/usehooks'
import logo from '../assets/iconPhotos/logo.svg'
import hamburger from '../assets/iconPhotos/icon-hamburger.svg'
import closeIcon from '../assets/iconPhotos/icon-close.svg'
import bgImg from '../assets/image-hero.jpg'
import bgWeb from '../assets/image-hero-w.jpg'
import '../Css/Header.css'
const Header = ({ Navlink }) => {


  const [isMenuOpen, toggleMenu] = useToggle()
  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 768 && isMenuOpen) {
      toggleMenu(false) // Ekran 768px'den büyükse ve menü açıksa menüyü kapat
    }
  }, [width, isMenuOpen, toggleMenu])

  return (
    <div className='header-wrapper'>
      <div className='background-img'>

        <img src={width >= 768 ? bgWeb : bgImg} alt="Hero Background" />
      </div>
      <header className="header">

        <div className="logo">

          <a href="/">
            <img src={logo} alt="Loopstudios logo" />
          </a>
          
        </div>
        <button className="hamburger-btn" onClick={() => toggleMenu()} aria-expanded={isMenuOpen} aria-label="Toggle menu">
          <img src={isMenuOpen ? closeIcon : hamburger} alt={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"} />
        </button>


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
             
        <h1>Immersive experiences that deliver</h1>
       
      </div>
    </div>
  )
}

export default Header