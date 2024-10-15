import { useState, useEffect } from "react"
import { getProduct } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(()=> {
        getProduct()
            .then( (data) => setProduct(data) )
    }, [])


  return (
   <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
