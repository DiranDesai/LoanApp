import React from 'react'
import BorderLine from './BorderLine'


function EmploymentInformation() {
  return (
    <>
      <div className="grid grid-cols-6 opacity-100 translate-x-0 gap-5 mt-3">
        <div className="col-span-2">
          <p>Employment</p>
        </div>
        <div className="col-span-4 grid">
          <div>
          <select className="border w-full p-1">
          <option value="">Select Employment Status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="unemployed">Unemployed</option>
          </select>
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Company</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div>
            <input type="text" className="border" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Position</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div>
            <input type="text" className="border" />
          </div>
        </div>
      </div>
      <BorderLine />
      <div className="grid grid-cols-6 gap-5 mt-3">
        <div className="col-span-2">
          <p>Monthly income</p>
        </div>
        <div className="grid space-y-5 col-span-4">
          <div>
            <input type="number" className="border" />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmploymentInformation