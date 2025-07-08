import { useNavigate } from "react-router-dom"


export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-gray-200 px-6  w-[100%] pt-5 pb-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Marca */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">PerfumeLux</h2>
          <p className="text-gray-400 text-sm">
            Fragancias exclusivas que despiertan tus sentidos y dejan huella.  
            Hechos con pasión, elegancia y detalle.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition">Sobre Nosotros</a></li>
            <li><a href="/products" className="hover:text-white transition">Catálogo</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contacto</a></li>
            <li><button className="hover:text-white transition cursor-pointer " 
            onClick={()=>window.open("/Login","_blank") } >Admin</button>
            
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.instagram.com" className="hover:text-white transition">Instagram</a></li>
            <li><a href="https://www.facebook.com" className="hover:text-white transition">Facebook</a></li>
            <li><a href="https://www.tiktok.com" className="hover:text-white transition">TikTok</a></li>
          </ul>
        </div>

        {/* Suscripción */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Recibe ofertas</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
