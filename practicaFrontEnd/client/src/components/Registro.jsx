import axios from 'axios'
import { useState } from 'react'

function Registro() {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [sexo, setSexo] = useState("")

    const registrarUsuario = async () => {

        const respuesta = await axios.post("http://localhost:3000/users/registro", {

            nombre, contraseña, sexo
        })
        if (respuesta.status === 201) {
            alert("Salio todo bien")
            setNombre("")
            setContraseña("")
            setSexo("")
        }
    }
    return (
        <>
            <input type="text" placeholder='nombre' value={nombre} onChange={(event) => { setNombre(event.target.value) }}></input>
            <input type="text" placeholder='contraseña' value={contraseña} onChange={(event) => { setContraseña(event.target.value) }}></input>
            <input type="text" placeholder="sexo" value={sexo} onChange={(event) => { setSexo(event.target.value) }}></input>
            <button onClick={registrarUsuario}>registrarse</button>
        </>
    )
}
export default Registro