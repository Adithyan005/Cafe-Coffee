import React from "react";
import logo from "../../assets/imgs/2.png";
import { FaCoffee } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white text-wrap">
        <div className="container py-2">
          <div className="flex justify-between">
            <div className="">
              <a
                href="#"
                className="font-medium text-xl sm:text-3xl flex justify-center items-center gap-2 font-cursive tracking-wider"
              >
                <img src={logo} alt="logo" className="w-11" />
                Coffee Cafe
              </a>
            </div>
            <div className="flex justify-between items-center gap-7">
              <ul className="flex items-center gap-4">
                <li><a href="#" className="text-white/70 hover:text-white duration-100">Home</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white duration-100">BestSeller</a></li>
                <li><a href="#banner" className="text-white/70 hover:text-white duration-100">About</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white duration-100">Contact</a></li>
                </ul>
            
            <button className="rounded-full bg-primary/80 px-4 py-2 hover:scale-110 duration-200 flex items-center gap-3">Order <FaCoffee className="text-xl cursor-pointer"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
