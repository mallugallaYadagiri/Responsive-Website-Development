import React from "react";
import Harvard from "../Assets/Destinations/HardvardUniversity.png";
import Oxford from "../Assets/Destinations/OxfordUniversity.png";
import Stanford from "../Assets/Destinations/StanfordUniversity.png";
import NayangTech from "../Assets/Destinations/Nanyang Technological University.png";
import { MdMoreHoriz } from "react-icons/md";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

function OurDesistinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl">Our Destinations</h2>
      <div className="flex text-center justify-between space-x-4">
        <div className=" p-4 flex flex-col">
          <img src={Harvard} alt="Front View of Harvard University" />
          <h3 className="mt-2 text-md py-2 font-bold">Harvard University</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="flex-shrink text-sm py-3">
              Cambridge, Massachusetts, UK
            </p>
            <MdMoreHoriz className="flex-shrink-0 more-icon" />
          </div>
        </div>
        <div className=" p-4 flex flex-col">
          <img src={Oxford} alt="Front View of Oxford University" />
          <h3 className="mt-2 text-md py-2  font-bold">Oxford University</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="flex-shrink text-sm py-3">Oxford, United Kingdom</p>
            <MdMoreHoriz className="flex-shrink-0 more-icon" />
          </div>
        </div>
        <div className=" p-4 flex flex-col">
          <img src={Stanford} alt="Front View of Stanford University" />
          <h3 className="mt-2 text-md py-2 font-bold">Stanford University</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="flex-shrink text-sm py-3">
              Stanford, California, USA
            </p>
            <MdMoreHoriz className="flex-shrink-0 more-icon" />
          </div>
        </div>
        <div className=" p-4 flex flex-col">
          <img
            src={NayangTech}
            alt="Front View of Nanyang Technological University"
          />
          <h3 className="mt-2 text-md py-2 font-bold">Nanyang Technological</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="flex-shrink text-sm py-3">Nanyang Ave, Singapore</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-8">
        <HiMiniArrowLongLeft className="text-4xl w-8" />
        <span className="text-lg mx-2">
          <span className="text-2xl font-bold">2</span>/140
        </span>
        <HiMiniArrowLongRight className="text-4xl w-8 text-orange-500" />
      </div>
    </div>
  );
}

export default OurDesistinations;
