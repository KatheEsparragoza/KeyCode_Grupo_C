import React from 'react';

const Politicas = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Título centralizado */}
        <h1 className="text-5xl font-extrabold mb-10 text-center text-customBrownDark relative inline-block after:block after:w-full after:h-1 after:bg-customPink after:absolute after:-bottom-2 after:left-0">
          Políticas de Pedido
        </h1>

        {/* Sección de Información General */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-customBrownDark border-b-2 border-customPink pb-2">
            Información General
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Agradecemos tu compra y queremos asegurarnos de que tu experiencia sea lo más placentera posible. A continuación, te presentamos nuestras políticas de pedido.
          </p>
        </div>

        {/* Sección de Sugerencias para tu Pedido */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-customBrownDark border-b-2 border-customPink pb-2">
            Sugerencias para tu Pedido
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed pl-5 space-y-2">
            <li>
              Verifica que los productos en tu carrito sean los correctos antes de finalizar la compra.
            </li>
            <li>Revisa las descripciones y precios de cada producto.</li>
            <li>
              Si tienes alguna duda, no dudes en contactarnos a través de nuestro servicio de atención al cliente.
            </li>
          </ul>
        </div>

        {/* Sección de Política de Devoluciones */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-customBrownDark border-b-2 border-customPink pb-2">
            Política de Devoluciones
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Si no estás satisfecho con tu compra, puedes devolver el producto dentro de los 30 días siguientes a la fecha de compra. Asegúrate de que el producto esté en su estado original.
          </p>
        </div>

        {/* Sección de Envío */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-customBrownDark border-b-2 border-customPink pb-2">
            Envío
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Realizamos envíos a todo el país. Los tiempos de entrega pueden variar según la ubicación. Para más detalles, consulta nuestra sección de envío.
          </p>
        </div>

        {/* Sección de Contacto */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-customBrownDark border-b-2 border-customPink pb-2">
            Contacto
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Si tienes alguna pregunta o inquietud sobre tu pedido, contáctanos a través de nuestro correo electrónico o número de teléfono.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Politicas;
