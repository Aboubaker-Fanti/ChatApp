import React, { useState, useEffect, useRef } from "react";
import Navbar from '../../components/Navbar';

export default function Sitting() {
  
    const defaultUsers = [
        {
          id: '1',
          name: 'Alex Thompson',
          avatar: '/api/placeholder/80/80',
          description: 'Digital artist & designer'
        },
    ];  
        let users = defaultUsers

          const [selectedUser, setSelectedUser] = useState(users.length > 0 ? users[0] : defaultUsers[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-orange-700 flex items-center justify-center p-4">
      <div className="flex justify-between w-full h-[750px] mx-[15%] max-w-1xl aspect-video bg-gray-900/60 backdrop-blur-sm rounded-3xl p-6 overflow-hidden">

    <div className="flex h-[100%] rounded-3xl w-[100%] bg-gradient-to-b from-red-900 via-purple-900 to-blue-900">

        <div className="w-full  py-8 rounded-3xl  backdrop-blur-md border-0">
          <div className="p-6">
            <h2 className="text-2xl w-full py-7 flex items-center justify-center" >Edit Profile</h2>
            <div className="flex flex-col items-center">
              <div className="w-35 h-35 rounded-full cursor-pointer bg-pink-200 overflow-hidden mb-4">
                <img 
                  src="/api/placeholder/80/80" 
                  alt={selectedUser.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h2 className="text-xl py-1 font-semibold text-white mb-2 flex items-center">{selectedUser.name} 
                <span className="ml-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
              </h2>
              <p className="text-white text-center py-9 mb-4 flex items-center">{selectedUser.description}
              <span className="ml-2 cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>              
              </p>
              <button className="w-[25%] p-4 cursor-pointer my-12 rounded-2xl bg-white/15 hover:bg-white/20 text-white">
                Submit changes
              </button>
            </div>
          </div>
        </div>
     
      </div>
  </div>
      <Navbar />
    </div>
  );
}
