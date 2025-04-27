import React, { useEffect } from "react";
import BorderLine from "./BorderLine";
import { useFormContext } from "../context/FormContext";


function LoanApplyInformation() {
  const { formData, updateFormData } = useFormContext();
  const [amount, setAmount] = React.useState(formData.loanInfo?.amount || "");
  const [purpose, setPurpose] = React.useState(formData.loanInfo?.purpose || "");
  const [paymentDate, setPaymentDate] = React.useState(formData.loanInfo?.paymentDate || "");

  useEffect(() => {
      updateFormData("loanInfo", {
        amount,
        purpose,
        paymentDate,
      });
    }, [amount, purpose, paymentDate])


  return (
    <>
      <div className="grid grid-cols-6 items-center opacity-100 translate-x-0 gap-5 mt-3">
        <div className="col-span-2">
          <p>Amount</p>
        </div>
        <div className="col-span-4 grid">
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black font-bold">K</span>
            <input type="number" maxLength={2} value={amount} onChange={(e) => setAmount(e.target.value)} className="border input-currency" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Purpose</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div>
            <select name="" id="" value={purpose} onChange={(e) => setPurpose(e.target.value)} className="border w-full p-1">
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
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Payment date</p>
        </div>
        <div className="col-span-4">
          <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} className="border " />
        </div>
      </div>
    </>
  );
}

export default LoanApplyInformation;
