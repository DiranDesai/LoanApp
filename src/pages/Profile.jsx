import React from 'react'
import {CheckBadgeIcon, LockClosedIcon, UserGroupIcon, InformationCircleIcon, ShoppingBagIcon, CalendarDaysIcon, PencilSquareIcon, ArrowRightOnRectangleIcon  } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'
import profilePic from '../assets/profile.avif'
import ProfileMenu from '../components/ProfileMenu';
import BottomNavigation from '../components/BottomNavigation';

function Profile() {
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    navigate('/login')
  }

  return (
    <>
      <div className="px-2 profile-page max-w-[700px] rounded-md mx-auto mt-5 pt-2 pb-8">
        <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col justify-center items-center space-y-1">
               <div className="relative">
                <img src={profilePic} className="w-[120px] h-[120px] object-cover mt-5 rounded-full" alt="" />
                <PencilSquareIcon className="h-7 w-7 font-bold bg-blue-400 text-white rounded-full p-2 hover:bg-red absolute right-0 top-5" />
               </div>
                <h2 className="text-md font-[500]">Oladele Joshua</h2>
                <p className="font-bold text-xl font-bold bg-blue-400 text-white scale-75 p-2 rounded-md">Mechnical Engineer</p>
                
            </div>
        </div>
        <ProfileMenu Icon={<CheckBadgeIcon />} title="Credit limit"/>
        <ProfileMenu Icon={<CalendarDaysIcon />} title="Bank cards"/>
        <ProfileMenu Icon={<UserGroupIcon />} title="Invite friends"/>
        <ProfileMenu Icon={<LockClosedIcon />} title="Account settings"/>
        <ProfileMenu Icon={<InformationCircleIcon />} title="Help and feedback"/>
        <ProfileMenu Icon={<ShoppingBagIcon />} title="Online services"/>
        <button className="bg-red-400 text-white p-4 rounded-md w-full my-10 flex justify-center gap-3 font-bold" onClick={handleSignOut}>Logout <ArrowRightOnRectangleIcon className="h-6 w-6 text-white" /></button>
    </div>
    <BottomNavigation />
    </>
  )
}

export default Profile