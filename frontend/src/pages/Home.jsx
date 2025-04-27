import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from '../components/BottomNavigation'
import Loader from '../components/Loader'
import LoanBanner from '../components/LoanBanner'
import LoanCategory from '../components/LoanCategory'
import LoanOptions from '../components/LoanOptions'
import ProfileBanner from '../components/ProfileBanner'
import SkeletonPlaceholder from '../components/SkeletonPlaceholder'

function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)


    return () => clearTimeout(timer); // cleanup
  }, [])

  if (loading) {
    return <SkeletonPlaceholder />
  }

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