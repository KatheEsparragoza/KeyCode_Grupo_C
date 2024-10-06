import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginaAcondicionador = () => {
  const productCount = 7;

  const generateProducts = (count) => {
    const productTemplates = [
      {
        name: 'Acondicionador Hidratante',
        description: 'Ideal para cabello seco y dañado.',
        price: '$20.000',
        imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/24486191/Acondicionador-Herbal-Essences-Hydrate-Coconut-Milk-400ml-1282875_a.jpg?v=638613120858100000',
      },
      {
        name: 'Acondicionador Fortalecedor',
        description: 'Fortalece el cabello desde la raíz.',
        price: '$25.000',
        imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/24084836/Acondicionador-Detox-Toronja-Y-Menta-HERBAL-ESSENCES-400-ml-3469970_a.jpg?v=638588719824730000',
      },
      {
        name: 'Acondicionador Reparador',
        description: 'Repara el cabello dañado y quebradizo.',
        price: '$30.000',
        imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/24486178/Acondicionador-Argan-1282871_a.jpg?v=638613120714430000',
      },
      {
        name: 'Acondicionador Nutritivo',
        description: 'Nutre profundamente el cabello.',
        price: '$22.000',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fherbalessencesla.com%2Fes-la%2Fproductos%2Fpasiflora-leche-de-arroz%2Facondicionador-pasiflora-leche-de-arroz%2F&psig=AOvVaw2PnZqm_v5nHTRw_Hhmrhc4&ust=1728084693750000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIifzKOv84gDFQAAAAAdAAAAABAE',
      },
      {
        name: 'Acondicionador Suave',
        description: 'Para un acabado sedoso y brillante.',
        price: '$18.000',
        imageUrl: 'https://images.ctfassets.net/a8l3ylu84syn/0EzO6y7JSnLcJ4T0Ybopa/f0bf9ee8774a006989da77a703f5da8e/0_Principal_PDP_r_.png',
      },
      {
        name: 'Acondicionador Antifrizz',
        description: 'Controla el frizz y aporta suavidad.',
        price: '$27.000',
        imageUrl: 'https://media.vogue.mx/photos/6363e8e62756616a4d1c6072/master/w_1600%2Cc_limit/Acondicionadores-Supermercado-Aroma-Herbal-Essences-Lavanda.jpg',
      },
      {
        name: 'Acondicionador Orgánico',
        description: 'Sin químicos, solo ingredientes naturales.',
        price: '$35.000',
        imageUrl: 'https://images.ctfassets.net/a8l3ylu84syn/H738GveAHgsg1n4uXl69w/04f60a0328875936e426dcea6feb34f2/Coco_Acondicionador.png',
      },
    ];

    return Array.from({ length: count }, (_, i) => {
      const randomTemplate =
        productTemplates[Math.floor(Math.random() * productTemplates.length)];
      return {
        id: i + 1,
        ...randomTemplate,
      };
    });
  };

  const products = generateProducts(productCount);

  return (
    <div className="min-h-screen p-8 bg-transparent">
      <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold mb-10 text-center 
        py-4 animate-fadeIn bg-gradient-to-r from-[#F2D49B] to-[#F28A80] text-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#F28A80] hover:to-[#F2D49B] hover:text-[#A67A6A] hover:shadow-2xl">
          Catálogo de Acondicionadores
</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-80"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="font-bold text-lg text-customPink">{product.price}</p>
              <NavLink to="/CartShop">
              <button   className="mt-4 bg-customBrownDark text-white px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-customBrownLight hover:shadow-lg">
                Añadir al carrito
              </button>  </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaAcondicionador;
