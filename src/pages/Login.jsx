import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import useAuth from "../hooks/useAuth"
import Loader from "../components/Loader";
import NotifyDialog from "../components/NotifyDialog";
import { LOGIN_ERROR } from "../types";


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const {user, loading, token, dispatch, error, loginUser} = useAuth()


  useEffect(() => {
    if (token) {
      navigate("/profile")
    }
  }, [])

 

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(email, password)
    
    if (!email || !password) {
      dispatch({type: LOGIN_ERROR, payload: "Missing Fields"})
      return
    }

    await loginUser({username: email, password})
  }


  return (
   <>
   {loading && <Loader />}
   {error && <NotifyDialog message={error} />}
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full shadow-sm mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex justify-end mt-2">
          <span className="text-sm font-medium underline">
            <Link>forgot password</Link>
          </span>
        </div>
        <button type="submit" className="w-full mt-10 p-3 text-white bg-[#ffac26] font-bold p-2 rounded-md hover:bg-[tomato] transition duration-200 ease-in-out">
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
