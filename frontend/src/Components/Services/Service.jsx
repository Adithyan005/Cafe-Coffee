import React from "react";
import espresso from "../../assets/imgs/7.png";
const Service = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-6">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-cursive font-semibold">
              Best Coffee for you
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-4 md:gap-10 place-items-center">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>

              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Espresso</h1>
                <p className="hover:text-white duration-300 text-xs text-center line-clamp-2 pt-2">
                Espresso: bold, rich, and smooth—a tiny cup packed with big energy and flavor!
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>

              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Americano</h1>
                <p className="hover:text-white duration-300 text-xs line-clamp-2 pt-2">
                Americano: A smooth, bold espresso with a splash of hot water—perfect for those who love rich flavor!
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Cappuccino</h1>
                <p className="hover:text-white duration-300 text-xs pt-2 line-clamp-2">
                Cappuccino: A velvety blend of rich espresso, steamed milk, and frothy foam—coffee!
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Latte</h1>
                <p className="hover:text-white duration-300 text-xs pt-2">
                Latte: A creamy, comforting mix of espresso and steamed milk, topped with a light foam
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Mocha</h1>
                <p className="hover:text-white duration-300 text-xs pt-2 line-clamp-2">
                Mocha: A delightful fusion of rich espresso, steamed milk, and decadent chocolate, topped with whipped cream
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative"
            >
              <div className="h-[122px]">
                <img
                  src={espresso}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Irish</h1>
                <p className="hover:text-white duration-300 text-xs pt-2 line-clamp-2">
                Irish Coffee: A warm, spirited blend of bold coffee, smooth whiskey, and a touch of cream
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
