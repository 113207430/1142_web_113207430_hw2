"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Question() {


  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-6 text-base mt-10">
    會計師雅雯已經幫你計算好分數了...
    <Link className=" px-6 py-3 rounded-3xl
  bg-white/20 backdrop-blur-md
  
  text-black font-bold
  cursor-pointer
  transition-transform duration-200
  hover:scale-105 
  active:scale-95 " style={{ color: "#000000", boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.3)" }} href="/result">查看結果！</Link>
    </div>
  );
}