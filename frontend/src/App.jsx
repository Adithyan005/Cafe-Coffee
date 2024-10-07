import Aos from 'aos'
import React from 'react'
import { useEffect } from 'react'
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import Banner from './Components/Banner/Banner';
import Appstore from './Components/Appstore/Appstore';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
const App = () => {
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:700,
            easing:"ease-in",
            delay:100,
        })
    })
  return (
    <div>
      <Navbar/>
      <Home/>
      <Service/>
      <Banner/>
      <Appstore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
