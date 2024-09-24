import { Link, Outlet } from "react-router-dom";

export const Contactos = () => {
  return (
    <button class= "bg-red-100" >
      Contactos
      <nav class="bg-red-50">
        <Link to={"/contactos"}>Información de contactos</Link>  
      </nav>
      {}
      <Outlet />
    </button>
  );
};

