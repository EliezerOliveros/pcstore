import { Link } from "react-router-dom";

const Item = ({ product }) => {
  // Si no hay imágenes disponibles, usamos una imagen por defecto
  const image = product.image && product.image.length > 0 ? product.image[0] : "/path/to/default/image.jpg";

  return (
    <div className="item">
      <img src={image} className="img-item" alt={product.name} width={100} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>
      <Link to={`/detail/${product.id}`} className="button-detail">
        Detalles
      </Link>
    </div>
  );
};

export default Item;
