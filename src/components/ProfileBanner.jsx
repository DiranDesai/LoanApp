import React from 'react'
import { Link } from 'react-router-dom'
import admin from "../assets/admin.jpg"
import user1 from "../assets/user1.png"
import {BellAlertIcon} from '@heroicons/react/24/outline';

function ProfileBanner() {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
            <Link to="/profile"><img src={user1} className="rounded-full w-[60px] h-[60px]" alt="" /></Link>
            <div>
              <p className="text-[#6f7b87]">Happy Monday!</p>
              <h2 className="font-bold text-2xl text-[rgb(41,51,63)]">Hello Diran</h2>
            </div>
        </div>
        <BellAlertIcon className="w-10 h-10"/>
    </div>
  )
}

export default ProfileBanner