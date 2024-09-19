import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contactos, Error404, Home, Kacn, } from './pages';
import "./App.css";
import Menu from "./componentes/Menu";



function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Kacn" element={<Kacn />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
