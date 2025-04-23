import React from 'react'
import { useFormContext } from "../context/FormContext";


function ReviewSubmit() {
  const { formData } = useFormContext();
  const { personalInfo, loanInfo, employmentInfo } = formData;

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p>Name: {personalInfo.fullName.firstName} {personalInfo.fullName.lastName}</p>
        <p>NRC: {personalInfo.nrc.firstPart} {personalInfo.nrc.secondPart} {personalInfo.nrc.thirdPart}</p>
      </div>
    </div>
  )
}

export default ReviewSubmit