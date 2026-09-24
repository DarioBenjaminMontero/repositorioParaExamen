import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Recuperar() {
  const [nombre, setNombre] = useState('');
  const [token2, setToken] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  
  const navigate = useNavigate();

  const recuperar = async () => {
    try {
      const respuesta = await axios.post("http://localhost:3000/users/recuperar", {
        nombre: nombre,
        tokenRecuperacion: token2,
        nuevaContraseña: nuevaContraseña
      });

      alert(respuesta.data.message);
      navigate('/login'); // Redirige al login tras cambiar la clave
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <input 
        type="text" 
        placeholder="Nombre del usuario" 
        onChange={(event) => setNombre(event.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Token recibido" 
        onChange={(event) => setToken(event.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Nueva contraseña" 
        onChange={(event) => setNuevaContraseña(event.target.value)} 
      />
      <button onClick={recuperar}>Restablecer contraseña</button>
    </div>
  );
}

export default Recuperar;