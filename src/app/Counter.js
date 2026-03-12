"use client";

import { useEffect, useState } from "react";

export default function Counter({ start = 0, onChangeCallback }) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        onChangeCallback(count);
    }, [onChangeCallback, count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount((previous) => previous + 1);
            }}>Count Up</button>
        </div>
    );
}
