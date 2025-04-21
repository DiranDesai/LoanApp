import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import Loader from '../components/Loader'
import LoanBanner from '../components/LoanBanner'
import LoanCategory from '../components/LoanCategory'
import LoanOptions from '../components/LoanOptions'
import ProfileBanner from '../components/ProfileBanner'

function Home() {
  return (
    <>
      <div className="px-5 home-page pt-2 pb-8">
        <ProfileBanner />
        <LoanBanner />
        <LoanOptions />
        <LoanCategory />
      </div>
      <BottomNavigation />
      {/* <Loader /> */}
    </>
  )
}

export default Home