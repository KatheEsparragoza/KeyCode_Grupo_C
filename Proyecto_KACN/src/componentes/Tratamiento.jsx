import React from 'react';
import { NavLink } from 'react-router-dom';

const tratamientoscapilares = [
  {
    id: 1,
    name: 'Tratamiento Capilar Hidratante',
    description: 'Ideal para cabello seco y dañado, con propiedades humectantes profundas.',
    price: '$30.000',
    imageUrl: 'https://sumerlabs.com/default/image-tool-lambda?new-width=500&new-height=500&new-quality=50&url-image=https%3A%2F%2Fsumerlabs.com%2Fsumer-app-90b8f.appspot.com%2Fproduct_photos%252F741e9081a2487cf9c84c412534c4dbc5%252F875a5760-63d6-11ee-9ca2-5f0a656f5f70%3Falt%3Dmedia%26token%3Dbfcf30e3-1612-4be5-8afa-0783e9a67bb7',
  },
  {
    id: 2,
    name: 'Tratamiento Fortalecedor',
    description: 'Fortalece el cabello desde la raíz y previene la caída.',
    price: '$35.000',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sczyUbSZFHMBN29G_oc-yFY1whmZdYKsvQ&s',
  },
  {
    id: 3,
    name: 'Tratamiento Reparador de Puntas',
    description: 'Repara puntas abiertas y reduce el quiebre.',
    price: '$40.000',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHe1jZ-_cO81dWNHURJog4COJ3CJRSJ4htw&s',
  },
  {
    id: 4,
    name: 'Tratamiento Nutritivo',
    description: 'Aporta nutrientes esenciales para un cabello más sano y brillante.',
    price: '$32.000',
    imageUrl: 'https://pasteurio.vtexassets.com/arquivos/ids/172935-800-800?v=637989535927530000&width=800&height=800&aspect=true',
  },
  {
    id: 5,
    name: 'Tratamiento Suavizante',
    description: 'Deja el cabello suave y sedoso al tacto.',
    price: '$28.000',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXiX6PQm1dk6vSiCz7bqsh3wvGQyYkXyDNw&s',
  },
  {
    id: 6,
    name: 'Tratamiento Anti-frizz',
    description: 'Controla el frizz y proporciona un acabado suave.',
    price: '$33.000',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxvgsd1u57V2pNj1FmB4bFdhSSE23zL0LCg&s',
  },
  {
    id: 7,
    name: 'Tratamiento Orgánico',
    description: 'Elaborado con ingredientes naturales, sin químicos agresivos.',
    price: '$45.000',
    imageUrl: 'https://cabelo.com.co/wp-content/uploads/2023/06/Kit-Alisado-Organico-Detox-180ml.jpg',
  },
];

export const PaginaTratamientos = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r">
      <div className="max-w-6xl mx-auto"> {/* Adjusted maximum width for better fit */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 rounded-lg mb-8">
          <h1 className="text-4xl font-bold text-center text-pink-900">
            Catálogo de Tratamientos Capilares
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Four columns on large screens */}
          {tratamientoscapilares.map((tratamiento) => (
            <div
              key={tratamiento.id}
              className="flex flex-col border p-4 rounded-lg shadow-lg bg-gradient-to-r from-pink-200 to-pink-400"
            >
              <img
                src={tratamiento.imageUrl}
                alt={tratamiento.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-pink-900 text-xl font-bold mb-2">{tratamiento.name}</h3>
                  <p className="text-gray-600 mb-4">{tratamiento.description}</p>
                </div>
                <p className="text-pink-800 font-bold text-lg">{tratamiento.price}</p>
              </div>
              <NavLink to="/CartShop">
                <button className="mt-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:shadow-md">
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

export default PaginaTratamientos;
