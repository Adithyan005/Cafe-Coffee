import React from "react";
import cof from "../../assets/imgs/5.png";
const Home = () => {
  return (
    <div className="min-[h-550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-1 sm:order-2 flex flex-col justify-center gap-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              We serve the richest
              <span className="text-primary font-cursive tracking-wide leading-snug"> Coffee</span> in the
              city
            </h1>
            <div>
              <button className="button bg-gradient-to-r from bg-primary to secondary rounded-full text-white px-4 py-2 hover:scale-105 duration-200">
                Coffee and Code
              </button>
            </div>
          </div>

          <div className="min-[h-450px] sm:flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={cof}
              alt=""
              className="w-[300px] sm:w-[450px] sm:h-auto sm:scale-105 mx-auto spin"
            />
            <div className="bg-gradient-to-r from bg-primary to secondary rounded-xl absolute top-10 left-10 p-2">
              <h1>Hey Coder</h1>
            </div>
            <div className="bg-gradient-to-r from bg-primary to secondary rounded-xl absolute bottom-10 right-10 p-2">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
