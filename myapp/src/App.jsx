import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Sigup from './components/Sigup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>      
      {/* <Sigup /> */}
      <Navbar />
      <Routes>
        {/* <Route path="/Signup" element={<Signup2 />} /> */}
        {/* <Route path="/l" element={<Login/>}/> */}
        
      </Routes>
      </>
  )
  }

export default App
