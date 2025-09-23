import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonialss'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState]=useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
       <Title subTitle='Our PROGRAM' title='What we Offer' id='program' />
       <Programs />
       <About setPlayState={setPlayState} />
       <Title subTitle='Gallery' title='Campus Photos' id='campus' />
       <Campus />
       <Title subTitle='TESTIMONIALS' title='What Student Says' id='testimonials' />
       <Testimonials />
       <Title subTitle='Contact Us' title='Get In Touch' id='contact' />
       <Contact />
       <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
     
    </div>
  )
}

export default App
