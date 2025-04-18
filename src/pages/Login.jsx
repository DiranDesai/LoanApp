import React from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";

function Login() {
  return (
    <div className="login px-4 py-2">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <form className="p-4">
        <div className="mt-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex justify-end mt-2">
          <span className="text-sm font-medium underline">
            <Link>forgot password</Link>
          </span>
        </div>
        <button type="button" className="w-full mt-10 text-white">
          Login
        </button>
      </form>
     <SocialIcons />
      <div className="flex justify-center items-center mt-4 space-x-2 font-sm">
        <p className="text-sm">Don't have an account?</p>
        <Link to="/signup" className="text-blue-700">
          sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
