import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import NotifyDialog from '../components/NotifyDialog'
import ApplicationForm from '../components/ApplicationForm'

function ApplyLoan() {
  return (
    <>
        <div className="p-5">
          <ApplicationForm />
        </div>
        <BottomNavigation />
        {/* <NotifyDialog message="Something went wrong..."/> */}
    </>
  )
}

export default ApplyLoan