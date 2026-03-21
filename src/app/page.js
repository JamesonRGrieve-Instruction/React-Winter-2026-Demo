"use client"

import { useCallback, useState } from "react";
import CardWrapper from "./CardWrapper";
import Greeter from "./Greeter";
export default function Home() {
  const [pageCount, setPageCount] = useState([5]);

  const callbackPage = useCallback((newValue) => {
    setPageCount(newValue);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>The Count is {pageCount}</h1>
        <Greeter start={pageCount} onChangeCallback={callbackPage} />
        <CardWrapper>
          <p>Hello, World.</p>
        </CardWrapper>
        <CardWrapper>
          <ul>
            <li>Item 1</li>
          </ul>
        </CardWrapper>
      </main>
    </div>
  );
}
