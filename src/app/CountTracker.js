"use client";

import { useEffect, useRef, useState } from "react";

export default function CountTracker() {
    const [count, setCount] = useState([0]);

    useEffect(() => {
        // On the New State's Way In
        let out = "";
        if (count % 3 === 0) out += "Fizz";
        if (count % 5 === 0) out += "Buzz";
        if (out) console.log(out);
    }, [
        count
    ]);
    const counterRef = useRef(null);
    useEffect(() => {
        counterRef.current.focus();
        console.log("Component Mounted!");
        return () => {
            console.log("Component Unmounted!");
        }
    }, [])
    return (
        <div>
            <button onClick={() => {
                setCount((previous) => previous + 1);
            }}>-</button>
            <input type="text" value={count} ref={counterRef} onChange={(event => setCount(event.target.value))} />
            <button onClick={() => {
                setCount((previous) => previous - 1);
            }}>+</button>
        </div>
    );

}
