import React, { useState, useEffect, useRef } from "react";
import image1 from "/src/assets/scrooling/image1.webp";
import image2 from "/src/assets/scrooling/image.webp";
import { useNavigate } from 'react-router-dom';




export default function Sitting() {
    const navigate = useNavigate();

    const homeNavigation = () => {
        console.log("hello we are form here ")
        // Navigate to the "About" page when the button is clicked
        navigate("/home");
      };
      const chatNavigation = () => {
        console.log("hello we are form here ")
        // Navigate to the "About" page when the button is clicked
        navigate("/chat");
      };
    
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
      {/* User List */}


      {/* Profile Info */}
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
      <div className="absolute left-[5%]   h-full  justify-around  flex items-center flex-col gap-4 ">
        <div className=" mb-50   flex flex-col gap-4 ">
            <div className="w-19 h-19 rounded-full bg-pink-200 overflow-hidden mb-4">
              <img 
                src="/api/placeholder/80/80" 
                alt={selectedUser.name} 
                className="w-full h-full object-cover" 
              />
            </div>
        </div>
        <div className="absolute  flex flex-col gap-4 ">
          <button  onClick={homeNavigation} className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
                  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
              </svg>        
          </button>
          <button className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-al shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>
          </button>
          <button onClick={chatNavigation} className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          <button onClick={() => navigate("/login")} className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
          </button>

        </div>
  
      </div>

    </div>
  );
}
