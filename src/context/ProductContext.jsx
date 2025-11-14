import { createContext, useState } from "react";
import { products as initialProducts } from "../data/products";

export const ProductContext = createContext()

export default function ProductProvider({children}){
    const [products, setProducts] = useState(
        initialProducts.map((item)=>({...item, count:0}))
    )
    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}