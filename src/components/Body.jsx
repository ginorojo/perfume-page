import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import Aside from "./Aside";
import Cards from "./Cards";
import Footer from "./Footer";
import instance from "../libs/axios";
import Header from "./Header";

export default function Body() {
  const [perfumes, setPerfumes] = useState([]);
  const [filtros, setFiltros] = useState({
    genero: "",
    marca: "",
    fragancia: "",
    nombre:""
  });

  const [filtrados, setFiltrados] = useState([]);

  // 1. Obtener perfumes una vez
  useEffect(() => {
    const fetchData = async () => {
      const res = await instance("/perfumes");
      setPerfumes(res.data);
      setFiltrados(res.data); // Muestra todos al principio
    };
    fetchData();
  }, []);

  // 2. Aplicar filtros
  useEffect(() => {
    let resultado = perfumes;

   if (filtros.genero) {
  resultado = resultado.filter(
    (p) => p.genero.nombre.toLowerCase() === filtros.genero.toLowerCase()
  );
}

    if (filtros.marca) {
  resultado = resultado.filter(
    (p) => p.marca.nombre.toLowerCase() === filtros.marca.toLowerCase()
  );
}
if (filtros.fragancia) {
  resultado = resultado.filter(
    (p) => p.fragancia.nombre.toLowerCase() === filtros.fragancia.toLowerCase()
  );
}
if (filtros.nombre) {
  resultado = resultado.filter(
    (p) => p.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())
  );
}


    setFiltrados(resultado);
  }, [filtros, perfumes]);

  return (
    <>
      <Header  onSearch={(value) => setFiltros(prev => ({ ...prev, nombre: value }))} />
      <Filtros  onMarcaChange={(m) => setFiltros(prev => ({ ...prev, marca: m }))} />
      <div className="flex bg-[#f9fafb] p-5 m-auto pb-40 ">
        <Aside
        
          onGeneroChange={(g) => setFiltros(prev => ({ ...prev, genero: g }))}
          onMarcaChange={(m) => setFiltros(prev => ({ ...prev, marca: m }))}
          onFraganciaChange={(f) => setFiltros(prev => ({ ...prev, fragancia: f }))}
        />

         <div className="pt-15 flex flex-wrap items-center justify-center gap-2.5 md:gap-5 lg:gap-8 m-auto h-auto card-grid">
    
        <Cards perfumes={filtrados} />
      </div>
      </div>
      
    </>
  );
}
