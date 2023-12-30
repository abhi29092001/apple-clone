import React from "react";
import FullBleedCarousel from "./FullBleedCarousel";
import QuickLink from "./QuickLink";

const Main = () => {
  return (
    <div className="bg-slate-200 bg-opacity-25 md:px-12">
      <div className="py-8 max-md:text-center max-md:px-6">
        <p>
          <span className="text-black font-semibold md:text-3xl text-xl">
            The latest.{" "}
          </span>
          <span className="md:text-3xl text-xl text-gray-500 font-semibold">
            Take a look at what’s new right now.
          </span>
        </p>
      </div>

      <div className="flex justify-center max-md:px-4">
        <FullBleedCarousel />
      </div>

      <QuickLink />
    </div>
  );
};

export default Main;
