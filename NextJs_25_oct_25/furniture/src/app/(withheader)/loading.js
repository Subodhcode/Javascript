import React from 'react'

export default function loading() {
  return (
     <div className="flex items-center justify-center h-[100vh] bg-black">
      
      <div className="w-[60px] text-center">
        
        {/* Loader Wheel */}
        <div className="w-[50px] h-[50px] mb-2 border-2 border-[rgba(30,30,30,0.5)] border-l-4 border-l-white rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="  animate-pulse">
          Loading...
        </p>

      </div>

    </div>
  )
}
