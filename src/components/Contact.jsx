import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/bd07a482-ff03-423d-b6ea-f2c54721acb8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the Form Below or send me email-aditya.a.gaikwad13@gmail.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder-black font-bold"
          type="text"
          placeholder="Name  "
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder-black font-bold"
          type="email"
          placeholder="email "
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6] placeholder-black font-bold"
          name="message"
          placeholder="Message "
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Lets Collab
        </button>
      </form>
    </div>
  );
};

export default Contact;
