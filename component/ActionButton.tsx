"use client";
import Link from "next/link";


export default function ActionButton({ text, path }: { text: string, path: string }) {
  return (
    <Link className="text-amber-100 bg-black px-3 py-2 rounded-3xl" href="/">
      按鈕元件
    </Link>
  );
}