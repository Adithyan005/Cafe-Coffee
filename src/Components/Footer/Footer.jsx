import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa'

const footerlink=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },

]

const Footer = () => {
  return (
   <>
   <div>
    <div className='flex'>
    <div className='grid grid-cols-2'>
        <div className='justify-center items-center p-6'>
    <h3 className='text-2xl font-cursive font-bold text-primary'>Contact Us</h3>
    </div>
    <div>
        <form>
            <div className='flex gap-5'>
            <div className=''>
            <label htmlFor="" className='p-4'>Name</label>
            <input type="text" className='box-content w-[16rem] h-4 p-2' name='name' />
            </div>
            <div className=''>
            <label htmlFor="" className='p-4'>Email</label>
            <input type="email" className='box-content box-border border-black-5 w-[16rem] h-4 p-2'/><br />
            </div>
            </div>
            <div>
            <label htmlFor="" className='p-4'>How can we help you?</label><br />
            <input type="textarea" className='box-content w-[20rem] h-10 p-2'/>
            </div>
        </form>
    </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Footer
