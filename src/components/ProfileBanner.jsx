import React from 'react'
import { Link } from 'react-router-dom'
import admin from "../assets/admin.jpg"

function ProfileBanner() {
  return (
    <div className="flex items-center justify-between">
        <div>
            <h2 className="font-extrabold text-2xl text-blue-400">Hello Diran</h2>
            <p>Lets empower your business today</p>
        </div>
        <Link to="/profile"><img src={admin} className="rounded-full w-10 h-10" alt="" /></Link>
    </div>
  )
}

export default ProfileBanner