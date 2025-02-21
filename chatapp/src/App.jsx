import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'; 

import Routing from "./router/Routing";
function App() {

  return (
    <Router>
      <Routing />
    </Router>
  )
}

export default App
