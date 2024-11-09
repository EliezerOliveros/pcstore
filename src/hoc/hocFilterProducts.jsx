import { useState, useMemo } from "react";
import "./hocFilterProducts.scss";

const hocFilterProducts = (Component) => {
  return function (props) {
    const { products = [] } = props;
    const [query, setQuery] = useState("");
    const [typeOrder, setTypeOrder] = useState("");
    const [typeClass, setTypeClass] = useState("all");

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    const filteredProducts = useMemo(() => {
      if (!Array.isArray(products) || products.length === 0) return [];

      let result = products;

      if (query) {
        result = result.filter((product) =>
          (product.name || "").toLowerCase().includes(query)
        );
      }

      if (typeClass !== "all") {
        result = result.filter(
          (product) =>
            product.category && product.category.toLowerCase() === typeClass
        );
      }

      if (typeOrder === "minor") {
        result = [...result].sort(
          (prev, next) => Number(prev.price) - Number(next.price)
        );
      } else if (typeOrder === "mayor") {
        result = [...result].sort(
          (prev, next) => Number(next.price) - Number(prev.price)
        );
      }

      return result;
    }, [products, query, typeOrder, typeClass]);

    return (
      <div className="filter-products">
        <div className="filters">
          <input
            type="text"
            placeholder="Buscar productos..."
            onChange={changeInput}
            value={query}
          />

          <div className="category-buttons">
            <button
              className={typeClass === "consola" ? "active" : ""}
              onClick={() => setTypeClass("consola")}
            >
              Consolas
            </button>
            <button
              className={typeClass === "mouse" ? "active" : ""}
              onClick={() => setTypeClass("mouse")}
            >
              Mouse
            </button>
            <button
              className={typeClass === "keyboard" ? "active" : ""}
              onClick={() => setTypeClass("keyboard")}
            >
              Teclados
            </button>
            <button
              className={typeClass === "all" ? "active" : ""}
              onClick={() => setTypeClass("all")}
            >
              Todos
            </button>
          </div>

          <div className="order-buttons">
            <button onClick={() => setTypeOrder("minor")}>Menor Precio</button>
            <button onClick={() => setTypeOrder("mayor")}>Mayor Precio</button>
          </div>
        </div>

        <div className="products-container">
          <Component {...props} products={filteredProducts} />
        </div>
      </div>
    );
  };
};

export default hocFilterProducts;
