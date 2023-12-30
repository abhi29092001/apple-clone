import React from "react";

const QuickLink = () => {
  return (
    <div className="py-10 ">
      <p className="font-semibold md:text-3xl text-xl mb-4 max-md:px-4">
        Quick Link
      </p>
      <div className="md:space-x-4 mb-12 max-md:px-8 max-md:flex flex-col max-md:space-y-4">
        <a
          className="font-light px-4 py-2 bg-slate-200 rounded-full hover:bg-slate-300 md:text-base text-xs"
          href="#"
        >
          Order Status
        </a>
        <a
          href="#"
          className="font-light px-4 py-2 bg-slate-200 rounded-full hover:bg-slate-300 md:text-base text-xs"
        >
          Shopping Help
        </a>
        <a
          href="#"
          className="font-light px-4 py-2 bg-slate-200 rounded-full hover:bg-slate-300 md:text-base text-xs"
        >
          Your Saves
        </a>
      </div>

      <div className="md:px-16 px-8">
        <p className="text-neutral-400 font-light md:text-base text-sm mb-4">
          ◊◊ Monthly pricing is after purchase using EMI with qualifying cards
          at 15% pa over a 6 month tenure. Monthly pricing is rounded to the
          nearest rupee. Exact pricing will be provided by your bank, subject to
          your bank’s terms and conditions.
        </p>
        <p className="text-neutral-400 font-light md:text-base text-sm mb-4">
          §§ Instant savings, otherwise referred to as instant cashback, is
          available with the purchase of an eligible product for qualifying HDFC
          Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction
          value of ₹10001 applies. Click here to see instant savings amounts and
          eligible devices. Instant savings are available for up to two orders
          per rolling 90-day period with an eligible card. Card eligibility is
          subject to terms and conditions between you and your card issuing
          bank. Total transaction value is calculated after any trade-in credit
          or eligible discount applied. Any subsequent order adjustment(s) or
          cancellation(s) may result in instant savings being recalculated, and
          any refund may be adjusted to account for instant savings clawback;
          this may result in no refund being made to you. Offer may be revised
          or withdrawn at any time without any prior notice. Additional terms
          apply. Offer cannot be combined with Apple Store for Education or
          Corporate Employee Purchase Plan pricing. Multiple separate orders
          cannot be combined for instant savings.
        </p>
        <p className="text-neutral-400 font-light md:text-base text-sm mb-4">
          Trade‑in values will vary based on the condition, year and
          configuration of your eligible trade‑in device. Not all devices are
          eligible for credit. You must be at least the age of majority to be
          eligible to trade in for credit. Trade‑in value may be applied towards
          a qualifying new device purchase. Actual value awarded is based on
          receipt of a qualifying device matching the description provided when
          estimate was made. Sales tax may be assessed on full value of a new
          device purchase. In-store trade‑in requires presentation of a valid
          photo ID (local law may require saving this information). Offer may
          not be available in all stores, and may vary between in-store and
          online trade‑in. Some stores may have additional requirements. Apple
          or its trade‑in partners reserve the right to refuse, cancel or limit
          the quantity of any trade‑in transaction for any reason. More details
          are available from Apple’s trade‑in partner for trade‑in and recycling
          of eligible devices. Restrictions and limitations may apply.
        </p>
      </div>

      <div className="md:px-16 px-8 py-8">
        <hr />
      </div>

      <div className="md:px-20 px-10 space-x-3 flex items-center max-md:justify-center">
        <img
          src="../assets/logo.png"
          className="md:h-7 md:w-7 w-5 h-5 hover:cursor-pointer"
          alt="apple logo"
        />
        <p className="text-neutral-400 md:text-base text-xs">
          Apple Online Store
        </p>
      </div>

      <div className="md:px-16 px-8 pt-8">
        <hr />
      </div>
    </div>
  );
};

export default QuickLink;
