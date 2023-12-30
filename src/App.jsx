import React from "react";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Offers />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
