// http://localhost:3333/products
import { createContext, useState, useEffect } from "react"

const api_url = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [products, setProducts] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [connectivity, setConnectivity] = useState("All")

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

    const filteredProduct = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(inputValue.toLowerCase())
        const matchConnectivity = connectivity === "All" || p.connectivity === connectivity
        return matchSearch && matchConnectivity
    })


    return (
        <GlobalContext.Provider value={{
            products,
            filteredProduct,
            inputValue,
            setInputValue,
            connectivity,
            setConnectivity
        }}>
            {children}
        </GlobalContext.Provider>
    )
}