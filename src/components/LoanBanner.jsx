import React from 'react'

function LoanBanner() {
  return (
    <div className="p-5 mt-6 rounded-md bg-red-500">
        <p className="text-white">Available Loan</p>
        <h2 className="text-3xl text-white font-extrabold">K1200</h2>
        <button type="button" className="rounded-full bg-white px-4 py-2 mt-3 font-bold">Apply Loan</button>
    </div>
  )
}

export default LoanBanner