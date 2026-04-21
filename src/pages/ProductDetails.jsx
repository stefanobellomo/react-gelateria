import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function ProductDetails() {

    const { products } = useContext(GlobalContext)

    return (
        <>
            <h1>Lista prodotti</h1>
            {products.map(g => (
                <div key={g.id} className="d-flex">
                    <h3>{g.name}</h3>
                    <div>
                        <span>{g.brand}</span>
                    </div>
                    <div>
                        <img src={g.image} />
                    </div>
                </div>
            ))}
        </>
    )
}

// {
//     "id": 4,
//     "brand": "Logitech",
//     "color": "Black",
//     "connectivity": "Wireless",
//     "description": "High precision wireless gaming mouse",
//     "image": "https://fakeimg.pl/500x500/?text=Wireless+Gaming+Mouse",
//     "name": "Wireless Gaming Mouse",
//     "price": 59.99,
//     "rating": 4.6,
//     "wireless": true
// }