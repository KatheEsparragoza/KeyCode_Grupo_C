import React, { useState, useRef, useEffect } from 'react'; // Importamos React y hooks para manejar estado, referencias y efectos
import { NavLink } from 'react-router-dom'; // Importamos NavLink para crear enlaces de navegación

// Componente principal de la barra de navegación
const Navbar = () => {
  // Estado que controla si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // Referencia para el elemento del menú desplegable, útil para detectar clics fuera 
  const dropdownRef = useRef(null);

  // Este efecto se ejecuta al montar el componente y gestiona clics fuera 
  useEffect(() => {
    // Función que se ejecuta cuando se hace clic fuera del menú desplegable
    const handleClickOutside = (event) => {
      // Verifica si el clic fue fuera del área del menú desplegable
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú si se hace clic fuera de este
      }
    };

    // Añade el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // El efecto solo se ejecuta una vez, al montar el componente

  // Función para alternar la visibilidad del menú desplegable
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent p-4"> {/* Barra de navegación con fondo transparente y padding */}
      <div className="container mx-auto flex justify-between items-center"> {/* Contenedor flexible y centralizado */}
        
        {/* Sección izquierda: Enlaces principales de navegación */}
        <ul className="flex space-x-8"> {/* Lista de elementos de navegación, dispuestos horizontalmente */}
          <NavItem to="/home">Home</NavItem> {/* Enlace a Home */}
          <NavItem to="/contact">Contactos</NavItem> {/* Enlace a Contactos */}
          <NavItem to="/KACN">KACN</NavItem> {/* Enlace a KACN */}

          {/* Menú desplegable de Categorías */}
          <li ref={dropdownRef} className="relative"> {/* Referencia para detectar clics fuera del menú */}
            <button
              onClick={toggleDropdown} // Al hacer clic, alterna el estado abierto/cerrado del menú
              className="text-customBrownDark hover:text-customPink focus:outline-none" // Estilos para el botón
            >
              Categorias
            </button>
            {isOpen && ( // Muestra el menú solo si isOpen es verdadero (está abierto)
              <ul className="absolute left-0 mt-2 w-48 bg-red-100 rounded-lg shadow-lg z-10">
                {/* Opciones dentro del menú desplegable */}
                <SubNavItem to="/services/shampoos">Champús</SubNavItem> {/* Enlace a Champús */}
                <SubNavItem to="/services/conditioner">Acondicionador</SubNavItem> {/* Enlace a Acondicionadores */}
                <SubNavItem to="/services/treatments">Tratamientos</SubNavItem> {/* Enlace a Tratamientos */}
                <SubNavItem to="/services/accessories">Accesorios para el cabello</SubNavItem> {/* Enlace a Accesorios */}
              </ul>
            )}
          </li>
        </ul>
        
        {/* Título de la tienda a la derecha */}
        <h1 className="text-customBrownDark text-xl font-bold">KACN</h1> {/* Título con estilo */}
      </div>
    </nav>
  );
};

// Componente reutilizable para los elementos de navegación principales
const NavItem = ({ to, children }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? "font-bold text-customPink" : "text-customBrownDark hover:text-customPink"
      } // Aplica diferentes estilos según si el enlace está activo o no
    >
      {children} {/* Contenido del enlace (texto) */}
    </NavLink>
  </li>
);

// Componente reutilizable para los elementos del submenú desplegable
const SubNavItem = ({ to, children }) => (
  <li className="px-4 py-2 hover:bg-customBrownLight"> {/* Estilo del ítem del submenú */}
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? "font-bold text-customPink" : "text-customBrownDark hover:text-customPink"
      } // Aplica diferentes estilos según si el enlace está activo o no
    >
      {children} {/* Contenido del submenú (texto) */}
    </NavLink>
  </li>
);

export default Navbar; // Exportamos el componente Navbar para utilizarlo en otras partes de la aplicación
