import React from "react";
import useAuth from "../hooks/useAuth";
import { RESET_ERROR } from "../types";
import error1 from "../assets/error2.jpg";

function NotifyDialog({message}) {
    const {dispatch} = useAuth()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-5">
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative transform scale-80 duration-25 transition animate-fadeInUp">
      <img src={error1} alt="Error" className="w-16 h-16 mb-4 mx-auto" />
      <p className="text-gray-700 mb-6">{message}</p>
      <div className="flex justify-end">
        <button
          onClick={() => dispatch({type: RESET_ERROR})}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
      <button
         onClick={() => dispatch({type: RESET_ERROR})}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-xl"
      >
        &times;
      </button>
    </div>
  </div>
  );
}

export default NotifyDialog;
