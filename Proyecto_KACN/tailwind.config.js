/** @type {import('tailwindcss').Config} */
export default // tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Asegúrate de que está apuntando a tus archivos de React
  theme: {
    extend: {
      colors: {
        customGray: '#f3f4f6', // Un ejemplo de gris claro
        customBrownDark: '#7b3f00', // Un ejemplo de marrón oscuro
        customPink: '#d5006d', // Un ejemplo de rosa
        customYellow: '#f59e0b', // Un ejemplo de amarillo
        customBrownLight: '#d6b68e', // Un ejemplo de marrón claro
      },
    },
  },
  plugins: [],
};

