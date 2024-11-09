import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db";

export const useProducts = (idCategory) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const collectionRef = collection(db, "products");

    const getData = async () => {
      try {
        let q = collectionRef;
        if (idCategory) {
          q = query(collectionRef, where("category", "==", idCategory));
        }
        const snapshot = await getDocs(q);
        const productsDb = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsDb);
      } catch (err) {
        setError("Error al obtener los productos.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [idCategory]);

  return { products, loading, error };
};

export default useProducts;
