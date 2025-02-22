import React, { useState, useEffect, useRef } from "react";
import Navbar from '../../components/Navbar';
import image1 from "/src/assets/scrooling/image1.webp";
import image2 from "/src/assets/scrooling/image.webp";
import { useNavigate } from 'react-router-dom';
import '../../css/home.css';

export default function Chat() {
    const navigate = useNavigate();
    
    const sittingNavigation = () => {
      console.log("hello we are form here ")
      // Navigate to the "About" page when the button is clicked
      navigate("/sitting");
    };
    const homeNavigation = () => {
      console.log("hello we are form here ")
      // Navigate to the "About" page when the button is clicked
      navigate("/home");
    };
    

  const [message, setMessage] = useState('');
  const [activeConversation, setActiveConversation] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const chatContainerRef = useRef(null);

  // Sample user data
  const currentUser = {
    id: 1,
    name: 'Your Name',
    avatar: '/api/placeholder/40/40'
  };

  // Sample contacts with conversation data
  const contacts = [
    {
      id: 3,
      name: "David Rodriguez",
      avatar: '/api/placeholder/40/40',
      status: 'offline',
      lastSeen: 'Last seen 2h ago',
      lastMessage: "I'll send you the project files tomorrow morning.",
      lastMessageTime: '3:45 PM',
      conversation: [
        {
          id: 1,
          senderId: 3,
          text: "Hey, how's the project coming along?",
          timestamp: '3:30 PM'
        },
        {
          id: 2,
          senderId: 1,
          text: "Making good progress! I just need those reference files you mentioned.",
          timestamp: '3:32 PM'
        },
        {
          id: 3,
          senderId: 3,
          text: "Great to hear! Let me find them for you.",
          timestamp: '3:35 PM'
        },
        {
          id: 4,
          senderId: 3,
          image: '/api/placeholder/600/400',
          timestamp: '3:40 PM'
        },
        {
          id: 5,
          senderId: 3,
          text: "Here's a preview of what I found. I have more in the archive.",
          timestamp: '3:41 PM'
        },
        {
          id: 6,
          senderId: 1,
          text: "Perfect! Can you send all of them when you get a chance?",
          timestamp: '3:44 PM'
        },
        {
          id: 7,
          senderId: 3,
          text: "I'll send you the project files tomorrow morning.",
          timestamp: '3:45 PM'
        }
      ],
      attachments: [
        '/api/placeholder/200/200',
        '/api/placeholder/200/200'
      ]
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: '/api/placeholder/40/40',
      status: 'online',
      lastSeen: 'Active now',
      lastMessage: "The meeting is confirmed for 2 PM tomorrow.",
      lastMessageTime: '9:15 AM',
      conversation: [
        {
          id: 1,
          senderId: 4,
          text: "Good morning! Are we still on for the team meeting tomorrow?",
          timestamp: '9:05 AM'
        },
        {
          id: 2,
          senderId: 1,
          text: "Morning Emma! Yes, I was just about to check with you.",
          timestamp: '9:07 AM'
        },
        {
          id: 3,
          senderId: 4,
          text: "Great! I've prepared the slides for my section.",
          timestamp: '9:10 AM'
        },
        {
          id: 4,
          senderId: 4,
          image: '/api/placeholder/600/400',
          timestamp: '9:11 AM'
        },
        {
          id: 5,
          senderId: 1,
          text: "Looks good! What time works best for everyone?",
          timestamp: '9:13 AM'
        },
        {
          id: 6,
          senderId: 4,
          text: "The meeting is confirmed for 2 PM tomorrow.",
          timestamp: '9:15 AM'
        }
      ],
      attachments: [
        '/api/placeholder/200/200',
        '/api/placeholder/200/200',
        '/api/placeholder/200/200'
      ]
    },
    {
      id: 5,
      name: "Michael Chen",
      avatar: '/api/placeholder/40/40',
      status: 'offline',
      lastSeen: 'Last seen yesterday',
      lastMessage: "I found that book I was telling you about!",
      lastMessageTime: 'Yesterday',
      conversation: [
        {
          id: 1,
          senderId: 5,
          text: "Hey, remember that book I mentioned last week?",
          timestamp: 'Yesterday, 4:30 PM'
        },
        {
          id: 2,
          senderId: 1,
          text: "The one about design principles? Yes, did you find it?",
          timestamp: 'Yesterday, 4:33 PM'
        },
        {
          id: 3,
          senderId: 5,
          text: "I found that book I was telling you about!",
          timestamp: 'Yesterday, 4:35 PM'
        },
        {
          id: 4,
          senderId: 5,
          image: '/api/placeholder/600/400',
          timestamp: 'Yesterday, 4:36 PM'
        }
      ],
      attachments: [
        '/api/placeholder/200/200'
      ]
    }
  ];


  // Get active contact
  const activeContact = contacts.find(contact => contact.id === activeConversation);
  
  // Get current conversation
  const [chatHistory, setChatHistory] = useState(
    activeContact ? [...activeContact.conversation] : []
  );

  // Update chat history when active conversation changes
  useEffect(() => {
    if (activeContact) {
      setChatHistory([...activeContact.conversation]);
    }
  }, [activeConversation]);

  // Auto-scroll to bottom when new messages are added or conversation changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, activeConversation]);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        senderId: currentUser.id,
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      // Update local chat history
      const updatedChat = [...chatHistory, newMessage];
      setChatHistory(updatedChat);
      
      // Update in contacts data structure (in a real app, this would be handled by a state manager)
      const updatedContacts = contacts.map(contact => {
        if (contact.id === activeConversation) {
          return {
            ...contact,
            conversation: updatedChat,
            lastMessage: message,
            lastMessageTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        }
        return contact;
      });
      
      setMessage('');
    }
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-orange-700 flex items-center justify-center p-4">
      <div className="flex justify-between w-full h-[750px] mx-[15%] max-w-1xl aspect-video bg-gray-900/60 backdrop-blur-sm rounded-3xl p-6 overflow-hidden">
     
      <div className=" rounded-tl-3xl rounded-bl-3xl  w-64 mr-3 h-full bg-black rounded-l-lg flex flex-col">
        <div className="p-3 border-b border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-3 pl-8 text-sm"
            />
            <svg
              className="absolute left-2 top-2 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        <div className=" flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-3 hover:bg-gray-700 cursor-pointer ${
                activeConversation === contact.id ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveConversation(contact.id)}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <h3 className="text-white text-sm font-medium">
                  {contact.name}
                </h3>
                <p className="text-gray-400 text-xs truncate w-32">
                  {contact.lastMessage}
                </p>
              </div>
              <span className="text-gray-500 text-xs">{contact.lastMessageTime}</span>
            </div>
          ))}
        </div>
      </div>





      <div className="flex-1 mr-2 flex flex-col rounded-tr-3xl rounded-br-3xl bg-black    border-gray-300">
        {activeContact && (
          <>
            {/* Chat header */}
            <div className="flex items-center p-3 bg-black border-b border-gray-300">
              <img
                src={activeContact.avatar}
                alt={activeContact.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <h3 className="font-medium">{activeContact.name}</h3>
                <p className={`text-xs ${activeContact.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
                  {activeContact.status === 'online' ? 'Online' : activeContact.lastSeen}
                </p>
              </div>
              <div className="flex gap-3">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat messages area with scroll */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {chatHistory.map((msg) => {
                const isSentByMe = msg.senderId === currentUser.id;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isSentByMe ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isSentByMe && (
                      <img
                        src={activeContact.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full mr-2 self-end"
                      />
                    )}
                    <div
                      className={`max-w-xs ${
                        isSentByMe
                          ? 'bg-purple-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                          : 'bg-red-500 text-white rounded-tr-lg rounded-br-lg rounded-bl-lg'
                      } px-4 py-2 shadow`}
                    >
                      {msg.text && <p className="text-sm">{msg.text}</p>}
                      {msg.image && (
                        <img
                          src={msg.image}
                          alt="Shared content"
                          className="rounded-md mt-1 mb-1 max-w-full cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImageModal(msg.image)}
                        />
                      )}
                      <p className="text-xs opacity-75 text-right mt-1">
                        {msg.timestamp}
                      </p>
                    </div>
                    {isSentByMe && (
                      <img
                        src={currentUser.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full ml-2 self-end"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Message input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-300 p-3 bg-black flex items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 mx-1"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 py-2 px-3 rounded-full bg-black-300 focus:outline-none focus:ring-1 focus:ring-red-500 mx-2"
              />
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 mx-1"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 ml-1"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </>
        )}
      </div>



      {activeContact && (
        <div className="w-64  bg-black rounded-tr-3xl  rounded-br-3xl  border-gray-300 flex flex-col">
          {/* User info section */}
          <div className="p-4 flex flex-col items-center border-b border-gray-200">
            <img
              src={activeContact.avatar}
              alt={activeContact.name}
              className="w-20 h-20 rounded-full mb-3"
            />
            <h2 className="font-medium text-lg">{activeContact.name}</h2>
            <p className={`text-sm ${activeContact.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
              {activeContact.status === 'online' ? 'Online' : activeContact.lastSeen}
            </p>
            <div className="flex mt-4 space-x-2">
              <button className="bg-gray-100 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
              <button className="bg-gray-100 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="bg-gray-100 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Attachments section */}
          <div className="p-4">
            <h3 className="font-medium mb-3">Attachments</h3>
            <div className="grid grid-cols-3 gap-2">
              {activeContact.attachments.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Attachment ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImageModal(src)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal/Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-screen p-2">
            <button 
              className="absolute top-0 right-0 -mt-12 -mr-12 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600"
              onClick={closeImageModal}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-screen max-w-full object-contain"
            />
          </div>
        </div>
      )}
         
      </div>

      {/* <div className="absolute left-[5%]   h-full  justify-around  flex items-center flex-col gap-4 ">
        <div className=" mb-50   flex flex-col gap-4 ">
            <div className="w-19 h-19 rounded-full bg-pink-200 overflow-hidden mb-4">
              <img 
                src="/api/placeholder/80/80" 
                alt= "name" 
                className="w-full h-full object-cover" 
              />
            </div>
        </div>
        <div className="absolute  flex flex-col gap-4 ">
          <button onClick={homeNavigation} className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
                  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
              </svg>        
          </button>
          <button onClick={sittingNavigation} className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-al shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>
          </button>
          <button  className="p-5 my-4 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          <button onClick={() => navigate("/login")} className="p-5 bg-black hover:bg-black/70 rounded-lg backdrop-blur-sm transition-all shadow-lg shadow-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
          </button>

        </div>
  
      </div> */} 
      <Navbar />

    </div>
  );
}
