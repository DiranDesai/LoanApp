import React, { useState } from 'react'
import PersonalInformation from './PersonalInformation'
import LoanApplyInformation from './LoanApplyInformation'
import EmploymentInformation from './EmploymentInformation'
import ReviewSubmit from './ReviewSubmit'

const steps = [
  { id: 1, name: 'Personal Information' },
  { id: 2, name: 'Loan Information' },
  { id: 3, name: 'Employment Information'},
  { id: 4, name: 'Review and Submit' },
]

function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)


  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }



  return (
    <div className="p-5 application-form transition-all duration-500 ease-in-out transform">
        <h2 className="text-2xl font-bold text-[#333]">{steps[currentStep].name}</h2>
        <div className="border-b my-4"></div>
        {currentStep === 0 && <PersonalInformation />}
        {currentStep === 1 && <LoanApplyInformation />}
        {currentStep === 2 && <EmploymentInformation />}
        {currentStep === 3 && <ReviewSubmit />}
        
        <button type="button" className="w-full p-3 bg-red-400 font-bold mt-10 text-white transition transform active:scale-95 outline-0" onClick={handleNext}>Proceed</button>
    </div>
  )
}

export default ApplicationForm