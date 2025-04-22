import React from "react";

function PersonalInformation() {
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
      <div className="border-b my-4"></div>
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
      <div className="border-b my-4"></div>
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
      <div className="border-b my-4"></div>
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Birthday</p>
        </div>
        <div className="col-span-4">
          <input type="date" maxLength={2} className="border " />
        </div>
      </div>
      <div className="border-b my-4"></div>
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>District</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1">
            <option value="shibuyunji district">shibuyunji district</option>
            <option value="mumbwa district">mumbwa district</option>
          </select>
        </div>
      </div>
      <div className="border-b my-4"></div>
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Sector</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1"></select>
        </div>
      </div>
      <div className="border-b my-4"></div>
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Monthly income</p>
        </div>
        <div className="col-span-4">
          <select name="" id="" className="border w-full p-1"></select>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
