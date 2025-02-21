import React, { useState, useEffect } from "react";
import image1 from "/src/assets/scrooling/image1.webp";
import image2 from "/src/assets/scrooling/image.webp";
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();

  const scrollSpeed = 1; // Adjust speed if needed
  const images = [
    image1,
    image2,
    "/src/assets/scrooling/image2.webp",
    "/src/assets/scrooling/image3.webp",
    "/src/assets/scrooling/image4.webp",
    "/src/assets/scrooling/image0.webp",
    "/src/assets/scrooling/image5.webp",
    "/src/assets/scrooling/image6.webp",
  ];
  const images1 = [
    "/src/assets/scrooling/image7.webp",
    "/src/assets/scrooling/image8.webp",
    "/src/assets/scrooling/image9.webp",
    "/src/assets/scrooling/image11.webp",
    "/src/assets/scrooling/image12.webp",
    "/src/assets/scrooling/image13.webp",
    "/src/assets/scrooling/image14.webp",

    ];

  // Tripling the images for smooth infinite scroll
  const duplicatedImages = [...images, ...images, ...images];
  const duplicatedImages1 = [...images1, ...images1, ...images1];

  const imageHeight = 750; // Adjust based on container height
  const totalHeight = duplicatedImages.length * imageHeight;

  // Left column scrolls UP normally
  const [scrollPositionLeft, setScrollPositionLeft] = useState(0);

  // Right column starts at the LAST image for seamless looping
  const [scrollPositionRight, setScrollPositionRight] = useState(-totalHeight / 3);

  useEffect(() => {
    const animateScroll = () => {
      setScrollPositionLeft((prev) => prev + scrollSpeed);
      setScrollPositionRight((prev) => {
        if (prev >= 0) {
          return -totalHeight / 3; // Reset for infinite scrolling
        }
        return prev + scrollSpeed;
      });
    };

    const animationFrame = requestAnimationFrame(function scroll() {
      animateScroll();
      requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);
  const handleNavigation = () => {
    console.log("hello we are form here ")
    // Navigate to the "About" page when the button is clicked
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-orange-700 flex items-center justify-center p-4">
      <div className="relative w-full h-[750px] mx-[15%] max-w-1xl aspect-video bg-gray-900/60 backdrop-blur-sm rounded-3xl p-6 overflow-hidden">
        <div className="flex gap-4 h-full">
          {/* Left Column (scrolling UP normally) */}
          <div className="relative flex-1 overflow-hidden m-[5px] rounded-2xl bg-gradient-to-b from-amber-200 to-amber-100">
            <div
              className="absolute w-full flex flex-col"
              style={{ transform: `translateY(-${scrollPositionLeft}px)` }} // Moves images UP
            >
              {duplicatedImages.map((img, index) => (
                <div key={`left-${index}`} className="w-full overflow-hidden">
                  <img src={img} alt={`Profile ${index + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (scrolling DOWN seamlessly) */}
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-b m-[5px] from-rose-200 to-rose-100">
            <div
              className="absolute w-full flex flex-col"
              style={{ transform: `translateY(${scrollPositionRight}px)` }} // Moves images DOWN
            >
              {duplicatedImages1.map((img, index) => (
                <div key={`right-${index}`} className="w-full overflow-hidden">
                  <img src={img} alt={`Profile ${index + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Button */}
        <button  onClick={handleNavigation} className="absolute bottom-25 pr-[2em] text-[24px] left-1/2 -translate-x-1/2 bg-black/45 hover:bg-black/100 backdrop-blur-sm text-white px-6 cursor-pointer py-3 rounded-full flex items-center gap-2 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-square-heart" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
          {/* <span className="w-5 h-5 mr-[10px] ml-[15px] bg-green-400 rounded-full animate-pulse" /> */}
          START CHAT RIGHT NOW
        </button>

        {/* Control Icons */}
      </div>
      <div className="absolute -bottom-0 mb-3 left-1/2 -translate-x-1/2 flex gap-4 ">
        <button onClick={handleNavigation} className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
                <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
            </svg>        
        </button>
        <button onClick={handleNavigation} className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-al shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>
        </button>
        <button onClick={handleNavigation} className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
        </button>

      </div>
    </div>
  );
}
