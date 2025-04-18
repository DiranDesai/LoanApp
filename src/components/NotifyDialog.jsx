import React from "react";
import useAuth from "../hooks/useAuth";
import { RESET_ERROR } from "../types";

function NotifyDialog({message}) {
    const {dispatch} = useAuth()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
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
