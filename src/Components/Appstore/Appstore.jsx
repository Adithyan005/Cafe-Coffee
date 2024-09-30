import React from 'react'
import appbg from "../../assets/imgs/20.jpg"
import ios from "../../assets/imgs/14.png"
import playstore from "../../assets/imgs/17.jpg"

const Appstore = () => {
  const backgrd={
    backgroundImage:`url(${appbg})`,
    backgroundPostion:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"350px"
    
  }
  return (
    <>
    <div style={backgrd} className='py-14'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className='space-y-5 max-w-xl mx-auto '>
            <h1 className='text-2xl text-center text-white/90 sm:text-4xl sm:text-left font-semibold pl-3 line-clamp-3'>Coffee Cafe is available for Android and IOS</h1>
            
            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
              
              <a href="#"><img src={ios} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '/></a>

              <a href="#"><img src={playstore} alt="" className='p-1 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/></a>
          
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appstore
