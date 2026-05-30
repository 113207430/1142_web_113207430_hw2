"use client";
import Link from "next/link";


export default function ActionButton({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
  return (
    <Link className=" px-6 py-3 rounded-3xl
  bg-white/20 backdrop-blur-md
  
  text-black font-bold
  cursor-pointer
  transition-transform duration-200
  hover:scale-105 hover:bg-white/30
  active:scale-95" style={{ color: "#000000", boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.3)" }} href={path}>
      {text}
    </Link>
  );
}