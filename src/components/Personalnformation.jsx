import React from 'react'

function Personalnformation() {
  return (
    <div className="shadow-lg p-5 personal-information">
        <h2 className="text-2xl font-bold text-[#333]">Personal Information</h2>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>NRC</p>
            </div>
            <div className="col-span-3 grid grid-cols-8 space-x-9">
                <div className="col-span-3">
                    <input type="text" className="border" />
                </div>
                <div className="col-span-3">
                    <input type="text" className="border " />
                </div>
                <div className="col-span-2">
                    <input type="text" className="border" />
                </div>
            </div>
        </div>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>Full names</p>
            </div>
            <div className="grid space-y-5 col-span-3">
                <div className="col-span-3">
                    <input type="text" className="border" />
                </div>
                <div className="col-span-3">
                    <input type="text" className="border" />
                </div>
            </div>
        </div>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>Gender</p>
            </div>
            <div className="grid grid-cols-2 col-span-3">
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
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>Birthday</p>
            </div>
            <div className="col-span-3">
                <select name="" id="" className="border w-full p-1"></select>
            </div>
        </div>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>District</p>
            </div>
            <div className="col-span-3">
                <select name="" id="" className="border w-full p-1"></select>
            </div>
        </div>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>Sector</p>
            </div>
            <div className="col-span-3">
                <select name="" id="" className="border w-full p-1"></select>
            </div>
        </div>
        <div className="border-b my-4"></div>
        <div className="grid grid-cols-5 gap-5 mt-3">
            <div className="col-span-2">
                <p>Monthly income</p>
            </div>
            <div className="col-span-3">
                <select name="" id="" className="border w-full p-1"></select>
            </div>
        </div>
        <button type="button" className="w-full p-3 bg-red-400 font-bold mt-10 text-white">Submit Application</button>
    </div>
  )
}

export default Personalnformation