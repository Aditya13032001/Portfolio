import React from "react";
import pharma from "../assets/pharma.jpg";
import portfolio from "../assets/portfolio.png";
import lp from "../assets/lp.jpg";
import movie from "../assets/movie.jpg";

const Work = () => {
  return (
    <div name="Work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Checkokut some of my recent works</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          {/* Grid Item */}

          {/* Card 1 */}
          <div
            style={{ backgroundImage: `url(${pharma})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pharma Website
              </span>
              <div className="pt-8 text-center">
                <a href=" https://github.com/Aditya13032001/GoPharma ">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Booking with react and Tvmaze Api
              </span>
              <div className="pt-8 text-center">
                <a href=" https://github.com/Aditya13032001/MovieBooking">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card 3 */}

          <div
            style={{ backgroundImage: `url(${lp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href=" https://github.com/Aditya13032001/LandingPage ">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4*/}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                React/Tailwind Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Aditya13032001/Portfolio ">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    {" "}
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
