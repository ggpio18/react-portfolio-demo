import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import About from './about/About'
import Projects from './project/Projects'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home
