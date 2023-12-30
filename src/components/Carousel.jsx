import React from "react";

const Carousel = () => {
  return (
    <div className="carousel carousel-center rounded-box md:mx-12 mx-6 px-3 my-12 md:px-6 py-8 md:space-x-24 space-x-12 overflow-x-scroll">
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/mac.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="mac"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/iphones.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="iphones"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/ipad.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="ipad"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/watch-apple.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="apple watch"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/airpods.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="airpods"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/airtag.png"
          className="md:w-48 md:h-32 w-36 h-24"
          alt="airtag"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src="../assets/apple-tv.png"
          className="md:w-44 md:h-32 w-36 h-24"
          alt="apple tv"
        />
      </div>
    </div>
  );
};

export default Carousel;
