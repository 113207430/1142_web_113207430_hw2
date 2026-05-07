"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import ActionButton from "@/component/actionButton";
// import {ColorSlider, Label} from "@heroui/react";

export default function Home() {


  //階段名稱        路由規劃
  // 1.歡迎畫面    /
  // 2.答題       /question
  // 3.準備看結果  /prepare
  // 4.看結果     /result
  // https://psy-test.com/love/result?id=10


  return (
    <div className="flex flex-col justify-center items-center gap-4">

    歡迎！
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>


    {/* <ColorSlider channel="hue" className="w-full max-w-xs" defaultValue="hsl(0, 100%, 50%)">
      <Label>Hue</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider> */}
    
    {/* <Link className="text-amber-100 bg-black px-3 py-2 rounded-3xl" href="/question">START!</Link> */}
    
    </div>
  );
} 