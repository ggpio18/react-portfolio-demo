import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import About from './about/About'
import Projects from './project/Projects'
import Footer from './footer/Footer'
import Featutres from './features/Featutres'
import Terminal from './terminal/Terminal'
import Projectg from './project gallery/Projectg'
import Cta from './cta/Cta'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Featutres/>
      <Terminal/>
      <Projectg/>
      <Cta/>
      {/* projects */}
      <Footer/>
    </div>
  )
}

export default Home
