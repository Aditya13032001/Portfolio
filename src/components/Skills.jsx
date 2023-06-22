import React from "react";
import golang from "../assets/golang.png";
import css from "../assets/css.png";
import reactimg from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";

const Skills = () => {
  return (
    <div name="Skills" className=" w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the Technologiue i worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 py-8 gap-4 text-center">
          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={javascript} alt="aws-icon" />
            <p className="my-4">javascript</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={css} alt="aws-icon" />
            <p className="my-4">css</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={html} alt="aws-icon" />
            <p className="my-4">html</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={reactimg} alt="aws-icon" />
            <p className="my-4">react</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={golang} alt="aws-icon" />
            <p className="my-4">golang</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={node} alt="aws-icon" />
            <p className="my-4">node</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={tailwind} alt="aws-icon" />
            <p className="my-4">tailwind</p>
          </div>

          <div className="shadow-md shadow-[#27e450] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={mongo} alt="aws-icon" />
            <p className="my-4">mongo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
