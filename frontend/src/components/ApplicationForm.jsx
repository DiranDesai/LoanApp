import React, { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import LoanApplyInformation from "./LoanApplyInformation";
import EmploymentInformation from "./EmploymentInformation";
import ReviewSubmit from "./ReviewSubmit";
import UploadDocuments from "./UploadDocuments";
import { useFormContext } from "../context/FormContext";
import useAuth from "../hooks/useAuth";
import { RESET_ERROR, SET_ERROR } from "../types";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import NotifyDialog from "./NotifyDialog";
import { showErrorAlert, showToastError, showToastSuccess } from "../services/sweetAlertService";

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

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch({ type: RESET_ERROR });
      }, 3000); // Clear error after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);
  
  const handleNext = () => {
    if (currentStep === 0) {
      if (
        !personalInfo.fullName.firstName ||
        !personalInfo.fullName.lastName ||
        !personalInfo.nrc.firstPart ||
        !personalInfo.nrc.secondPart ||
        !personalInfo.nrc.thirdPart ||
        !personalInfo.gender ||
        !personalInfo.dob ||
        !personalInfo.province ||
        !personalInfo.district
      ) {
        dispatch({
          type: SET_ERROR,
          payload: "Please fill in all required fields before proceeding.",
        });
        return;
      }
    }
  
    if (currentStep === 1) {
      if (!loanInfo.amount || !loanInfo.purpose || !loanInfo.paymentDate) {
        dispatch({
          type: SET_ERROR,
          payload: "Please fill in all required fields before proceeding.",
        });
        return;
      }
    }
  
    if (currentStep === 2) {
      if (
        !employmentInfo.employment ||
        !employmentInfo.company ||
        !employmentInfo.position ||
        !employmentInfo.monthlyIncome
      ) {
        dispatch({
          type: SET_ERROR,
          payload: "Please fill in all required fields before proceeding.",
        });
        return;
      }

      if (employmentInfo.monthlyIncome / loanInfo.monthlyIncome < 5) {
        dispatch({
          type: SET_ERROR,
          payload: "No loan available",
        });
        return;
      }
    }
  
    if (currentStep === steps.length - 1) {
      console.log("Form submitted:", formData);
      return;
    }
  
    
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }
  
  

  return (
    <>
      {error && showToastError(error)}
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

        <div className="flex gap-20 mt-10 control-buttons">
          <button
            type="button"
            className="w-full flex gap-3 items-center justify-center scale-75 p-3 btn-sp font-bold mt-10 text-white transition transform active:scale-95 outline-0 rounded-lg"
            onClick={goBack}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
            {/* {currentStep === steps.length - 1 ? "Submit" : "Proceed"} */}
          </button>
          <button
            type="button"
            className="w-full flex gap-3 items-center justify-center scale-75 p-3 btn-sp font-bold mt-10 text-white transition transform active:scale-95 outline-0 text-lg rounded-lg"
            onClick={handleNext}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ApplicationForm;
