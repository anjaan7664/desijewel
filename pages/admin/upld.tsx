import React from 'react'
import { useSession } from "next-auth/react";
const Upload = ()  =>{
  
  const { data: session, status } = useSession();
  const getAdminUpload = async () => {
  }
  return (
    <div>
       <input
      aria-label="perPage"
      name="perPage"
      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:shadow-outline-blue focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
      placeholder="perPage"
    />
    <input
      aria-label="admin"
      name="admin"
      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:shadow-outline-blue focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
      placeholder="admin"
    />
  
    <button
    
      className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-green-800 rounded-lg shadow-xl hover:bg-green-600 hover:text-white"
    >
      Get Design
    </button>
    </div>
  )
}

export default Upload