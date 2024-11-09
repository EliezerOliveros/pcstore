import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>No tienes productos en tu carrito</h2>
        <div className="cart-empty">
          <Link to="/">Volver al Inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Mi Carrito</h2>
      <div className="cart-items">
        {cart.map((productCart) => (
          <div key={productCart.id} className="cart-item">
            <img src={productCart.image[0]} alt={productCart.name} />
            <p>{productCart.name}</p>
            <p className="price">Precio c/u: ${productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio Parcial: ${productCart.price * productCart.quantity}</p>
            <button
              className="remove-button"
              onClick={() => deleteProductInCart(productCart.id)}
            >
              Borrar Producto
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: </p>
        <p className="total-price">${totalPrice()}</p>
      </div>

      <div className="cart-empty">
        <button className="empty-cart-button" onClick={deleteCart}>
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="checkout-button">
          Continuar con mi compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
