import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Sitting from "../pages/Sitting/Sitting";
import Main from "../pages/Main/Main";
import Error from "../pages/error/error";
import React from "react";

function Routing() {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sitting" element={<Sitting />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routing;
