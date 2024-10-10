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
      <div className="bg-primary">
        <div className="flex">
          <div className="grid grid-cols-2">
            <div className="justify-center items-center p-6">
              <h3 className="text-3xl font-cursive text-white">Contact Us</h3>
              <div></div>
            </div>
            <div className="container">
              <form>
                <div>
                <div className="flex flex-col gap-5 p-5">
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-[16rem] h-8 p-2"
                      name="name" value={name} onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                      className="w-[16rem] h-8 p-2"
                    />
                    <br />
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-5">
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Phone
                    </label>
                    <br />
                    <input
                      type="number"
                      name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}
                      className="w-[16rem] h-8 p-2"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Write Your Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      id="" value={message} onChange={(e)=>setMessage(e.target.value)}
                      className="w-[16rem] p-2 rows={7} cols={50}"
                    />
                  </div>
                </div>
                <input type="submit" className="text-white" onClick={handlesubmit}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
