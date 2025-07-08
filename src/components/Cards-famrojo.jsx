import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cards({ perfumes }) {
  const navigate = useNavigate()

  if (!perfumes || perfumes.length === 0) return <p>No hay perfumes que mostrar</p>

  return (
    <>
      {perfumes.map((perfume) => (
        <div
          key={perfume.id}
          className="bg-[#8d258b14]  rounded-lg shadow-sm border-gray-900 group hover:shadow-lg transition-shadow w-[250px] h-[510px]  "
        >
          <div className="p-4 flex flex-col ">
            <div className="aspect-[3/4] relative mb-3 overflow-hidden rounded-lg bg-gray-100 ">
              <img
                src={perfume.imagenUrl || "/public/aqua-gio.webp"}
                alt={perfume.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-2 ">
              <p className="text-sm text-gray-500 font-medium">{perfume.marca.nombre}</p>
              <h3 className="font-semibold text-gray-900 line-clamp-2">{perfume.nombre}</h3>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">${perfume.precio}</p>
              </div>
              <button
                onClick={() => navigate(`/ProductDetail/${perfume.id}`)}
                className="cursor-pointer w-full mt-3 bg-[#8d258ba2] text-white py-2 px-4 rounded-md hover:bg-[#8d258b72] transition-colors text-sm font-medium"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
