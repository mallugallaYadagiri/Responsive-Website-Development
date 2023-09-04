import React, { useState } from "react";
import { MdOutlineAdd, MdOutlineMinimize } from "react-icons/md";
import StudentThree from "../Assets/Students/StudentThree.png";

function Registration() {
  const [startCount, setStartCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

  const handleIncrementStart = () => {
    if (startCount < 5) {
      setStartCount(startCount + 1);
    }
  };

  const handleDecrementStart = () => {
    if (startCount > 1) {
      setStartCount(startCount - 1);
    }
  };

  const handleIncrementRoom = () => {
    setRoomCount(roomCount + 1);
  };

  const handleDecrementRoom = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };

  return (
    <div className="flex justify-between max-w-8xl sm:px-6 lg:px-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="113"
        height="113"
        viewBox="0 0 113 113"
        fill="none"
        style={{
          position: "relative",
          left: "35em",
          top: "8em",
          padding: "0.6em",
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z"
          fill="#F8E27E"
          fill-opacity="0.2"
        />
      </svg>
      <div className="flex-1 flex justify-center">
        <img
          src={StudentThree}
          alt="Hijab Student with Bag Holding Bag"
          className="student-img"
        />
      </div>
      <div className="flex-1 flex justify-center my-auto w-60">
        <form>
          <h2 className="text-2xl font-bold py-4">Book Now</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className=" py-5">
            <label htmlFor="City" className="font-bold">
              CITY
              <input
                placeholder="placeholder"
                className="block w-full bg-gray-200 border-2 py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
              />
            </label>
          </div>
          <div className="flex justify-between py-5">
            <div className="mr-2">
              <label htmlFor="Arrival" className="font-bold ">
                ARRIVAL
                <input
                  placeholder="10 October"
                  className="block w-full border-2 bg-gray-200  py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                />
              </label>
            </div>
            <div>
              <label htmlFor="Departure" className="font-bold">
                DEPARTURE
                <input
                  placeholder="11 October"
                  className="block w-full border-2 bg-gray-200 py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="flex py-5">
            <div className="flex-1 ">
              <label htmlFor="Star" className="font-bold">
                START
              </label>
              <div className="flex justify-center items-center mx-4 rounded-full">
                <div className="bg-gray-300 p-2 minus-icon-style">
                  <MdOutlineMinimize
                    className="text-3xl font-bold cursor-pointer bg-gray-200p-2 "
                    onClick={handleDecrementStart}
                  />
                </div>
                <div className="bg-gray-200 p-2">
                  <input
                    className="text-lg w-10  text-center bg-gray-200"
                    value={startCount}
                    readOnly
                  />
                </div>
                <div className="bg-gray-300 p-2  plus-icon-style">
                  <MdOutlineAdd
                    className="text-3xl font-bold cursor-pointer bg-gray-200p-2 "
                    onClick={handleIncrementStart}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="Room" className="font-bold">
                ROOM
              </label>
              <div className="flex justify-center items-center mx-4">
                <div className="bg-gray-300 p-2 minus-icon-style">
                  <div className="flex items-center ">
                    <MdOutlineMinimize
                      className="text-3xl font-bold cursor-pointer bg-gray-200p-2 minus-icon"
                      onClick={handleDecrementRoom}
                    />
                  </div>
                </div>
                <div className="bg-gray-200 p-2">
                  <input
                    className="text-lg w-10 text-center bg-gray-200"
                    value={roomCount}
                    readOnly
                  />
                </div>
                <div className="bg-gray-300 p-2 plus-icon-style">
                  <MdOutlineAdd
                    className="text-3xl font-bold cursor-pointer bg-gray-200p-2"
                    onClick={handleIncrementRoom}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <button
              type="submit"
              className="rounded-md bg-black px-3 py-2 text-white text-bold shadow-sm hover:bg-green-500 hover:text-black"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
