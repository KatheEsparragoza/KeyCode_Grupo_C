import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CarritoCompras = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Acondicionador Hidratante',
      description: 'Ideal para cabello seco y dañado.',
      price: 20000,
      imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/24486191/Acondicionador-Herbal-Essences-Hydrate-Coconut-Milk-400ml-1282875_a.jpg?v=638613120858100000',
    },
    {
      id: 2,
      name: 'Acondicionador Fortalecedor',
      description: 'Fortalece el cabello desde la raíz.',
      price: 25000,
      imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/24084836/Acondicionador-Detox-Toronja-Y-Menta-HERBAL-ESSENCES-400-ml-3469970_a.jpg?v=638588719824730000',
    },
  ]);

  // Calcula el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 text-[#F28A80] animate-fadeIn">
          Carrito de Compras
        </h1>

        {/* Lista de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div className="flex flex-col justify-between">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold text-[#F28A80]">Precio: ${item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="text-right mb-10">
          <p className="text-2xl font-bold text-gray-800">Total: ${calculateTotal().toLocaleString()}</p>
        </div>

        {/* Botones */}
        <div className="flex justify-center space-x-4">
          <button className="bg-[#F2D49B] text-white px-6 py-2 rounded-lg shadow-md font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-110 hover:bg-[#F28A80]">
            Comprar
          </button>

          <NavLink to="/Politicas">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600">
            Ver Políticas
          </button> </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
