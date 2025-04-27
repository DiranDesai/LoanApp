import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import {registerUser} from "../services/authService"
import useLoader from "../hooks/useLoader"
import useAuth from "../hooks/useAuth"
import { LOGIN_ERROR, USER_LOGIN_SUCCESS, LOADING } from "../types";
import Loader from "../components/Loader";
import NotifyDialog from "../components/NotifyDialog";
import { showToastError, showToastSuccess } from "../services/sweetAlertService";




function SignUp() {
  const [formData, setFormData] = useState({username: "", email: "", phonenumber: "", password: ""})

  const {isLoading, setIsLoading} = useLoader()
  const {error} = useAuth()

  const navigate = useNavigate()

  async function handleSubmit() {
    if (!formData.username || !formData.email || !formData.phonenumber || !formData.password) {
      showToastError("Please fill the fields")
      return
    }
    setIsLoading(true)
    await registerUser(formData)
    setIsLoading(false)
    showToastSuccess("Account created Successfully 🎉")

    setFormData({username: "", email: "", phonenumber: "", password: ""})
    setTimeout(() => {
      navigate("/login");
    }, 2000)
  }

  function handleFormChange(e) {
    let name = e.target.name
    let value = e.target.value

    setFormData((prev) => {
      return {...prev, [name]: value}
    })
  }


  
  return (
    <>
      {isLoading && <Loader />}
      {error && <NotifyDialog message={error} />}
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
            value={formData.username}
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" 
            name="username"
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Phone number
          </label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="w-full rounded-md shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <button type="button" className="w-full mt-10 p-3 text-white bg-[#ffac26] font-bold p-2 rounded-md hover:bg-[tomato] transition transform active:scale-95 duration-200 ease-in-out" onClick={handleSubmit}>
          Signup
        </button>
      </form>
      <SocialIcons />
    </div>
    </>
  );
}

export default SignUp;
