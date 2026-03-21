"use client";


export default function CartItem({ name, price, quantity, setCartItems }) {
    return <li><strong>{name}</strong>: <button onClick={() => {
        setCartItems(previous => ({
            ...previous,
            [name]: {
                price: previous[name].price,
                quantity: previous[name].quantity + 1
            }
        }))
    }}>+</button>{quantity}<button onClick={() => {
        setCartItems(previous => {
            const built = {
                ...previous,
                [name]: {
                    price: previous[name].price,
                    quantity: previous[name].quantity - 1
                }
            };
            return Object.fromEntries(Object.entries(built).filter(([key, value]) => value.quantity > 0));
        })
    }}>-</button> @ ${price} (${quantity * price})</li>;
}
