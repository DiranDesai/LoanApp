import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";


function SignUp() {
  return (
    <div className="signup lg:max-w-[500px] mx-auto mt-10  px-4 py-2">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <form className="px-4">
      <div className="mt-2">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Phone number
          </label>
          <input
            type="text"
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <button type="button" className="w-full mt-10 p-3 text-white bg-[#ffac26] font-bold p-2 rounded-md hover:bg-[tomato] transition duration-200 ease-in-out">
          Signup
        </button>
      </form>
      <SocialIcons />
    </div>
  );
}

export default SignUp;
