import React, { useState } from "react";
import BorderLine from "./BorderLine";
import { zambiaDistricts } from '../data/main'


const provinces = Object.keys(zambiaDistricts);

console.log(provinces)


function PersonalInformation() {
  const [selectedDistrict, setSelectedDistrict] = useState(provinces[0]);

  return (
    <>
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>NRC</p>
        </div>
        <div className="col-span-4 grid grid-cols-8 space-x-3">
          <div className="col-span-3">
            <input type="number" maxLength={6} className="border" />
          </div>
          <div className="col-span-3">
            <input type="number" maxLength={2} className="border " />
          </div>
          <div className="col-span-2">
            <input type="number" maxLength={2} className="border" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Full names</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div className="col-span-3">
            <input type="text" className="border" />
          </div>
          <div className="col-span-3">
            <input type="text" className="border" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Gender</p>
        </div>
        <div className="grid grid-cols-2 col-span-4">
          <div className="flex items-center">
            <input type="checkbox" className="border" />
            <span>Male</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="border" />
            <span>Female</span>
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Birthday</p>
        </div>
        <div className="col-span-4">
          <input type="date" maxLength={2} className="border " />
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Province</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1" onChange={(e) => setSelectedDistrict(e.target.value)}>
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>District</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1">
            {zambiaDistricts[selectedDistrict].map((district, index) => (
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
