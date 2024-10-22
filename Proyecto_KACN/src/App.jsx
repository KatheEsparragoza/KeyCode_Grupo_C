import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contactos, Error404, Home, Kacn, } from './pages';
// import Menu from "./componentes/Menu";

import  Rtacondiacionador  from "./componentes/Acondicionador";
import  Navbar  from "./componentes/Navbar";
import Kacn from "./componentes/Kacn";
import Home from "./componentes/Home";
import  CarritoCompras from "./componentes/CartShop";
import   Politicas from "./componentes/Politicas";
import Footer from "./componentes/Footer";
import PaginaChampus from "./componentes/Champus";
import Contact from "./componentes/Contact";
import PaginaTratamientos from "./componentes/Tratamiento";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path="/home" element={<Home />} />  {/* Ruta para la página de inicio */}
        <Route path="/KACN" element={<Kacn />} />  {/* Ruta para la página KACN */}
          <Route path="/services/shampoos" element={<PaginaChampus />} /> {/* Ruta para la galería de Champús */}
          <Route path="/services/conditioner" element={<Rtacondiacionador />} />  
          <Route path="/services/treatments" element={<PaginaTratamientos />} />
          <Route path="/CartShop" element={<CarritoCompras />} /> {/* Ruta para la galería de Champús */}
          <Route path="/Politicas" element={< Politicas />} />  
          <Route path="/contact" element={<Contact />} />  {}
          
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
