import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import useAuth from "../hooks/useAuth"
import Loader from "../components/Loader";
import NotifyDialog from "../components/NotifyDialog";
import { LOGIN_ERROR, USER_LOGIN_SUCCESS, RESET_LOGIN_ERROR, UPDATE_PROFILE } from "../types";
import { showErrorAlert, showSuccessAlert, showToastError } from "../services/sweetAlertService";
import {getCurrentUser, loginUser} from "../services/authService"


function Login() {
  const [formData, setFormData] = useState({email: "", password: ""})


  function handleFormChange(e) {
    let name = e.target.name
    let value = e.target.value

    setFormData((prev) => {
      return {...prev, [name]: value}
    })
  }

  const navigate = useNavigate()

  const {user, loading, token, dispatch, error} = useAuth()


  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

 

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      //dispatch({type: LOGIN_ERROR, payload: "Missing Fields"})
      showToastError("Please fill all the Fields")
      return
    }

    try {
   
      const data = await loginUser(formData)
      const {_doc} = await getCurrentUser(data.token)
      localStorage.setItem("token", data.token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data }); 
      dispatch({type: UPDATE_PROFILE, payload: _doc})
      localStorage.setItem("token", data.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
   {loading && <Loader />}
   {/* {error && showModal(error, false, dispatch)} */}
     <div className="login lg:max-w-[500px] mx-auto px-4 py-2">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="mt-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => handleFormChange(e)}
            value={formData.email}
            placeholder="example@gmail.com"
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            name="password"
            onChange={(e) => handleFormChange(e)}
            placeholder="**********"
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex justify-end mt-2">
          <span className="text-sm font-medium underline">
            <Link to="/resetPassword">forgot password</Link>
          </span>
        </div>
        <button type="submit" className="w-full mt-10 p-3 text-white bg-[#ffac26] font-bold p-2 rounded-md hover:bg-[tomato] transition duration-200 transform active:scale-95 ease-in-out">
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

   </>
  );
}

export default Login;
