
import ItemList from "./ItemList.jsx"
import useProducts from "../../hooks/UseProducts.jsx"
import Loading from "../loading/loading.jsx"
import "./ItemListContainer.scss"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import loading from "../loading/loading.jsx"


const ItemListContainer = ({ products }) => {
  
  return (

    <div className="itemlistcontainer">    
      <ItemList products={products}/>
    </div>
 
  )
}

  const ItemListContainerWithHoc = hocFilterProducts( ItemListContainer )

export default ItemListContainerWithHoc
    