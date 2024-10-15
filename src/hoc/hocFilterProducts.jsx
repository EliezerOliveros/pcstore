import useProducts from "../hooks/UseProducts"
import { useState } from "react"


const  hocFilterProducts = (Component) => {

    return function () {
        const { products } = useProducts ()
        const [query, setQuery] = useState("")
        
        const changeImput = (event) => {
           setQuery( event.target.value.toLowerCase() )
        }

        const search = () =>{
            let filterProducts = products.filter( (product) => (
                product["name"].toLowerCase().includes(query)
            ) )

            return filterProducts
        }

        return(
            <>
                <div>
                    <input type="text" placeholder="buscar..." onChange={changeImput} />
                </div>
                <Component products={ search() } />
            </>
        )
    }
}
 export default hocFilterProducts