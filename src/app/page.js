"use client"

import { useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
const inventory = {
  "Soda": {
    "Fanta": 1.99,
    "Sprite": 2.99,
    "Coca-Cola": 1.59,
    "Gatorade": 2.49,
    "Nestle Ice Tea": 0.99,
    "Dr. Pepper": 1.75
  },
  "Snacks": {
    "Lays": 2.25,
    "Doritos": 2.15,
    "Cheetos": 2.05,
    "Kit Kat": 1.97,
    "Coffee Crisp": 1.89,
    "M&Ms": 0.75
  },
  "Miscellaneous Products": {
    "Paper Towel Roll": 5.75,
    "Pre-packaged Sandwich": 4.75,
    "Lighter": 0.49,
    "Magazine": 6.75,
    "Newspaper": 2.75
  },
  "Checkout": {}
};
export default function Home() {

  const [cartItems, setCartItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(Object.keys(inventory)[0]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav>
        <ul>
          {Object.keys(inventory).map(category => <li key={category}><a onClick={() => setActiveCategory(category)}>{category}</a></li>)}
        </ul>
      </nav>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {activeCategory === "Checkout" ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <ProductList products={inventory[activeCategory]} cartItems={cartItems} setCartItems={setCartItems} />}
      </main>
    </div>
  );
}
