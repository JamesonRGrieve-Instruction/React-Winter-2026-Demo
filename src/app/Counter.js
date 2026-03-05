"use client";

import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState([0]);

    useEffect(() => {
        // On the New State's Way In
        console.log("On Component Mount and State Change of Deps:" + count);
        return () => {
            // On the Old State's Way Out
            console.log("On Component Unmount and Immediately Prior to State Change of Deps" + count);
        }
    }, [
        count
    ]);

    useEffect(() => {
        console.log("On Component Initial Mount (Once Per Mount)");
        return () => {
            console.log("On Component Final Unmount (Once Per Mount)");
        }
    }, [])

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount((previous) => [...previous, previous[previous.length - 1] + 1]);
            }}>Count Up</button>
        </div>
    );
}
