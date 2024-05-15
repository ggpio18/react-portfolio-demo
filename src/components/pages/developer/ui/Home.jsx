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
import { SpotifyEmbed } from 'spotify-embed'


const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Featutres/>
      <Terminal/>
      <div className="playlist flex justify-center items-center">
          <SpotifyEmbed src="https://open.spotify.com/track/0xqYLCBpCNqPDTsuwPPkfq?si=41e33bc027ca4c88" />
        </div>

      <Projectg/>
      <Cta/>
      {/* projects */}
      <Footer/>
    </div>
  )
}

export default Home
