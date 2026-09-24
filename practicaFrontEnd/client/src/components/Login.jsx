import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login({setIsLogged}){
const [nombre, setNombre] = useState("")
const [contraseña, setContraseña] =useState("")
const navigate = useNavigate()

const loguear = async() =>{

    try{
const respuesta = await axios.post('http://localhost:3000/users/login',{
    nombre, contraseña
})
console.log(respuesta)
if(respuesta.data.token){

alert("login exitoso")
localStorage.setItem('token', respuesta.data.token)
setIsLogged(true);
}

navigate("/")

    }
catch(error){
    alert(error.response.data.message)
}

}

return (

<>
<input type= "text" placeholder="nombre" value = {nombre} onChange= {(event) =>{setNombre(event.target.value)}} ></input>
<input type = "text" placeholder= "contraseña" value= {contraseña}  onChange={(event) =>{setContraseña(event.target.value)}}></input>
<button onClick= {loguear}>Loguearse</button>
</>

)

}

export default Login