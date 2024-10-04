import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-customBrownDark text-white py-6 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sección de enlaces */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <FooterLink to="/about">Sobre Nosotros</FooterLink>
          <FooterLink to="/services">Servicios</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contacto</FooterLink>
        </ul>

        {/* Derechos de autor */}
        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
          © 2024 KACN. Todos los derechos reservados.
        </p>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-customPink transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-customPink transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-customPink transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <a
      href={to}
      className="text-gray-400 hover:text-customPink transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

export default Footer;
