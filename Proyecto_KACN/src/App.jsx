import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contactos, Error404, Home, Kacn, } from './pages';

// import Menu from "./componentes/Menu";
import  Navbar  from "./componentes/Navbar";
import { ProductGallery } from "./componentes/ProductGallery"; // Importa tu componente de galería
import Kacn from "./componentes/Kacn";
import Home from "./componentes/Home";
import { Accesorios } from "./componentes/Accesorios";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path="/home" element={<Home />} />  {/* Ruta para la página de inicio */}
        <Route path="/KACN" element={<Kacn />} />  {/* Ruta para la página KACN */}
          <Route path="/services/shampoos" element={<ProductGallery />} /> {/* Ruta para la galería de Champús */}
          
          <Route path="/services/accessories" element={<Accesorios />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
