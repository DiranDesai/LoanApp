import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import NotifyDialog from '../components/NotifyDialog'
import Personalnformation from '../components/Personalnformation'

function ApplyLoan() {
  return (
    <>
        <div className="p-5">
          <Personalnformation />
        </div>
        <BottomNavigation />
        {/* <NotifyDialog message="Something went wrong..."/> */}
    </>
  )
}

export default ApplyLoan