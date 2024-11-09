import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount">
      <div>
        <button className="increment-decrement" onClick={handleClickIncrement}>
          +
        </button>
        <p>{count}</p>
        <button className="increment-decrement" onClick={handleClickDecrement}>
          -
        </button>
      </div>
      <button className="add-product" onClick={() => addProduct(count)}>
        Agregar Producto
      </button>
    </div>
  );
};

export default ItemCount;
