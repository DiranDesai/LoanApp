import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import LoanApplyInformation from "./LoanApplyInformation";
import EmploymentInformation from "./EmploymentInformation";
import ReviewSubmit from "./ReviewSubmit";
import UploadDocuments from "./UploadDocuments";
import { useFormContext } from "../context/FormContext";
import useAuth from "../hooks/useAuth";
import { SET_ERROR } from "../types";
import NotifyDialog from "./NotifyDialog";

const steps = [
  { id: 1, name: "Personal Information" },
  { id: 2, name: "Loan Information" },
  { id: 3, name: "Employment Information" },
  { id: 4, name: "Upload Documents" },
  { id: 5, name: "Review and Submit" },
];

function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useFormContext();
  const { dispatch, error } = useAuth();
  const { personalInfo, loanInfo, employmentInfo } = formData;

  const handleNext = () => {
if(currentStep === 0 && !personalInfo.fullName.firstName){
dispatch({
         type: SET_ERROR,
       payload: "Please fill in all required fields before proceeding.",
       });
      return;
}

    // if (
    //   currentStep === 0 &&
    //   (!personalInfo.fullName.firstName ||
    //     !personalInfo.fullName.lastName
    //     // !personalInfo.nrc.firstPart ||
    //     // !personalInfo.nrc.secondPart ||
    //     // !personalInfo.nrc.thirdPart
    //     )
    // ) {
    //   console.log(personalInfo)
    //   dispatch({
    //     type: SET_ERROR,
    //     payload: "Please fill in all required fields before proceeding.",
    //   });
    //   return;
    // }

    // if (
    //   (currentStep === 1 && !loanInfo.amount) ||
    //   !loanInfo.purpose ||
    //   !loanInfo.paymentDate
    // ) {
    //   dispatch({
    //     type: SET_ERROR,
    //     payload: "Please fill in all required fields before proceeding.",
    //   });
    //   return;
    // }

    // if (
    //   currentStep === 2 &&
    //   (!employmentInfo.employment ||
    //     !employmentInfo.company ||
    //     !employmentInfo.position ||
    //     !employmentInfo.monthlyIncome)
    // ) {
    //   dispatch({
    //     type: SET_ERROR,
    //     payload: "Please fill in all required fields before proceeding.",
    //   });
    //   return;
    // }

    

    if (currentStep === steps.length - 1) {
      console.log("Form submitted:", formData);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {error && <NotifyDialog message={error} />}
      <div className="p-5 application-form transition-all duration-500 ease-in-out transform">
        <h2 className="text-xl font-bold text-[#333]">
          {steps[currentStep].name}
        </h2>
        <div className="border-b my-4"></div>
        {currentStep === 0 && <PersonalInformation />}
        {currentStep === 1 && <LoanApplyInformation />}
        {currentStep === 2 && <EmploymentInformation />}
        {currentStep === 3 && <UploadDocuments />}
        {currentStep === 4 && <ReviewSubmit />}

        <button
          type="button"
          className="w-full p-3 btn-sp font-bold mt-10 text-white transition transform active:scale-95 outline-0"
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Proceed"}
        </button>
      </div>
    </>
  );
}

export default ApplicationForm;
