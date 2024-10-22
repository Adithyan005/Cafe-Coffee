import axios from 'axios';
import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Appointments = () => {

  const [name,setName]=useState();
  const [phone,setPhone]=useState();
  const [count,setCount]=useState();
  const [date,setDate]=useState();
  const [time,setTime]=useState();

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/appointment/insert",{name,phone,count,date,time})
    try {
      setName("");
      setPhone("");
      setCount("");
      setDate("");
      setTime("");
      toast.success("Successfully Booked!");
      console.log('inserted')
    } catch (error) {
      toast.error('Error in booking. Please try again.');
      console.log('error in inserting');
    }
  }


  return (
    <>
    <div>
      <div className='flex justify-center items-center pt-5'>
        <h1 className='text-2xl font-serif'>Appointment</h1>
      </div>
      <div className='w-[28rem] h-[10vh] mx-auto p-[4rem]'>
        <form action="">

          <div className='flex flex-col items-center gap-5 bg-primary shadow-lg rounded-xl p-6 text-white'>

            <div className='flex justify-center items-center gap-4'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className='h-8 w-[13rem] p-2 items-center rounded-md text-black'/>
            </div>

            <div className='flex justify-center items-center gap-4'>
            <label htmlFor="">Phone</label>
            <input type="text" name='phone' maxLength="10" value={phone} onChange={(e)=>setPhone(e.target.value)} className='h-8 w-[13rem] p-2 items-center rounded-md text-black' />
            </div>

            <div className='flex justify-center items-center gap-4'>
            <label htmlFor="">Persons</label>
            <input type="number" name='count' value={count} onChange={(e)=>setCount(e.target.value)} className='h-8 w-[13rem] p-2 items-center rounded-md text-black'/>
            </div>

            <div className='flex justify-center items-center gap-4'>
            <label htmlFor="">Date</label>
            <input type="date" name='date' value={date} onChange={(e)=>setDate(e.target.value)} className='h-8 w-[13rem] p-2 items-center rounded-md text-black'/>
            </div>

            <div className='flex justify-center items-center gap-4'>
            <label htmlFor="">Time</label>
            <input type="time" name='time' value={time} onChange={(e)=>setTime(e.target.value)} className='h-8 w-[13rem] p-2 items-center rounded-md text-black'/>
            </div>

            <div>
              <button className='bg-white rounded-lg shadow-xl p-3 text-black' onClick={handlesubmit}>Book</button>
              <ToastContainer/>
            </div>


          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Appointments
