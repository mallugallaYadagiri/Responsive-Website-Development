import React from "react";
import StudentPic from "../Assets/Students/StudentTwo.png";

function DiscountsSection() {
  return (
    <div className="flex discounts-section justify-between max-w-7xl mx-auto sm:px-6 lg:px-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        style={{
          position: "relative",
          left: "10%",
        }}
      >
        <path
          d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z"
          fill="#BE554B"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        style={{
          position: "relative",
          left: "35%",
          top: "0",
          padding: "0.2%",
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z"
          fill="#F8E27E"
          fill-opacity="0.25"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        style={{
          position: "relative",
          left: "36%",
          top: "4em",
        }}
      >
        <path
          d="M26 25.5C26 22.1513 25.3404 18.8354 24.0589 15.7416C22.7774 12.6478 20.8991 9.83666 18.5312 7.46877C16.1633 5.10088 13.3522 3.22256 10.2584 1.94107C7.16462 0.659571 3.8487 -5.19044e-06 0.499994 -4.45856e-06L0.499998 9.05215C2.65996 9.05215 4.79877 9.47759 6.79432 10.3042C8.78986 11.1307 10.6031 12.3423 12.1304 13.8696C13.6577 15.3969 14.8692 17.2101 15.6958 19.2057C16.5224 21.2012 16.9478 23.34 16.9478 25.5L26 25.5Z"
          fill="#BE554B"
        />
      </svg>
      <div className="flex-1 discounts-text">
        <p className="text-xl py-2">Get 20% off for student</p>
        <p className="text-3xl font-bold">Student discounts available.</p>
        <p className="text-2xl ">Get ready for some fun in the sun!</p>
        <ul className="ul-list py-5">
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
      <div className="flex-1 student-img-container  ">
        <img
          src={StudentPic}
          alt="Student Holding a Book"
          className="student-img"
        />
      </div>
    </div>
  );
}

export default DiscountsSection;
