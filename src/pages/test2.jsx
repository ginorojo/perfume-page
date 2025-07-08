import { useNavigate } from 'react-router-dom'; // CORRECTO
import React, { useEffect, useState } from 'react';
import instance from '../libs/axios'; // instancia axios correcta

export default function Test2() {
  const [perfume, setPerfume] = useState([]);
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

  const navigate = useNavigate(); // puedes usarlo luego para redirigir

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await instance.get("/perfumes");
        setPerfume(response.data);
      } catch (error) {
        console.error("Error al cargar los perfumes:", error);
      }
    };

    fetchPerfumes();
  }, []);

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]:[e.target.value] })
  }

  return (
    <div>
      
    </div>
  )
}
