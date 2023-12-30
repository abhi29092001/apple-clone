import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center lg:space-x-6 min-w-fit bg-slate-200 bg-opacity-25 py-4">
      <img
        src="../assets/logo.png"
        className="md:h-5 md:w-5 w-7 h-7 hover:cursor-pointer"
        alt="apple logo"
      />
      <div className="lg:flex justify-center items-center hidden">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Store
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Shop the latest</a>
            </li>
            <li>
              <a>Mac</a>
            </li>
            <li>
              <a>iPad</a>
            </li>
            <li>
              <a>iPhone</a>
            </li>
            <li>
              <a>Apple Watch</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Mac
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore all Macbook</a>
            </li>
            <li>
              <a>Macbook Air</a>
            </li>
            <li>
              <a>Macbook Pro</a>
            </li>
            <li>
              <a>Mac Mini</a>
            </li>
            <li>
              <a>iMac</a>
            </li>
            <li>
              <a>Mac Studio</a>
            </li>
            <li>
              <a>Mac Pro</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            iPad
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore All iPads</a>
            </li>
            <li>
              <a>iPad Air</a>
            </li>
            <li>
              <a>iPad Pro</a>
            </li>
            <li>
              <a>iPad Mini</a>
            </li>
            <li>
              <a>iPad</a>
            </li>
            <li>
              <a>Apple Pencil</a>
            </li>
            <li>
              <a>Keyboards</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            iPhone
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore All iPhones</a>
            </li>
            <li>
              <a>iPhone 15 Pro</a>
            </li>
            <li>
              <a>iPhone 15</a>
            </li>
            <li>
              <a>iPhone 14</a>
            </li>
            <li>
              <a>iPhone 13</a>
            </li>
            <li>
              <a>iPhone SE</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Watch
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore All Apple Watch</a>
            </li>
            <li>
              <a>Apple Watch Series 2</a>
            </li>
            <li>
              <a>Apple Watch Ultra 2</a>
            </li>
            <li>
              <a>Apple Watch Nike</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Airpods
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore All Airpods</a>
            </li>
            <li>
              <a>Airpods Pro 2nd Generation</a>
            </li>
            <li>
              <a>Airpods 2nd Generation</a>
            </li>
            <li>
              <a>Airpods 3rd Generation</a>
            </li>
            <li>
              <a>Airpods Max</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            TV & Home
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore TV and Home</a>
            </li>
            <li>
              <a>Apple TV 4K</a>
            </li>
            <li>
              <a>HomePod</a>
            </li>
            <li>
              <a>HomePod Mini</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Entertainment
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Explore Entertainment</a>
            </li>
            <li>
              <a>Apple One</a>
            </li>
            <li>
              <a>Apple TV+</a>
            </li>
            <li>
              <a>Apple Music</a>
            </li>
            <li>
              <a>Apple Arcade</a>
            </li>
            <li>
              <a>Apple Podcasts</a>
            </li>
            <li>
              <a>Apple Books</a>
            </li>
            <li>
              <a>App Store</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-0 shadow-none md:text-xs"
          >
            Accessories
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Shop All Accessories</a>
            </li>
            <li>
              <a>Mac</a>
            </li>
            <li>
              <a>iPad</a>
            </li>
            <li>
              <a>iPhone</a>
            </li>
            <li>
              <a>Apple Watch</a>
            </li>
            <li>
              <a>Airpods</a>
            </li>
            <li>
              <a>TV & Home</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn  bg-transparent border-0 shadow-none md:text-xs"
          >
            Support
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>iPhone</a>
            </li>
            <li>
              <a>Mac</a>
            </li>
            <li>
              <a>iPad</a>
            </li>
            <li>
              <a>Watch</a>
            </li>
            <li>
              <a>Airpods</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>TV</a>
            </li>
          </ul>
        </div>
        {/* <li className="hover:cursor-pointer">Store</li> */}
        {/* <li className="hover:cursor-pointer">Mac</li>
        <li className="hover:cursor-pointer">iPad</li>
        <li className="hover:cursor-pointer">iPhone</li>
        <li className="hover:cursor-pointer">Watch</li>
        <li className="hover:cursor-pointer">Airpods</li>
        <li className="hover:cursor-pointer">TV & Home</li>
        <li className="hover:cursor-pointer">Entertainment</li>
        <li className="hover:cursor-pointer">Accessories</li>
        <li className="hover:cursor-pointer">Support</li> */}
      </div>
    </div>
  );
};

export default Navbar;
