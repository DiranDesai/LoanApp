import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function TopBar() {
  return (
    <div>
      <ArrowLeftIcon className="h-7 w-7 font-bold bg-gray-400 text-white rounded-full p-2 hover:bg-red" />
    </div>
  )
}

export default TopBar