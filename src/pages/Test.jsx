import React, { useEffect, useState } from "react";
import instance from "../libs/axios/index"; // Ajusta según la ubicación real del archivo

export default function PerfumeAdmin() {
  const [perfumes, setPerfumes] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    ml: "",
    precio: "",
    stock: "",
    marcaId: "",
    generoId: "",
    fraganciaId: "",
    imagenUrl: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchPerfumes = () => {
    instance.get("/perfumes")
      .then((res) => setPerfumes(res.data))
      .catch((err) => console.error("Error al obtener perfumes:", err));
  };

  useEffect(() => {
    fetchPerfumes();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        marcaId: parseInt(form.marcaId),
        generoId: parseInt(form.generoId),
        fraganciaId: parseInt(form.fraganciaId),
      };

      if (editingId !== null) {
        await instance.put(`/perfumes/${editingId}`, payload);
        setMessage("Perfume actualizado con éxito");
      } else {
        await instance.post("/perfumes", payload);
        setMessage("Perfume agregado con éxito");
      }

      setForm({ nombre: "", ml: 0, precio: 0, stock: 0, marcaId: "", generoId: "", fraganciaId: "", imagenUrl: "" });
      setEditingId(null);
      fetchPerfumes();

      setTimeout(() => setMessage(""), 4000);
    } catch (err) {
      console.error("Error al guardar perfume:", err);
      setMessage("Ocurrió un error al guardar el perfume");
    }
  };

  const handleEdit = (perfume) => {
    setForm({
      nombre: perfume.nombre,
      ml: perfume.ml,
      precio: perfume.precio,
      stock: perfume.stock,
      marcaId: perfume.marcaId,
      generoId: perfume.generoId,
      fraganciaId: perfume.fraganciaId,
      imagenUrl: perfume.imagenUrl
    });
    setEditingId(perfume.id);
  };

  const handleDelete = async (id) => {
    try {
      await instance.delete(`/perfumes/${id}`);
      setMessage("Perfume eliminado con éxito");
      fetchPerfumes();

      setTimeout(() => setMessage(""), 4000);
    } catch (err) {
      console.error("Error al eliminar perfume:", err);
      setMessage("Ocurrió un error al eliminar el perfume");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administración de Perfumes</h1>

      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
      >
        <input name="nombre" value={form.nombre} onChange={handleChange} className="border p-2 rounded" placeholder="Nombre" />
        <input name="ml" value={form.ml} onChange={handleChange} className="border p-2 rounded" placeholder="ML" type="number" />
        <input name="precio" value={form.precio} onChange={handleChange} className="border p-2 rounded" placeholder="Precio" type="number" />
        <input name="stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" placeholder="Stock" type="number" />

        <select name="marcaId" value={form.marcaId} onChange={handleChange} className="border p-2 rounded">
          <option value="">Seleccionar Marca</option>
          <option value="1">Calvin Klein</option>
          <option value="2">Paco Rabanne</option>
          <option value="3">Dior</option>
          <option value="4">Carolina Herrera</option>
          <option value="5">Creed</option>
          <option value="6">Giorgio Armani</option>
        </select>

        <select name="generoId" value={form.generoId} onChange={handleChange} className="border p-2 rounded">
          <option value="">Seleccionar Género</option>
          <option value="1">Hombre</option>
          <option value="2">Mujer</option>
        </select>

        <select name="fraganciaId" value={form.fraganciaId} onChange={handleChange} className="border p-2 rounded">
          <option value="">Seleccionar Fragancia</option>
          <option value="1">Cítrico</option>
          <option value="2">Dulce</option>
          <option value="3">Fresco</option>
        </select>

        <input name="imagenUrl" value={form.imagenUrl} onChange={handleChange} className="border p-2 rounded" placeholder="imagenUrl" type="text" />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingId !== null ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Imagen</th>
            <th className="border p-2">ML</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {perfumes.map((perfume) => (
            <tr key={perfume.id} className="text-center">
              <td className="border p-2">{perfume.nombre}</td>
              <td className="border p-2">
                {perfume.imagenUrl && (
                  <img src={perfume.imagenUrl} alt={perfume.nombre} className="w-16 h-16 object-cover mx-auto" />
                )}
              </td>
              <td className="border p-2">{perfume.ml}</td>
              <td className="border p-2">${perfume.precio}</td>
              <td className="border p-2">{perfume.stock}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded"
                  onClick={() => handleEdit(perfume)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(perfume.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
