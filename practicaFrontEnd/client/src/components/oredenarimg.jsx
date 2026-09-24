import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Imagenes() {
    const navigate = useNavigate()
    const [listaImagenes, setListaImagenes] = useState([])
    const ordenar = async (orden,textp) => {

        try {
            const respuesta = await axios.post("http://localhost:3000/users/rec", {
                orden,textp
            }, {
                headers: {
                    authorization: token
                }
            })
             setListaImagenes(respuesta.data.informacion)
        } catch (error) {
            alert("error al recibir", error.response.data.message)
        }

    }
    const pedir = async () => {
        try {
            const resp = await axios.get("http://localhost:3000/users/", {
                headers: {
                    authorization: token
                }
            })
            console.log(resp.data.informacion)
            setListaImagenes(resp.data.informacion)
        }
        catch (error) {

        }
    }


    return (
        <>
            {/* <h4 id="codigo">imagenes</h4>
            <button onClick={ordenar(-1)}>arriba </button>
            <button onClick={ordenar(-1)}>abajo</button>*/
            <button onClick={pedir}>pedir imagenes</button>
            /*<label htmlFor="" id="o"></label> */}
            {
                listaImagenes.map((lista, indice) => {
                    return (<ul>
                        <li>
                            {lista.link}
                            <p></p>
                            <button onClick={() => ordenar(indice, 'subir')} >Subir</button>
                            <button onClick={() => ordenar(indice, 'bajar')} >Bajar</button>
                        </li>
                    </ul>)
                })
            }
        </>
    )


}

export default Imagenes