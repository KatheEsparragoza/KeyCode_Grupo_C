import React from 'react';

const accesoriosdecabello = [
    {
        id: 1,
        name: 'Cepillo para Desenredar',
        description: 'Funcional para despues del baño',
        price: '$40.000',
        imageUrl: 'https://img.freepik.com/fotos-premium/cepillo-peinar-dentro-canasta-bano-servilleta-blanca-vista-cerrada_178728-319.jpg?w=1380', 
      },
      {
        id: 2,
        name: 'Caiman Mediano',
        description: 'Caiman mediano con diseño de mariposa',
        price: '$5.000',
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_732257-MCO76252347055_052024-O.webp',
      },
      {
        id: 3,
        name: 'Gorro Satin para Dormir',
        description: 'Previene que el cabello se enrede',
        price: '$20.000',
        imageUrl: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/124062776_01/w=800,h=800,fit=pad',
      },
    ];
export const Accesorios = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {accesoriosdecabello.map((accesorio) => (
            <div key={accesorio.id} className="border p-9 rounded-lg shadow-lg bg-red-100">
              <img src={accesorio.imageUrl} alt={accesorio.name} className="w-full h-48 object-cover rounded-lg mb-7" />
              <h3 className="text-pink-950 text-xl font-bold mb-2">{accesorio.name}</h3>
              <p className= "text-gray-700 font-semibold mb-4">{accesorio.description}</p>
              <p className="text-pink-800 font-bold text-lg">{accesorio.price}</p>
              <button className="mt-4 bg-red-300 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-red-300">
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      );
    };
    