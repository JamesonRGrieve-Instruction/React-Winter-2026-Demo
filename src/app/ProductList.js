"use client";
import CartItem from "./CartItem";
import Product from "./Product";
export default function ProductList({ products, cartItems, setCartItems }) {
    return <ul>
        {Object.entries(products).map(product => Object.keys(cartItems).includes(product[0])
            ? <CartItem key={product[0]} name={product[0]} price={product[1]} quantity={cartItems[product[0]].quantity} setCartItems={setCartItems} />
            : <Product key={product[0]} name={product[0]} price={Number(product[1])} setCartItems={setCartItems} />)}
    </ul>
}
