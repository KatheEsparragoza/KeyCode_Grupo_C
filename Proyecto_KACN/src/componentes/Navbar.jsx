import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Componente principal de la barra de navegación
const Navbar = () => {
  // Estado que controla si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // Referencia para el elemento del menú desplegable
  const dropdownRef = useRef(null);

  // Este efecto se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función que se ejecuta cuando se hace clic fuera del menú desplegable
    const handleClickOutside = (event) => {
      // Verifica si el clic fue fuera del dropdownRef
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú desplegable
      }
    };

    // Añade el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside);
    // Limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // El segundo argumento vacío significa que este efecto solo se ejecuta una vez al montarse

  // Función para alternar la visibilidad del menú desplegable
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-customGray p-4"> {/* Estilo de fondo y padding */}
      <div className="container mx-auto flex justify-between items-center"> {/* Contenedor centralizado */}
        {/* Menú de navegación alineado a la izquierda */}
        <ul className="flex space-x-8"> {/* Lista horizontal con espacios entre elementos */}
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/contact">Contactos</NavItem>
          <NavItem to="/KACN">KACN</NavItem>
          {/* Sección de Servicios con submenú */}
          <li ref={dropdownRef} className="relative"> {/* Referencia para el menú desplegable */}
            <button
              onClick={toggleDropdown} // Alterna el estado del menú al hacer clic
              className="text-customBrownDark hover:text-customPink focus:outline-none"
            >
              Categorias
            </button>
            {isOpen && ( // Si isOpen es verdadero, muestra el submenú
              <ul className="absolute left-0 mt-2 w-48 bg-red-100 rounded-lg shadow-lg z-10">
                <SubNavItem to="/services/shampoos">Champús</SubNavItem>
                <SubNavItem to="/services/conditioner">Acondicionador</SubNavItem>
                <SubNavItem to="/services/treatments">Tratamientos</SubNavItem>
                <SubNavItem to="/services/accessories">Accesorios para el cabello</SubNavItem>
              </ul>
            )}
          </li>
        </ul>
        {/* Título de la tienda alineado a la derecha */}
        <h1 className="text-customBrownDark text-xl font-bold">KACN</h1>
      </div>
    </nav>
  );
};

// Componente para los elementos de navegación principales
const NavItem = ({ to, children }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? "font-bold text-customPink" : "text-customBrownDark hover:text-customPink"
      }
    >
      {children}
    </NavLink>
  </li>
);

// Componente para los elementos de navegación del submenú
const SubNavItem = ({ to, children }) => (
  <li className="px-4 py-2 hover:bg-customBrownLight">
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? "font-bold text-customPink" : "text-customBrownDark hover:text-customPink"
      }
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar; // Exporta el componente Navbar para su uso en otras partes de la aplicación
