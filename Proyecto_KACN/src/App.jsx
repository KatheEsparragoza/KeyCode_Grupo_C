import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contactos, Error404, Home, Kacn, } from './pages';

// import Menu from "./componentes/Menu";
import  Navbar  from "./componentes/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
 
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Kacn" element={<Kacn />} />
        <Route path="*" element={<Error404 />} /> */}
        <Route path="/" element={<Navbar />} />     
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
