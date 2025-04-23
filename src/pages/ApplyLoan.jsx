import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import NotifyDialog from '../components/NotifyDialog'
import ApplicationForm from '../components/ApplicationForm'
import { FormProvider } from '../context/FormContext'

function ApplyLoan() {
  return (
    <>
        <div className="px-4 py-2">
          <FormProvider>
            <ApplicationForm />
          </FormProvider>
        </div>
        <BottomNavigation />
        {/* <NotifyDialog message="Something went wrong..."/> */}
    </>
  )
}

export default ApplyLoan