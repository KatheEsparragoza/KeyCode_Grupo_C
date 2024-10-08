import React from 'react';

const Contact = () => {
  return (
    <div className="bg-customGray p-8 min-h-screen">
      <h2 className="text-3xl font-semibold text-customPink text-center mb-6">Contacta con Nosotros</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg mb-4 text-customBrownDark">Estamos aquí para ayudarte. Puedes contactarnos a través de los siguientes medios:</p>

        <div className="bg-customBrownLight shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-2xl font-semibold text-customBrownDark mb-2">Número de Teléfono</h3>
          <p className="text-gray-600">+57 312 4567 890</p>
        </div>

        <div className="bg-customBrownLight shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-2xl font-semibold text-customBrownDark mb-2">WhatsApp</h3>
          <p className="text-gray-600">+57 315 6543 210</p>
        </div>

        <div className="bg-customBrownLight shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-2xl font-semibold text-customBrownDark mb-2">Correo Electrónico</h3>
          <p className="text-gray-600">productoskacn@kacn.com</p>
        </div>

        <div className="bg-customBrownLight shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-customBrownDark mb-2">Síguenos en Redes Sociales</h3>
          <p className="text-gray-600">
            <a href="https://facebook.com/kacn" className="text-customYellow hover:underline">Facebook</a> | 
            <a href="https://instagram.com/kacn" className="text-customPink hover:underline"> Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
