import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useProducts } from "../../hooks/useProducts";
import hocFilterProducts from "../../hoc/hocFilterProducts";
import "./itemlistcontainer.scss";

const ItemListContainer = ({ greeting }) => {
  const { idCategory } = useParams();
  const { products, loading, error } = useProducts(idCategory);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const ItemListWithFilters = hocFilterProducts(ItemList);

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <ItemListWithFilters products={products} />
    </div>
  );
};

export default ItemListContainer;
