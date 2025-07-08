import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Header />
      <section className=" pb-10 px-5 gap-2 flex flex-col md:flex-row justify-center items-start pt-10 m-auto">
        <div className="flex flex-col gap-7 w-full md:w-[50%] ">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-700">Tu carrito está vacío</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 flex flex-col md:flex-row mx-auto gap-7 w-[90%] md:w-full bg-[#8d258b14] rounded-lg justify-center items-start"
              >
                <div className="w-[90%] relative mb-3 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={item.imagenUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col gap-5 w-[90%] items-start">
                  <span className="flex justify-end w-[90%] text-lg font-bold text-gray-900 lg:py-5">
                    ${item.precio * item.quantity}
                  </span>
                  <p className="text-sm text-gray-500 font-medium">{item.marca.nombre}</p>
                  <h3 className="font-semibold text-gray-900 ">{item.nombre}</h3>
                  <div className="flex flex-col items-start justify-between gap-3">
                    <p className="text-sm text-gray-500">{item.ml}</p>
                    <p className="text-lg font-bold text-gray-900">${item.precio}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 py-4 items-center rounded-full px-2 flex gap-2 justify-between border w-[115px]">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="cursor-pointer h-7 text-[30px] w-[30px] rounded-full hover:bg-gray-200 flex justify-center items-center"
                      >
                        -
                      </button>
                      <span className="text-[20px]">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="cursor-pointer h-7 text-[25px] rounded-full w-[30px] hover:bg-gray-200 flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer hover:bg-gray-200 rounded-full">
                      <img
                        src="/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="Eliminar producto"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="mx-auto flex flex-col gap-4 w-[90%] md:w-[25%] rounded-lg h-auto bg-[#8d258b14] p-5 justify-center items-center">
          <h2 className="text-2xl font-semibold flex items-center">Resumen del pedido</h2>
          <p className="w-[85%] flex justify-start">
            Valor de Impuesto incluido, el valor del envío aun no está incluido en
            el total de la compra.
          </p>
          <div className="flex justify-around w-[90%] items-start ">
            <span className="text-xl font-semibold ">Subtotal:</span>
            <span className="text-xl font-semibold">${subtotal}</span>
          </div>
          <button
            onClick={() => navigate("/Pago", { state: { cartItems, subtotal } })}
            className="cursor-pointer w-[80%] mt-3 bg-[#8d258ba2] text-white py-2 px-4 rounded-md hover:bg-[#8d258b72] transition-colors text-sm font-medium"
          >
            Revisar compra
          </button>
        </aside>
      </section>
      <Footer />
    </div>
  );
}