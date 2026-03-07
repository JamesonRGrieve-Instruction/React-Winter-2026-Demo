"use client"

import { useState } from 'react';

export function StateChanger() {
    const [state, setState] = useState(true);
    return (<>
        <p>State: {state ? "Original" : "Changed"}</p>
        <button onClick={() => setState(current => !current)}>Change State</button>
    </>)
}
