import React from "react";
import Corey from "../Assets/Testimonials/Corey.png";
import Jakob from "../Assets/Testimonials/Jakob.png";
import Carla from "../Assets/Testimonials/Carla.png";

function Testimonials() {
  return (
    <div className="text-center">
      <h2 className="text-3xl mb-4 font-bold">Testimonials</h2>
      <div className="flex justify-center testimonials">
        <div className="flex flex-col items-center m-4">
          <img
            src={Corey}
            alt="Corey Korsgaard"
            className="w-24 h-24 rounded-full"
          />
          <p className="testimonial-name py-2">Corey Korsgaard</p>
          <p className="text-gray-600 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Jakob}
            alt="Jakob Aminoff"
            className="w-24 h-24 rounded-full"
          />
          <p className="testimonial-name py-2">Jakob Aminoff</p>
          <p className="text-gray-600 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Carla}
            alt="Carla Press"
            className="w-24 h-24 rounded-full"
          />
          <p className="testimonial-name py-2">Carla Press</p>

          <p className="text-gray-600 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
