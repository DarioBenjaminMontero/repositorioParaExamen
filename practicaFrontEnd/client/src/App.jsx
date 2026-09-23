import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Registro from './components/Registro.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'
function App() {
  

   const logout = () => {
    localStorage.removeItem('token');
    alert('sesion cerrada')
    navigate('/login');
    setRefresh("logout")
  };

const isDeletedTrue = async()=>{

const respuesta = await axios.post('http://localhost:3000/users/login',{

  headers: {
                authorization: token
            }

})
alert(respuesta.data.message)
}
  return (
    <>

 <h1>Bienvenido</h1>
     <button>
      <Link to= "/login">
      login
      </Link>
      </button>  
      <button>
      <Link to= "/registro">
      registro
      </Link>
      </button> 
      <button onClick = {logout}>logout</button>

<Routes>
<Route element = {<Login></Login>} path = "/login" />
<Route element = {<Registro></Registro>} path = "/registro" />

</Routes>

    </>
  )
}
export default App
