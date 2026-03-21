"use client";

import { useCallback } from "react";
import CartItem from "./CartItem";
export default function Cart({ cartItems, setCartItems }) {
    const clearCart = useCallback(() => {
        setCartItems({})
    }, [setCartItems]);
    return <><ul>{Object.entries(cartItems).map(item => <CartItem key={item[0]} name={item[0]} price={item[1].price} quantity={item[1].quantity} setCartItems={setCartItems} />)}</ul><p>Total: ${Object.values(cartItems).reduce((acc, curr) => acc + curr.price, 0)}</p><button onClick={clearCart}>Checkout Complete</button></>;
}
