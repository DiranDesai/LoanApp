import React from "react";
import BorderLine from "./BorderLine";

function LoanApplyInformation() {
  return (
    <>
      <div className="grid grid-cols-6 opacity-100 translate-x-0 gap-5 mt-3">
        <div className="col-span-2">
          <p>Amount</p>
        </div>
        <div className="col-span-4 grid">
          <div>
            <input type="number" maxLength={2} className="border" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Purpose</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div>
            <select name="" id="" className="border w-full p-1">
              <option value="">Select</option>
              <option value="education">Education</option>
              <option value="medical">Medical Expenses</option>
              <option value="business">Small Business</option>
              <option value="personal">Personal Expenses</option>
              <option value="home">Home Renovation</option>
              <option value="auto">Vehicle Purchase</option>
              <option value="debt-consolidation">Debt Consolidation</option>
              <option value="wedding">Wedding</option>
              <option value="travel">Travel / Vacation</option>
              <option value="emergency">Emergency Funds</option>
            </select>
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Payment date</p>
        </div>
        <div className="col-span-4">
          <input type="date" className="border " />
        </div>
      </div>
    </>
  );
}

export default LoanApplyInformation;
