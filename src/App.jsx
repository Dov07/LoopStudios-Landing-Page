import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {

const Navlink = ["About", "Careers", "Event", "Products", "Support"]


  return (
    <div >
      <Header Navlink={Navlink}/>
      <Main/>
      <Footer Navlink={Navlink}/>
    </div>
  )
}

export default App