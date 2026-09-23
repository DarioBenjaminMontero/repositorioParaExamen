import { useState } from 'react'
import './App.css'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
function App() {


  return (
    <>
    <Link to = "./registro"><button>presioname Registro</button></Link>
      <Link to = "./login"><button>presioname Login</button></Link>
    </>
  )
}

export default App
