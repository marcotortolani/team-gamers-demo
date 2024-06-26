import React from 'react';

export default function page() {
  return (
    <div className=" flex flex-col items-center gap-6 mt-40 mb-20 mx-4 p-6 bg-EpaPrimary text-white rounded-lg shadow-xl">
      <p className=" px-4 text-center">
        Este contenido está bloqueado, es necesario suscribirse.
      </p>
      <button
        className=" font-semibold px-4 py-2 bg-EpaDetails rounded-lg"
        type="button"
      >
        Suscribirme
      </button>
    </div>
  );
}
