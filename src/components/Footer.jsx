import React from "react";

const Footer = () => {
  return (
    <>
      <div className="collapse rounded-none collapse-plus bg-slate-200 bg-opacity-25 md:px-28 px-8">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title md:text-base text-sm font-light">
          Apple Wallet
        </div>
        <div className="collapse-content">
          <p className="md:text-base text-sm font-light">Wallet</p>
        </div>
      </div>

      <div className="px-12 bg-slate-200 bg-opacity-25">
        <hr />
      </div>

      <div className="collapse rounded-none collapse-plus bg-slate-200 bg-opacity-25 md:px-28 px-8">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title md:text-base text-sm font-light">
          Account
        </div>
        <div className="collapse-content">
          <p className="md:text-base text-sm font-light pb-2">
            Manage your apple ID
          </p>
          <p className="md:text-base text-sm font-light pb-2">
            Apple Store Account
          </p>
          <p className="md:text-base text-sm font-light pb-2">iCloud.com</p>
        </div>
      </div>

      <div className="px-12 bg-slate-200 bg-opacity-25">
        <hr />
      </div>

      <div className="collapse rounded-none collapse-plus bg-slate-200 bg-opacity-25 md:px-28 px-8 pb-6">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title md:text-base text-sm font-light">
          Apple Values
        </div>
        <div className="collapse-content">
          <p className="md:text-base text-sm font-light pb-2">Accessibility</p>
          <p className="md:text-base text-sm font-light pb-2">Environment</p>
          <p className="md:text-base text-sm font-light pb-2">Privacy</p>
          <p className="md:text-base text-sm font-light pb-2">
            Supplier Responsibility
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
