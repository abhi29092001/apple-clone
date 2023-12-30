import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="w-screen bg-slate-200 bg-opacity-25 py-6">
      <div className="md:flex items-center max-md:px-2 md:px-12 md:justify-between max-md:space-y-8">
        <div className="md:w-2/4 max-md:text-center max-md:flex justify-center">
          <p>
            <span className="text-black font-semibold md:text-5xl text-3xl">
              Store.{" "}
            </span>
            <span className="md:text-5xl text-3xl text-gray-500 font-semibold">
              The best way to buy the products you love.
            </span>
          </p>
        </div>

        <div className="md:w-2/4 grid place-content-center">
          <div className="max-md:text-center">
            <p className="max-md:text-xs">Need shopping help?</p>
            <a href="#" className="text-sky-600 underline max-md:text-xs">
              Ask a Specialist
            </a>
          </div>

          <div className="max-md:text-center">
            <p className="max-md:text-xs">Visit an Apple Store</p>
            <a href="#" className="text-sky-600 underline max-md:text-xs">
              Find one near you
            </a>
          </div>
        </div>
      </div>

      {/* carousel */}
      <Carousel />
    </div>
  );
};

export default Hero;
