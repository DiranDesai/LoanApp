import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'

function LoanItem({name, icon: Icon}){
    return (
        <div className="loan-item flex flex-col items-center">
            <div className="icon w-15 rounded-md h-13 p-4 transition transform active:scale-95">
                <button type="button"><Icon className="w-7 h-7 font-bold text-[#F44336]" /></button>
            </div>
            <h2 className="font-bold text-sm text-[#18263f] text-center mt-2">{name}</h2>
        </div>
    )
}

function LoanOptions() {
  return (
    <div className="mt-7">
        <h2 className="font-bold mb-2">Quick Actions</h2>
        <div className="loan-options flex justify-between">
        <LoanItem name="Repay" icon={CalendarDaysIcon} />
        <LoanItem name="Installements" icon={EnvelopeOpenIcon} />
        <LoanItem name="Transactions" icon={CurrencyDollarIcon} />
        </div>
    </div>
  )
}

export default LoanOptions