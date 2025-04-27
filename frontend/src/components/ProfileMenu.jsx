import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BorderLine from './BorderLine';

function ProfileMenu({Icon, title, ShowArrow=true}) {
  return (
    <div className="flex align-center justify-between mt-4 bg-white p-4 rounded-md hover:shadow-md cursor-pointer transition duration-200 ease-in-out">
        <div className='flex align-center space-x-2'>
            <span className="w-6 h-6 lg:w-10 lg:h-10 self-center">{Icon}</span>
            <h2 className="text-[16px] text-[#181818] font-[500] self-center">{title}</h2>
        </div>
        {ShowArrow ? <ArrowRightIcon  className="h-6 w-6 font-bold text-gray-500 self-center" /> : <p className="font-extrabold">150</p>}  
    </div>
  )
}


export default ProfileMenu