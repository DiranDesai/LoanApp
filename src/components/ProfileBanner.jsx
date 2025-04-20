import React from 'react'
import { Link } from 'react-router-dom'
import admin from "../assets/admin.jpg"
import user1 from "../assets/user1.png"

function ProfileBanner() {
  return (
    <div className="flex items-center justify-between">
        <div>
            <h2 className="font-extrabold text-2xl text-[rgb(41,51,63)]">Hello Diran</h2>
            <p className="text-[#6f7b87]">Lets empower your business today</p>
        </div>
        <Link to="/profile"><img src={user1} className="rounded-full w-10 h-10" alt="" /></Link>
    </div>
  )
}

export default ProfileBanner