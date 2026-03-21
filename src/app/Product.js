"use client";


export default function Product({ name, price, setCartItems }) {
    return <li><strong>{name}</strong>: ${price} <button onClick={() => {
        setCartItems(previous => ({
            ...previous,
            [name]: {
                price: price,
                quantity: 1
            }
        }))
    }}>Add To Cart</button></li>;
}
