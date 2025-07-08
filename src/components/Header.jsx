import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({onSearch}) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  return (
    <header className="bg-[#f9fafb] pb-4">
      <section className="flex justify-between px-5 pt-5 items-center">
        <div>
         <a href="/">
           <img className="w-[90%]" src="/public/image.png" alt="" />
         </a>
        </div>
        <div className="w-10 ">
          <div className=" w-6 pl-2.5  ">
            <p className="flex justify-center items-center text-white bg-[#8d258ba2] rounded-full w-6">
              2
            </p>
          </div>
         <button>
           <img
            className=" cursor-pointer hover:bg-[#8d258ba2] rounded-full"
            onClick={()=>navigate("/Cart")}
            src="/shopingcart.svg"
            alt=""
          />
         </button>
        </div>
      </section>
      <section>
        <form
         onSubmit={(e)=>e.preventDefault()}
         className="md:max-w-md mx-auto justify-end w-[90%]   ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-black sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#8d258ba2]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm h-12 text-black border border-gray-400 rounded-lg bg-white focus:ring-[#8d258ba2] focus:border-[#8d258ba2]"
              placeholder="Search Mockups, Logos..."
              required
              onChange={(e)=>{
                setSearch(e.target.value)
                onSearch(e.target.value)
              }

              }
            />
          </div>
        </form>
      </section>
    </header>
  );
}
