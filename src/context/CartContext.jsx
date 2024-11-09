import { createContext, useState } from "react"

const CartContext = createContext()

const  CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) =>{
         const  condicion = isIncart(newProduct.id)
        if (condicion){
            const newCart = cart.map((productCart)=> {
                if (productCart.id === newProduct){
                   
                   const newQuantity = productCart.quantity + newProduct.quantity
                   if (newQuantity > productCart.stock){
                    alert ("superaste el stock total")
                    return productCart
                   }else{
                    return { ...productCart, quantity: newQuantity }
                   } 
                }  else {
                    return productCart
                }
            })
            
            setCart(newCart)
        }else{
            setCart( [ ...cart, newProduct ] )
        }
    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter( (productCart)=> productCart.id !== idProduct )
        setCart(productsFilter)
    }

    const totalQuantity = () =>{
        const quantity = cart.reduce((total, productCart)=> total + productCart.quantity, 0 )
            return quantity
    }

    const isIncart = (idProduct) =>{
        return cart.some( (productCart)=> productCart.id === idProduct )
    }

    const deleteCart = () => {
        setCart([])
      }

    const totalPrice =() =>{
        const price = cart.reduce ( (total, productCart)=> total + (productCart.price * productCart.quantity ), 0 )
        return price
    }

    return (
        <CartContext.Provider value= {{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }