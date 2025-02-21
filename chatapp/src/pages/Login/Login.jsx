import React, { useState, useEffect, useRef } from "react";
import image1 from "/src/assets/scrooling/image1.webp";
import image2 from "/src/assets/scrooling/image.webp";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function handle(e){
      e.preventDefault();
      console.log(username, "  ", password);
      navigate("/home");

    //   onSubmit(username, password);
  };

  const handleNavigation = () => {
    console.log("hello we are form here ")
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-orange-700 flex items-center justify-center p-4">

      <div className="flex justify-between w-full h-[750px] mx-[15%] max-w-1xl aspect-video bg-gray-900/60 backdrop-blur-sm rounded-3xl p-6 overflow-hidden">
          <button onClick={handleNavigation} className="absolute p-2 bg-black hover:bg-black/70 rounded-lg w-12 h-12 backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
              </svg>        
          </button>
     
            <div className=" bg-red-600/30 rounded-full blur-3xl mr-3" />
            
            <div className=" flex flex-col items-center justify-center w-1/2   rounded-xl p-8 shadow-xl">
              <h1 className="text-3xl flex justify-center font-bold mb-1 text-[#98FB98]">Welcom Back</h1>
              <p className="text-[#98FB98]/80  flex items-center justify-center text-sm mb-8">login to your account</p>
              
              <form  className=" z-15 flex items-center justify-center">
                <div className="space-y-4">
                  <div className="relative mb-10">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full pl-12 pr-12 py-3 bg-gray-700/50 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#98FB98]/50"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative mb-10">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-12 pr-12 py-3 bg-gray-700/50 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#98FB98]/50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  <button onClick={(e) => handle(e)} 
                    className="w-full py-3 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg text-white font-medium transition-colors"
                  >
                    Login
                  </button>
                </div>
              </form>
              
              <p className="mt-6 text-center text-gray-400">
                Don't have account?{' '}
                <a onClick={() => navigate("/register")} className="text-[#98FB98] cursor-pointer hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
    
            {/* Character Image */}
            <div className="h-full  w-1/2 justify-center ml-3">
              <img
                src="/src/assets/images/bird.webp"
                alt="Cute character"
                className="w-full h-full object-contain animate-bounce-slow"
              />
            </div>
    
            {/* Back button */}

     
      </div>
      <div className="absolute -bottom-0 mb-3 left-1/2 -translate-x-1/2 flex gap-4 ">
        <button className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
          </svg>
        </button>
        <button className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-al shadow-lg shadow-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
        </button>
        <button className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </button>

      </div>

    </div>
  );
}
