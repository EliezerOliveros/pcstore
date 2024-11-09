import { useState, useEffect } from "react";
import "./itemdetail.css";
import ItemCount from "../itemcount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setCurrentImage(product.image[0]);
    }
    ;
  }, [product]);

  if (!product) {
    return <p>Loading...</p>; // Mostramos "Loading..." si el producto no está disponible
  }

  const images = product.image
    ? product.image.filter((image) => image !== currentImage)
    : [];

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                src={image}
                alt={`Secondary image ${index}`}
                key={index}
                onClick={() => setCurrentImage(image)}
              />
            ))
          ) : (
            <p>No additional images available</p>
          )}
        </div>

        <div className="main-image">
          {currentImage ? (
            <img src={currentImage} alt="Main product" />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Price: ${product.price}</p>

        {hideItemCount ? (
          <Link to="/cart">Go to Cart</Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
