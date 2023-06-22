import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/Aditya-Gaikwad-Resumee.pdf";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600  font-bold">My Name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Aditya Gaikwad
        </h1>
        <h2 className="text-4xl sm:etext-7xl  font-bold text-gray-400">
          I am a Full Stack Developer.
        </h2>
        <p className=" font-bold text-gray-400 py-4 max-w-[700px]">
          {" "}
          responsible for developing and designing front end web architecture,
          ensuring the responsiveness of applications, and working
        </p>
        <div className="grid grid-cols-2">
          <div>
            <Link to="Work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-4 " />
                </span>
              </button>
            </Link>
          </div>

          <div>
            <a href={Resume}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                Resumee
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-4 " />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
