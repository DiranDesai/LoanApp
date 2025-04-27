import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
    {/* <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-white"></div> */}
    <div className="loader"></div>
</div>

  )
}

export default Loader