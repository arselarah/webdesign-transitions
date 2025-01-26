// components/SafariWindow.tsx
import React from "react";

const SafariWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-screen border-4 border-gray-200 w-full absolute top-0 left-0 rounded-lg overflow-clip z-10">
      {/* Barra de herramientas */}
      <div className="bg-gray-200 rounded-t-lg p-3 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-700">
          https://webdesign.arselara.com
        </div>
      </div>

      {/* Barra de navegación */}
      <div className="bg-gray-100 p-2 flex space-x-2">
        <button className="p-2 bg-gray-200 rounded-lg">←</button>
        <button className="p-2 bg-gray-200 rounded-lg">→</button>
        <button className="p-2 bg-gray-200 rounded-lg">↻</button>
      </div>

      {/* Vista de la página */}
      <div className="flex-1 rounded-b-lg p-4 overflow-hidden">
        {/* <h1 className="text-xl font-bold">Bienvenido a Safari</h1>
        <p className="mt-2">Esta es una simulación de una ventana de Safari.</p> */}
      </div>
    </div>
  );
};

export default SafariWindow;
