import React, { useEffect, useState } from "react";
import BorderLine from "./BorderLine";
import { zambiaDistricts } from '../data/main'
import { useFormContext } from "../context/FormContext";


const provinces = Object.keys(zambiaDistricts);

console.log(provinces)

function PersonalInformation() {
  const { formData, updateFormData } = useFormContext();
  const [nrc, setNrc] = useState(formData.personalInfo?.nrc || {
    firstPart: "",
    secondPart: "",
    thirdPart: "",
  });
  const [fullName, setFullName] = useState(formData.personalInfo?.fullName || {
    firstName: "",
    lastName: "",
  });

  const [gender, setGender] = useState(formData.personalInfo?.gender || "");
  const [dob, setDob] = useState(formData.personalInfo?.dob || "");
  const [province, setProvince] = useState(formData.personalInfo?.province || provinces[0]);
  const [district, setDistrict] = useState(formData.personalInfo?.district || "");

  
  useEffect(() => {
    updateFormData("personalInfo", {
      nrc,
      fullName,
      gender,
      dob,
      province,
      district,
    });
  }, [nrc, fullName, gender, dob, province, district])

  return (
    <>
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>NRC</p>
        </div>
        <div className="col-span-4 grid grid-cols-8 space-x-3">
          <div className="col-span-3">
            <input type="number" maxLength={6} className="border" value={nrc.firstPart}  onChange={(e) => setNrc({ ...nrc, firstPart: e.target.value })} />
          </div>
          <div className="col-span-3">
            <input type="number" maxLength={2} className="border" value={nrc.secondPart} onChange={(e) => setNrc({ ...nrc, secondPart: e.target.value })} />
          </div>
          <div className="col-span-2">
            <input type="number" maxLength={2} className="border" value={nrc.thirdPart} onChange={(e) => setNrc({ ...nrc, thirdPart: e.target.value })} />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Full names</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div className="col-span-3">
            <input type="text" className="border" value={fullName.firstName} onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })} />
          </div>
          <div className="col-span-3">
            <input type="text" className="border" value={fullName.lastName} onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })} />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Gender</p>
        </div>
        <div className="grid grid-cols-2 col-span-4">
          <div className="flex items-center">
            <input type="radio" className="border" checked={gender === "Male"}
              onChange={() => setGender("Male")} />
            <span>Male</span>
          </div>
          <div className="flex items-center">
            <input type="radio" className="border" checked={gender === "Female"}
              onChange={() => setGender("Female")} />
            <span>Female</span>
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Birthday</p>
        </div>
        <div className="col-span-4">
          <input type="date" maxLength={2} className="border" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>Province</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1" value={province} onChange={(e) => {
              setProvince(e.target.value);
            }}>
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 items-center items-center gap-5 mt-3">
        <div className="col-span-2">
          <p>District</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1" value={district} onChange={(e) => setDistrict(e.target.value)}>
            {zambiaDistricts[province].map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
