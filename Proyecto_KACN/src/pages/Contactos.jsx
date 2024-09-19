import { Link, Outlet } from "react-router-dom";

export const Contactos = () => {
  return (
    <div>
      Contactos
      <nav className="menu">
        <Link to={"/contactos"}>Información de contactos</Link>  
      </nav>
      {}
      <Outlet />
    </div>
  );
};

