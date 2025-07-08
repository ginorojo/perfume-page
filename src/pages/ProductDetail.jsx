import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Filtros from '../components/Filtros'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import { getPerfumeById } from '../libs/axios/getPerfumeById'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { addToCart } = useCart()
  const { id } = useParams()
  const navigate = useNavigate()
  const [perfume, setPerfume] = useState(null)

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await getPerfumeById(id)
        setPerfume(response.data)
      } catch (error) {
        console.error("Error al obtener perfume", error)
      }
    }

    fetchPerfume()
  }, [id])

  if (!perfume) return <p>Cargando ...</p>

  return (
    <div>
      <Header />
      {/* <Filtros /> */}
      <div className='flex py-5 bg-[#f9fafb] h-auto'>
        <div className=" p-4 flex flex-col md:flex-row mx-auto gap-5 w-[90%] md:w-[70%] justify-center items-center m-auto">
          <div className="w-[90%] relative mb-3 overflow-hidden rounded-lg bg-gray-100 border border-gray-300 ">
            <img
              src={perfume.imagenUrl}
              alt={perfume.nombre}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col gap-3 w-[90%]">
            <p className="text-sm text-gray-500 font-medium">
              {perfume.marca?.nombre}
            </p>
            <h3 className="font-semibold text-gray-900 ">
              {perfume.nombre}
            </h3>
            <div className="flex flex-col items-start justify-between gap-3">
              <p className="text-sm text-gray-500">{perfume.ml} ml</p>
              <p className="text-sm text-gray-500">Genero: {perfume.genero.nombre}</p>
              <p className="text-sm text-gray-500">Fragancia: {perfume.fragancia.nombre}</p>
              <p className="text-lg font-bold text-gray-900">${perfume.precio}</p>
            </div>
            <button
              onClick={() => {
                addToCart(perfume)
                    navigate("/cart")}
              }
              className="cursor-pointer w-40 mt-3 bg-[#8d258ba2] text-white py-2 px-4 rounded-md hover:bg-[#8d258b72] transition-colors text-sm font-medium">
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
