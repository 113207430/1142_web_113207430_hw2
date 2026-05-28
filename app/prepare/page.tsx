"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Question() {


  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-6 text-2xl">
    準備看結果
    <Link className=" px-6 py-3 rounded-3xl
  bg-white/20 backdrop-blur-md
  border border-white/30
  text-black font-bold
  cursor-pointer
  transition-transform duration-200
  hover:scale-105 hover:bg-white/30
  active:scale-95" href="/result">SHOW RESULT!</Link>
    </div>
  );
}