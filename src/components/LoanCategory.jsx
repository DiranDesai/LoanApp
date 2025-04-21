import React from 'react'
import { Link } from 'react-router-dom'
import home from "../assets/home.png"
import business from "../assets/business.png"

function LoanCategory() {
  return (
    <div className="mt-10 loan-category">
        <div className="flex items-center justify-between">
            <h2 className="font-bold">Loan Category</h2>
            <Link><span className="text-blue-500 font-bold">See more</span></Link>
        </div>
        <div className="grid grid-cols-2 space-x-3">
            <div className="mt-4 rounded-md p-5 category">
                <div>
                    <img src={home} className="w-2 h-2" alt="" />
                    
                </div>
                <h2 className="font-bold">Home Loan</h2>
                <p className="text-sm">Low-interest rates for your dream home</p>
            </div>
            <div className="mt-4 category rounded-md p-5">
                <div>
                    <img src={business} className="w-2 h-2" alt="" />
                    
                </div>
                <h2 className="font-bold">Business Loan</h2>
                <p className="text-sm">No collateral required for loans up to K50, 000</p>
            </div>
        </div>
    </div>
  )
}

export default LoanCategory