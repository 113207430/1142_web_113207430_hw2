"use client"
import Link from "next/link";

import { useState, useEffect } from "react";

export default function result() {


  return (
    <div className="flex flex-col justify-center items-center gap-4">
      結果!
      <Link className="text-amber-100 bg-black px-3 py-2 rounded-3xl" href="/">RESTART!</Link>
    </div>
  );
}