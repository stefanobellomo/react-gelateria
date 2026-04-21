import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function ProductDetails() {

    const { products } = useContext(GlobalContext)

    return (
        <>
            <h1>Lista prodotti</h1>
            {products.map(g => (
                <p>{g.name}</p>
            ))}
        </>
    )
}