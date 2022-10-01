import { useState, useEffect } from "react";
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {

  ///aqui se define el estado 

  const [nombre, setNombre ] =useState('');
  const [propietario, setPropietario ] =useState('');
  const [email, setEmail ] =useState('');
  const [fecha, setFecha ] =useState('');
  const [sintomas, setSintomas ] =useState('');
  const [error, setError]= useState(false);

  const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)
      return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //validación del formulario

    if([nombre,propietario, email,fecha,sintomas].includes('')) {
            console.log('Hay un campo vacio')
            setError(true)

              return;
    } 

      setError(false)

      //ojbeto paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id: generarId()
      }

      setPacientes([...pacientes,objetoPaciente]) //va a enviar a APP el nombre del formulario
    
      //REINICIAR FORMULARIO
      setNombre ('')
      setPropietario ('')
      setEmail('')
      setFecha('')
      setSintomas('')


    }
  

  //console.log(nombre);

  //aqui se puede asignar o establecer el valor al useState
  //setNombre('Firulais')

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Peluditos y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        
        {error && <Error><p>Todos los campos son obilgatorios</p> </Error>}
        
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del peludo
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre del peludo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}  //proviene del hook (linea 7)
            onChange={(e) => setNombre(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}  //proviene del hook (linea 8)
            onChange={(e) => setPropietario(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email de contacto del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}  //proviene del hook (linea 8)
            onChange={(e) => setEmail(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}  //proviene del hook (linea 7)
            onChange={(e) => setFecha(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}  //proviene del hook (linea 7)
            onChange={(e) => setSintomas(e.target.value) } 
          ></textarea>
        </div>
        
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
          value='Agregar Paciente'
           
        />
      </form>
    
    </div>
  );
};

export default Formulario;
