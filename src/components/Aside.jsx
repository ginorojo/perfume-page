import React, { useState, useEffect } from "react";
import instance from "../libs/axios";

export default function Aside({ onGeneroChange, onMarcaChange, onFraganciaChange }) {
  const [marcas, setMarcas] = useState([]);
  const [fragancias, setFragancias] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resMarcas, resFrag] = await Promise.all([
          instance("/marcas"),
          instance("/fragancias"),
        ]);
        setMarcas(resMarcas.data);
        setFragancias(resFrag.data);
      } catch (error) {
        console.error("Error al cargar filtros:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <aside className="md:block hidden pl-10 pt-2.5 h-[500px]">
      
      <div className="bg-[#8d258b14] p-6 rounded-lg shadow-sm w-[250px]">
        <h2 className="text-xl font-semibold mb-4">Filtros</h2>

        {/* Género */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Género</h3>
          {["hombre", "mujer"].map((gen) => (
            <label key={gen} className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="genero"
                value={gen}
                onChange={(e) => onGeneroChange(e.target.value.toLowerCase())}
                className="accent-[#8d258ba2]"
              />
              <span className="capitalize text-sm font-semibold text-gray-500">
                {gen}
              </span>
            </label>
          ))}
          {/* Opción para quitar filtro */}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="genero"
              value=""
              onChange={() => onGeneroChange("")}
              className="accent-[#8d258ba2]"
            />
            <span className="capitalize text-sm font-semibold text-gray-500">Todos</span>
          </label>
        </div>

        {/* Marca */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Marca</h3>
          {marcas.map((marca) => (
            <label key={marca.id} className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="marca"
                value={marca.nombre.toLowerCase()}
                onChange={(e) => onMarcaChange(e.target.value.toLowerCase())}
                className="accent-[#8d258ba2]"
              />
              <span className="capitalize text-sm font-semibold text-gray-500">
                {marca.nombre}
              </span>
            </label>
          ))}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="marca"
              value=""
              onChange={() => onMarcaChange("")}
              className="accent-[#8d258ba2]"
            />
            <span className="capitalize text-sm font-semibold text-gray-500">Todas</span>
          </label>
        </div>

        {/* Fragancia */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Fragancia</h3>
          {fragancias.map((frag) => (
            <label key={frag.id} className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="fragancia"
                value={frag.nombre.toLowerCase()}
                onChange={(e) => onFraganciaChange(e.target.value.toLowerCase())}
                className="accent-[#8d258ba2]"
              />
              <span className="capitalize text-sm font-semibold text-gray-500">
                {frag.nombre}
              </span>
            </label>
          ))}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="fragancia"
              value=""
              onChange={() => onFraganciaChange("")}
              className="accent-[#8d258ba2]"
            />
            <span className="capitalize text-sm font-semibold text-gray-500">Todas</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
