import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Registro from './components/Registro.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'
function App() {
  const utilizarServicio = async()=>{
try{



    const token = localStorage.getItem('token')
const respuesta = await axios.post('http://localhost:3000/users/servicio',{},{

headers: {
authorization : token

}
})
alert(respuesta.data.message)
}catch(error){

alert(error.response.data.message)

}


     }
    

   const logout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    alert('sesion cerrada')
    navigate('/login');
  };
const [isLogged, setIsLogged] = useState(false);
useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    setIsLogged(true);
  }
}, []);


const isDeletedTrue = async()=>{
const token = localStorage.getItem('token');
const respuesta = await axios.patch('http://localhost:3000/users/desactivacion',{},{
  headers: {
              authorization: token
            }
})
alert(respuesta.data.message)
}


  return (
    <>

 <h1>Bienvenido</h1>
 {!isLogged && (
<>
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
      </>
 )}
     
      {isLogged && (
        <>
          <button onClick={logout}>logout</button>
          <button onClick={isDeletedTrue}>desactivar cuenta</button>
          <button onClick = {utilizarServicio}> utilizar servicio </button>
        </>
      )}

<Routes>
<Route element = {<Login setIsLogged={setIsLogged}></Login>} path = "/login" />
<Route element = {<Registro></Registro>} path = "/registro" />

</Routes>

    </>
  )
}
export default App
