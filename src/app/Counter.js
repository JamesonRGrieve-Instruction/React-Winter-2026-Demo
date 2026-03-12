"use client";

import { useState } from "react";

export default function Counter({ start = 0 }) {
    const [count, setCount] = useState(start);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount((previous) => previous + 1);
            }}>Count Up</button>
        </div>
    );
}
