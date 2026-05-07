import React from 'react'
import '../Css/Main.css'
import { gallery } from '../gallery'
import heroHype from '../assets/image-interactive.jpg'
const Main = () => {
  return (
    <main>
      <div className='top-hero-img'>
        <img src={heroHype} alt="" />
        <div className='top-hero-desc'>
          <h2>The Leader In Interactive VR</h2>
          <p>Founded in 2011 loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital expreiences that bind to their brand.</p>
        </div>

      </div>
      <div className='bottom-gallery'>
        <h2>
          Our Creations
        </h2>
        <div className='gallery'>
          {gallery.map((item) => (
            <div className='gallery-wrapper' key={item.id}>
              <img src={item.mobileImg} alt={item.alt} />
              <p>{item.alt}</p>
            </div>
          ))}
        </div>
        
          <button className='seeAll'>See ALL</button>
        
      </div>
    </main>
  )
}

export default Main