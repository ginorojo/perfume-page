import React from "react";

export default function Filtros({ onMarcaChange }) {
  return (
    <>
      <div className="bg-[#8d258b14] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 place-items-center gap-2 py-5 border border-gray-300">
        <div
          className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
          onClick={() => onMarcaChange("Calvin Klein")}
        >
          <img
            className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
            src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Calvin-Klein-Logo.webp?fit=400%2C400&ssl=1"
            alt=""
          />

          <p className=" font-semibold pt-1">Calvin Klein</p>

        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
         onClick={() => onMarcaChange("Carolina Herrera")}>
            <img
              className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
              src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Carolina-Herrera-Logo.webp?fit=400%2C400&ssl=1"
              alt=""
            />
          <p className="font-semibold pt-1">Carolina Herrera</p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
        onClick={() => onMarcaChange("Paco Rabanne")}>
        
            <img
              className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
              src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Paco-Rabanne-Logo.webp?fit=400%2C400&ssl=1"
              alt=""
            />
          <p className="font-semibold pt-1">Paco Rabanne</p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
        onClick={() => onMarcaChange("Dior")}>
    
            <img
              className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
              src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Dior-Logo.webp?fit=400%2C400&ssl=1"
              alt=""
            />
   
          <p className="font-semibold pt-1">Dior</p>
        </div>

        <div className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
        onClick={() => onMarcaChange("Creed")}>
     
            <img
              className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
              src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Creed-Logo.webp?fit=400%2C400&ssl=1"
              alt=""
            />
    
          <p className="font-semibold pt-1">Creed</p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:bg-[#8d258b20] w-[150px] h-[180px] rounded-lg"
             onClick={() => onMarcaChange("Giorgio Armani")}>
            <img
              className="w-[100px] h-[100px] bg-gray-300 rounded-lg"
              src="https://i0.wp.com/dperfumes.cl/wp-content/uploads/2023/12/Giorgio-Armani-Logo.webp?fit=400%2C400&ssl=1"
              alt=""
            />
          <p className="font-semibold pt-1">Giorgio Armani</p>
        </div>
      </div>

      <section className="flex justify-center pt-5 md:hidden">
        <button className="h-8 rounded-lg w-[90%] flex justify-center items-center border-1 border-zinc-400">
          <img className="w-4" src="/filter.svg" alt="" />
          <p className="text-[16px]">Filtro</p>
        </button>
      </section>
    </>
  );
}
