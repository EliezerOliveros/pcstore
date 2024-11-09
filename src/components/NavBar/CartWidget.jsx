import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.scss";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const total = totalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <FaShoppingCart className="icon-cartwidget" size={40} />
      <p className="number-cartwidget">{total >= 1 && total}</p>
    </Link>
  );
};

export default CartWidget;
