import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-customGray">
      {/* Logo y nombre de la página */}
      <h1 className="text-6xl font-bold text-customBrownDark mb-8">KACN</h1>

      {/* Frase sobre el cuidado del cabello */}
      <p className="text-2xl text-customBrownDark italic text-center px-4 max-w-3xl">
        "El cabello es la corona invisible que llevamos todos los días, cuidarlo es amarse a uno mismo."
      </p>

      {/* Imagen */}
      <img 
      src="https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table-esp.jpg" 
      alt="Cuidado del cabello" 
      className="w-full max-w-xs mt-8 rounded-lg shadow-lg" 
      />

      
      {/* Botón para explorar más */}
      <a href="/services/shampoos" className="mt-6 bg-customPink text-white px-6 py-2 rounded-lg shadow-lg hover:bg-customBrownDark transition">
        Explorar Productos
      </a>
    </div>
  );
};

export default Home;
