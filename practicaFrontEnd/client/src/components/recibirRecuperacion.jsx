import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function RecibirRecuperacion() {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState('')

    const recibir = async () => {

        try {
            const respuesta = await axios.post("http://localhost:3000/users/recibirCodigo", {
                nombre
            })
            console.log(respuesta.data);
            alert(respuesta.data.informacion);
            const codigo = document.getElementById("codigo")
            codigo.textContent = respuesta.data.informacion
        } catch (error) {
            alert("error al recibir", error.response.data.message)
        }

    }


    return (
        <>

            <input type="text" placeholder="escriba el nombre de la cuenta que desea recuperar"
                onChange={(event) => { setNombre(event.target.value) }}
            ></input>
            <button onClick={recibir}> recibir codigo de recuperacion </button>
            <h4 id="codigo"></h4>
        </>
    )


}

export default RecibirRecuperacion