"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function Emoticons({ children }: { children: ReactNode }) {
  const emoticons = ["", ""];
  const [currentEmo, setCurrentEmo] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("10s");
    }, 10000);

    const intervalId = setInterval(() => {
      setCounter((prev) => {
        const next = prev + 1;
        if (next % 5 === 0) {
          setCurrentEmo(1);
        } else {
          setCurrentEmo(0);
        }
        console.log(next);
        return next;
      });
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {children}
      {emoticons[currentEmo] ?? ""}
    </>
  );
 }
