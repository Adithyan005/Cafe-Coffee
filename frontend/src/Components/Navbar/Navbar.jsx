import React from "react";
import logo from "../../assets/imgs/2.png";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white text-wrap">
        <div className="container mx-auto py-2">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-between items-center w-full sm:w-auto">
              <a
                href="#"
                className="font-medium text-2xl sm:text-3xl flex justify-center items-center gap-3 font-cursive tracking-wider"
              >
                <img src={logo} alt="logo" className="w-9 sm:w-11" />
                Coffee Cafe
              </a>
              {/* Mobile Hamburger Menu (can be added later) */}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full sm:w-auto mt-4 sm:mt-0 gap-5">
              <ul className="flex flex-col sm:flex-row items-center gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white duration-100"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white duration-100"
                  >
                    BestSeller
                  </a>
                </li>
                <li>
                  <a
                    href="#banner"
                    className="text-white/70 hover:text-white duration-100"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white duration-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <button className="rounded-full bg-primary/80 px-4 py-2 hover:scale-110 duration-200 flex items-center gap-3">
                Order <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
