import React from "react";
import AvatarOne from "../Assets/Students/avatar (1).png";
import AvatarTwo from "../Assets/Students/avatar (2).png";
import AvatarThree from "../Assets/Students/avatar (3).png";

function TropicalAdventure() {
  return (
    <div className="flex justify-center tropical-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        style={{
          position: "relative",
          left: "80%",
          top: "30%",
          padding: "1%",
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
          fill="#87CC81"
          fill-opacity="0.2"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 47 47"
        fill="none"
        style={{
          position: "relative",
          top: "8em",
          left: "43%",
        }}
      >
        <path
          d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z"
          fill="#BE554B"
        />
      </svg>
      <div className="flex-1 tropical-img-cards">
        <div className="flex bg-white card p-4 my-4 mr-8">
          <div>
            <img src={AvatarOne} alt="Jenny Wilson Avatar" />
          </div>
          <div className="pl-4">
            <h3 className="text-lg font-bold">Jenny Wilson</h3>
            <p className="text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing...
            </p>
          </div>
        </div>
        <div className="flex bg-white card p-4 my-4 mr-8">
          <div>
            <img src={AvatarTwo} alt="Jenny Wilson Avatar" />
          </div>
          <div className="pl-4">
            <h3 className="text-lg font-bold">Jenny Wilson</h3>
            <p className="text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing...
            </p>
          </div>
        </div>
        <div className="flex bg-white card p-4 my-4 mr-8">
          <div>
            <img src={AvatarThree} alt="Jenny Wilson Avatar" />
          </div>
          <div className="pl-4">
            <h3 className="text-lg font-bold">Jenny Wilson</h3>
            <p className="text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing...
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 tropical-text">
        <div className="ml-20">
          <h2 className="text-4xl font-bold">Tropical Adventure</h2>
          <h3 className="text-3xl py-1">for Students.</h3>
          <h4 className="text-1xl font-bold pb-4">
            Student Tropical Vaction: Relax and Recharge
          </h4>
          <ul className="ul-list pt-4">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisee id in ultrices</li>
          </ul>
          <button className="relative rounded-full bg-orange-500 py-2 px-8 my-5 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default TropicalAdventure;
