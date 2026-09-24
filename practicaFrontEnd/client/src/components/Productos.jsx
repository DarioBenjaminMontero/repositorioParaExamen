import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Productos() {

    // const [producto, setProductos] = useState('')

    const mandarVotos = async (producto) => {

        try {
            const token = localStorage.getItem('token')
            const respuesta = await axios.post('http://localhost:3000/users/productos', {
                producto: producto
            }, {
                headers: {
                    authorization: token
                }
            })
            console.log(respuesta)
        }
        catch (error) {
            alert(error.response.data.message)
        }

    }
    return (

        <>
            <h2>Manzana</h2>
            <button onClick={() => mandarVotos('Manzana')}> votar </button>
            <h2>Pera</h2>
            <button onClick={() => mandarVotos('Pera')}> votar </button>
            <h2>sandia</h2>
            <button onClick={() => mandarVotos('Sandia')}> votar </button>
        </>

    )

}

export default Productos