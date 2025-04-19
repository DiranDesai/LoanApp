import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import LoanBanner from '../components/LoanBanner'
import ProfileBanner from '../components/ProfileBanner'

function Home() {
  return (
    <>
      <div className="px-5 pt-2 pb-8">
        <ProfileBanner />
        <LoanBanner />
      </div>
      <BottomNavigation />
    </>
  )
}

export default Home