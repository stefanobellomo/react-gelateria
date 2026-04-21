// http://localhost:3333/products
import { createContext, useState, useEffect } from "react"

const api_url = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${api_url}/products`)
            const data = await response.json()
            setProducts(data)

        } catch (error) {
            console.error('chiamata api fallita')
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return (
        <GlobalContext.Provider value={{
            products
        }}>
            {children}
        </GlobalContext.Provider>
    )
}