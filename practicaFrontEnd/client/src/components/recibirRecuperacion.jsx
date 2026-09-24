import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import axios from 'axios'

function RecibirRecuperacion(){

const [nombre, setNombre] = useState('')

const recibir = async()=>{
const navigate = useNavigate()
try{
    const respuesta = await axios.post("http://localhost:3000/users/recibirCodigo", {
        nombre
    })
console.log(respuesta.data);
        alert(respuesta.data.message);
navigate('/recuperar')
}catch(error){
    alert("error al recibir" , error.response.data.message)
}

}


return (
<>

<input type="text" placeholder="escriba el nombre de la cuenta que desea recuperar"
 onChange={(event) =>{setNombre(event.target.value)}}
></input>
<button onClick={recibir}> recibir codigo de recuperacion </button>
</>
)


}