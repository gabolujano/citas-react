//rafc
import Paciente from "./Paciente";

//proviene del listado de pacientes
const ListadoPacientes = ({pacientes}) => {

console.log("HOLA!!!!!");
//console.log(pacientes.lenght);

  //    {pacientes.lenght ? "Si hay pacientes": "No hay Pacientes"}

  return ( 
    <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-5 overflow-y-scroll">



      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
      </p>

    {pacientes.map( paciente => (
//es solo un objeto llamado paciente que contiene toda la info
//como nombre, mascota, fecha, etc.

      <Paciente 
        key = {paciente.id}
        paciente= {paciente}
      />
                                    ) 
                  )
    }
    
    </div>
  );
};

export default ListadoPacientes;
