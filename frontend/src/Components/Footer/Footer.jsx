import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerlink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex">
          <div className="grid grid-cols-2">
            <div className="justify-center items-center p-6">
              <h3 className="text-3xl font-cursive text-white">Contact Us</h3>
              <div></div>
            </div>
            <div className="">
              <form>
                <div className="flex gap-5 p-5">
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-[16rem] h-8 p-2"
                      name="name"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Email
                    </label>
                    <input type="email" className="w-[16rem] h-8 p-2" />
                    <br />
                  </div>
                </div>
                <div className="flex gap-5 p-5">
                  <div className="">
                    <label htmlFor="" className="p-4 text-white">
                      Phone
                    </label>
                    <br />
                    <input type="number" className="w-[16rem] h-8 p-2" />
                  </div>
                  <div className="pl-10">
                    <label htmlFor="" className="p-4 text-white">
                      Write Your Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      id=""
                      className="w-[16rem] p-2 rows={7} cols={50}"
                    />
                  </div>
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
