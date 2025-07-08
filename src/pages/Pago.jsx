import ContactForm from "../components/Form";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function Pago() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const subtotal = location.state?.subtotal || 0;

  return (
    <div>
      <ContactForm cart={cartItems} subtotal={subtotal} />
      <Footer />
    </div>
  );
}
