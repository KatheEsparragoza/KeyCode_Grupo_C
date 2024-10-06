import React from 'react';


// Datos de productos 
const products = [
  {
    id: 1,
    name: 'Champú Hidratante',
    description: 'Ideal para cabello seco y dañado.',
    price: '$20.000',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.productos-belleza.com%2F631-tratamiento-del-pelo-seco-o-danado&psig=AOvVaw2rpmqF18L-gRzp6m49yugl&ust=1727241943535000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCi5Obr2ogDFQAAAAAdAAAAABAPhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.es%2FVitamins-Champ%25C3%25BA-Keratina-sin-Sulfatos%2Fdp%2FB014HAJ9F0&psig=AOvVaw2rpmqF18L-gRzp6m49yugl&ust=1727241943535000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCi5Obr2ogDFQAAAAAdAAAAABAE', // Imagen de ejemplo
  },
  {
    id: 2,
    name: 'Champú Fortalecedor',
    description: 'Fortalece el cabello desde la raíz.',
    price: '$15.000',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Champú Anti-Caída',
    description: 'Previene la caída del cabello.',
    price: '$18.000',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export const ProductGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
          <img src={ Cabello} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="font-bold text-lg">{product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};
