import React, { useState } from "react";
import axios from "axios"

const Footer = () => {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [message,setMessage]=useState()

  const handlesubmit=(e)=>{
    e.preventDefault();
    const res = axios.post("http://localhost:4000/",{name,email,phone,message})
    try {
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      console.log('inserted')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className="bg-primary flex justify-around items-center font-cursive text-white">
      
      <div className="">
        <h1 className="text-2xl">Contact Us</h1>
      </div>

      <div>
        <form action="">
          <div className="pt-8">

            <div className="flex justify-center items-center gap-4 space-x-6">
            <label htmlFor="" className="">Name</label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="h-8 w-[20rem] text-black p-1 font-mono"/>

            <label htmlFor="">Email</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="h-8  w-[20rem] text-black p-1 font-mono"/>
            </div>

            <div className="flex justify-center items-center space-x-6 space-y-3">
              <label htmlFor="" className="">Phone</label>
              <input type="text" maxLength="10" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}
              className="h-8 text-black p-1 font-mono w-[20rem]"/>
              
              <label htmlFor="" className="pl-7">Message</label>
              <textarea name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} rows="3" cols="30" className="text-black p-1 font-mono w-[20rem]"/>
            </div>

            <div className="flex justify-center items-center p-5">
            <button className="bg-ghostwhite rounded-xl shadow-xl p-3 text-black" onClick={handlesubmit}>Submit</button>
            </div>

          </div>
        </form>
      </div>


    </div>
    </>
  );
};

export default Footer;
