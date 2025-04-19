import React from 'react'
import { Link } from 'react-router-dom';
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function LoanBanner() {
  return (
    <div className="p-5 mt-6 rounded-md bg-red-500 loan-banner">
        <p className="text-white">Available Loan</p>
        <h2 className="text-3xl text-white font-extrabold">K1200</h2>
        <Link to="/apply"><button type="button" className="flex rounded-full bg-white px-4 py-3 mt-3 font-bold"><PencilSquareIcon className="w-6 h-6"/> Apply Loan</button></Link>
    </div>
  )
}

export default LoanBanner