import React from 'react'
import '../Css/Main.css'
import { gallery } from '../gallery'
import { useWindowSize } from '@uidotdev/usehooks'
import heroHype from '../assets/image-interactive.jpg'
import heroWeb from '../assets/image-interactive-w.jpg'
const Main = () => {

  const { width } = useWindowSize()
  return (
    <main>
      <div className='top-hero-img'>
        <img src={width >= 768 ? heroWeb : heroHype} alt="" />
        <div className='top-hero-desc'>
          <div className='top-hero-desc-wrapper'>
            <h2>The Leader In Interactive VR</h2>
            <p>Founded in 2011 loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital expreiences that bind to their brand.</p>
          </div>
        </div>
      </div>
      <div className='bottom-gallery'>
        <h2>
          Our Creations
        </h2>
        <div className='gallery'>
          {gallery.map((item) => (
            <div className='gallery-wrapper' key={item.id}>
              <img src={width >= 768 ? item.webImg :  item.mobileImg} alt={item.alt} />
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