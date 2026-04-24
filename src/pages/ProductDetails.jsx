import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function ProductDetails() {

    const {
        products,
        filteredProduct,
        inputValue,
        setInputValue,
        connectivity,
        setConnectivity
    } = useContext(GlobalContext)

    return (
        <>
            <h1>Lista prodotti</h1>

            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />

            <select
                value={connectivity}
                onChange={e => setConnectivity(e.target.value)}>
                <option value="All">All</option>
                <option value="Bluetooth">Bluetooth</option>
                <option value="Wireless">Wireless</option>
                <option value="Solar">Solar</option>
            </select>

            <div className="product-grid">
                {filteredProduct.map(p => (
                    <div key={p.id} className="card">
                        <div>
                            <img className="img-card" src={p.image} />
                        </div>
                        <div>
                            <h3 className="tit-card">{p.name}</h3>
                            <div>
                                <span>Brand: {p.brand}</span>
                            </div>
                            <div>
                                <span>Prezzo: {p.price}€</span>
                            </div>
                            <div>
                                <span>Rating: {p.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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