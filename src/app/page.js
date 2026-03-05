"use client";
import { useState } from "react";
import Counter from "./Counter";

export default function Home() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <button onClick={() => { setShowCounter(current => !current) }}>Toggle Counter</button>
        {showCounter && <Counter />}
      </main>
    </div>
  );
}
