import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import Personalnformation from '../components/Personalnformation'

function ApplyLoan() {
  return (
    <>
        <div className="p-5">
          <Personalnformation />
        </div>
        <BottomNavigation />
    </>
  )
}

export default ApplyLoan