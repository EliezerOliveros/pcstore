import { useState } from "react"

const ItemCount = (stock) => {
    const [count, setCount]= useState(1)
    const handleClickDecrement = () => {
        if (count > 1){
            setCount(count -1 )
        }
    }

    const handleClickIncrement = () => {
        if( count< stock)
        setCount(count +1)
    }
  return (
    <div>
        <button onClick={handleClickIncrement}>  </button>
        <p> {count} </p>
        <button onClick={handleClickDecrement}> </button>
        <button onClick={ItemCount}>Agregar  Producto</button>
    </div>
  )
}

export default ItemCount
