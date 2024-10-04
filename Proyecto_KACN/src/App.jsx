import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contactos, Error404, Home, Kacn, } from './pages';
// import Menu from "./componentes/Menu";

import  Rtacondiacionador  from "./componentes/Acondicionador";
import  Navbar  from "./componentes/Navbar";
import { ProductGallery } from "./componentes/ProductGallery"; // Importa tu componente de galería
import Kacn from "./componentes/Kacn";
import Home from "./componentes/Home";
import  CarritoCompras from "./componentes/CartShop";
import   Politicas from "./componentes/Politicas";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Kacn" element={<Kacn />} />
        <Route path="*" element={<Error404 />} /> 
        <Route path="/" element={<Navbar />} />  */}
        <Route path="/home" element={<Home />} />  {/* Ruta para la página de inicio */}
        <Route path="/KACN" element={<Kacn />} />  {/* Ruta para la página KACN */}
          <Route path="/services/shampoos" element={<ProductGallery />} /> {/* Ruta para la galería de Champús */}
          <Route path="/services/conditioner" element={<Rtacondiacionador />} />  
          <Route path="/CartShop" element={<CarritoCompras />} /> {/* Ruta para la galería de Champús */}
          <Route path="/Politicas" element={< Politicas />} />  
          
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
