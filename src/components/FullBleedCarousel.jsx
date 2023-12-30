import React from "react";

const FullBleedCarousel = () => {
  return (
    <div className="carousel carousel-end rounded-box max-md:h-96 ">
      <div className="carousel-item">
        <img
          src="../assets/titanium.jpeg"
          className="max-md:h-96"
          alt="iphone"
        />
      </div>
      <div className="carousel-item">
        <img
          src="../assets/newphoria.jpeg"
          className="max-md:h-96"
          alt="iphone"
        />
      </div>
      <div className="carousel-item">
        <img
          src="../assets/mind-blowing.jpeg"
          className="max-md:h-96"
          alt="macbook"
        />
      </div>
      <div className="carousel-item">
        <img
          src="../assets/apple-watch.jpeg"
          className="max-md:h-96"
          alt="apple watch"
        />
      </div>
      <div className="carousel-item">
        <img
          src="../assets/payment.jpeg"
          className="max-md:h-96"
          alt="ipad macbook"
        />
      </div>
      <div className="carousel-item">
        <img src="../assets/ipad.jpeg" className="max-md:h-96" alt="ipad" />
      </div>
      <div className="carousel-item">
        <img
          src="../assets/ultra.jpeg"
          className="max-md:h-96"
          alt="ultra watch"
        />
      </div>
    </div>
  );
};

export default FullBleedCarousel;
