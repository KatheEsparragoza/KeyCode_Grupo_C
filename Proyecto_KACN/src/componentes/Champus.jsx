import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginaChampus = () => {
  const productCount = 7;

  const generateProducts = (count) => {
    const productTemplates = [
      {
        name: 'Champú Hidratante',
        description: 'Ideal para cabello seco y dañado.',
        price: '$20.000',
        imageUrl: 'https://www.cosmeticosalpormayor.com/cdn/shop/files/GARNIER_K50157_HAIRRESETHYDRATINGSHAMPOODRYSCALP6UNITS_600x.jpg?v=1706555546',
      },
      {
        name: 'Champú Fortalecedor',
        description: 'Fortalece el cabello desde la raíz.',
        price: '$40.000',
        imageUrl: 'https://alcortesoap.com/6857-large_default/champu-fortalecedor-anti-caida-del-cabello.jpg',
      },
      {
        name: 'Champú Reparador',
        description: 'Repara el cabello dañado y quebradizo.',
        price: '$135.000',
        imageUrl: 'https://blowdry.com.co/wp-content/uploads/2021/05/Moroccanoil-Shampoo-Reparador-Hidratante-Moisture-Repair-Shampoo-No.-1.jpg.jpg',
      },
      {
        name: 'Champú Nutritivo',
        description: 'Nutre profundamente el cabello.',
        price: '$35.000',
        imageUrl: 'https://static.sweetcare.pt/img/prd/488/v-638239731124783357/elvive-013614ze_02.webp', 
      },
      {
        name: 'Champú Suave',
        description: 'Para un acabado sedoso y brillante.',
        price: '$42.000',
        imageUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gnr/gnr54331/y/6.jpg',
      },
      {
        name: 'Champú Antifrizz',
        description: 'Controla el frizz y aporta suavidad.',
        price: '$30.000',
        imageUrl: 'https://cosmeticland.es/cdn/shop/products/miracle-gold-champu-1000-ml-tahe.jpg?v=1633599877',
      },
      {
        name: 'Champú Orgánico',
        description: 'Sin químicos, solo ingredientes naturales.',
        price: '$50.000',
        imageUrl: 'https://saludexpress.co/cdn/shop/products/shampooorganicopura.jpg?v=1638802052',
      },
    ];

    // Clona el array de plantillas para evitar modificar el original
    let templatesCopy = [...productTemplates];

    // Verifica si el número solicitado de productos excede el número disponible
    if (count > templatesCopy.length) {
      count = templatesCopy.length; // Limita el número de productos al tamaño de la lista
    }

    return Array.from({ length: count }, (_, i) => {
      // Toma un producto aleatorio sin reemplazo
      const randomIndex = Math.floor(Math.random() * templatesCopy.length);
      const selectedProduct = templatesCopy.splice(randomIndex, 1)[0]; // Elimina el producto seleccionado
      return {
        id: i + 1,
        ...selectedProduct,
      };
    });
  };

  const products = generateProducts(productCount);

  return (
    <div className="min-h-screen p-8 bg-transparent">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-extrabold mb-10 text-center 
          py-4 animate-fadeIn bg-gradient-to-r from-[#F2D49B] to-[#F28A80] text-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#F28A80] hover:to-[#F2D49B] hover:text-[#A67A6A] hover:shadow-2xl">
          Catálogo de Champús
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
                <button className="mt-4 bg-customBrownDark text-white px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-customBrownLight hover:shadow-lg">
                  Añadir al carrito
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaChampus;
