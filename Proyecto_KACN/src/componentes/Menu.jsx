import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    
    <nav className="menu">      
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/contactos"}
      >
        Contactos
      </NavLink>
      <NavLink to="/Kacn">    
       <button class= "bg-red-100">Ir a Kacn</button>
      </NavLink>

    </nav>
  );
};

export default Menu;