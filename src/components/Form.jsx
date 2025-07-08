import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ContactForm() {
  // Traer productos del carrito
  const { cartItems } = useCart();

  // Estados del formulario
  const [formData, setFormData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    telefono: "",
    pais: "Nicaragua",
    direccion: "",
    comentario: "",
    departamento: "",
  });

  // Lista de departamentos
  const departamentosNicaragua = [
    "Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega",
    "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan",
    "Rivas", "Costa Caribe Norte (RACCN)", "Costa Caribe Sur (RACCS)",
  ];

  // Cambiar datos del formulario
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Enviar por WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    const { nombres, apellidoPaterno, correo, telefono, direccion, departamento } = formData;
    if (!nombres || !apellidoPaterno || !correo || !telefono || !direccion || !departamento) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Crear mensaje
    let mensaje = `Hola, quiero hacer este pedido:%0A`;
    cartItems.forEach((item) => {
      mensaje += `- ${item.nombre} (${item.ml}ml) x ${item.quantity}%0A`;
    });

    mensaje += `%0A🧾 Datos del cliente:%0A`;
    mensaje += `Nombre: ${formData.nombres} ${formData.apellidoPaterno} ${formData.apellidoMaterno}%0A`;
    mensaje += `Correo: ${formData.correo}%0A`;
    mensaje += `Teléfono: ${formData.telefono}%0A`;
    mensaje += `País: ${formData.pais}%0A`;
    mensaje += `Departamento: ${formData.departamento}%0A`;
    mensaje += `Dirección: ${formData.direccion}%0A`;

    if (formData.comentario) {
      mensaje += `Comentario: ${formData.comentario}%0A`;
    }

    // Tu número de WhatsApp (sin + ni espacios)
    const numero = "56933030950"; // ← reemplaza por el tuyo

    // Abrir WhatsApp
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <p className="flex justify-center pb-8 font-semibold text-sm text-gray-700">
        *Una vez finalizado el formulario, serás redirigido a WhatsApp para coordinar la entrega y el pago.
      </p>

      <div className="max-w-2xl mx-auto bg-white shadow-sm rounded-xl border border-gray-200 p-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">Formulario de Contacto</h2>
        <p className="text-center text-gray-500 mb-8">Complete todos los campos para finalizar la compra</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Nombres *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ej: María Fernanda"
              value={formData.nombres}
              onChange={(e) => handleInputChange("nombres", e.target.value)}
              required
            />
          </div>

          {/* Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-medium mb-1">Apellido Paterno *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={formData.apellidoPaterno}
                onChange={(e) => handleInputChange("apellidoPaterno", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">Apellido Materno</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={formData.apellidoMaterno}
                onChange={(e) => handleInputChange("apellidoMaterno", e.target.value)}
              />
            </div>
          </div>

          {/* Correo y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-medium mb-1">Correo *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="correo@ejemplo.com"
                value={formData.correo}
                onChange={(e) => handleInputChange("correo", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">Teléfono *</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="+505 8888-8888"
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
                required
              />
            </div>
          </div>

          {/* País */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">País *</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.pais}
              onChange={(e) => handleInputChange("pais", e.target.value)}
            >
              <option value="Nicaragua">Nicaragua</option>
            </select>
          </div>

          {/* Departamento */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Departamento *</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.departamento}
              onChange={(e) => handleInputChange("departamento", e.target.value)}
              required
            >
              <option value="">Seleccione su departamento</option>
              {departamentosNicaragua.map((dep) => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Dirección *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Calle principal, casa #..."
              value={formData.direccion}
              onChange={(e) => handleInputChange("direccion", e.target.value)}
              required
            />
          </div>

          {/* Comentario */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Comentario (opcional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
              placeholder="Indica alguna instrucción especial..."
              value={formData.comentario}
              onChange={(e) => handleInputChange("comentario", e.target.value)}
            ></textarea>
          </div>

          {/* Botón Finalizar */}
          <button
            type="submit"
            className="w-full bg-[#8d258ba2] text-white py-2 px-4 rounded-full hover:bg-[#8d258b72] transition-colors font-semibold flex justify-center items-center gap-2"
          >
            Finalizar compra por WhatsApp
            <img className="w-5" src="/icons8-whatsapp.svg" alt="WhatsApp" />
          </button>
        </form>
      </div>
    </div>
  );
}
