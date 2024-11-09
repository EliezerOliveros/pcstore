import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import ItemDetail from "./ItemDetail.jsx";
import Loading from "../loading/Loading.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hideItemCount, setHideItemCount] = useState(false);
  const { addProductInCart } = useContext(CartContext);
  const { idProduct } = useParams();

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    addProductInCart(productCart);
    setHideItemCount(true);
  };

  const getProduct = () => {
    const docRef = doc(db, "products", idProduct);
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() };
        setProduct(productDb);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ItemDetail
      product={product}
      addProduct={addProduct}
      hideItemCount={hideItemCount}
    />
  );
};

export default ItemDetailContainer;
