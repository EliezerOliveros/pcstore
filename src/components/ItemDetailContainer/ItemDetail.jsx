import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className="itemdetailcontainer">
        <img src={product.image} width={300} alt="" />
        <h2> {product.name} </h2>
        <p> {product.description} </p>
        <p> precio: $ {product.price} </p>  
    </div>

  )
}

export default ItemDetail
