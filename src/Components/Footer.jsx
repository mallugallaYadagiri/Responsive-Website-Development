import React from "react";

function Footer() {
  return (
    <div className="flex justify-center space-x-8">
      <div className="text-lg ">
        <a href="#href" className="hover:underline mx-2">
          Privacy Policy
        </a>
        <a href="#href" className="hover:underline mx-2">
          Terms of Use
        </a>
        <a href="#href" className="hover:underline mx-2">
          Sales of Refunds
        </a>
        <a href="#href" className="hover:underline mx-2">
          Legal
        </a>
      </div>
      <div className="text-lg font-bold">
        <a href="#href" className="hover:underline mx-2">
          About
        </a>
        <a href="#href" className="hover:underline mx-2">
          Schedules
        </a>
        <a href="#href" className="hover:underline mx-2">
          Pricing
        </a>
        <a href="#href" className="hover:underline mx-2">
          Membership
        </a>
        <a href="#href" className="hover:underline mx-2">
          Joins
        </a>
      </div>
    </div>
  );
}

export default Footer;
