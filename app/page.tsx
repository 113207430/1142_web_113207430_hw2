"use client";
import ActionButton from "@/component/ActionButton";
import Emoticons from "@/component/emoticons";
// import {ColorSlider, Label} from "@heroui/react";

export default function Home() {


  //階段名稱        路由規劃
  // 1.歡迎畫面    /
  // 2.答題       /question
  // 3.準備看結果  /prepare
  // 4.看結果     /result
  // https://psy-test.com/love/result?id=10


  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-6 text-3xl">

    歡迎！
    <Emoticons> </Emoticons>
    


    {/* <ColorSlider channel="hue" className="w-full max-w-xs" defaultValue="hsl(0, 100%, 50%)">
      <Label>Hue</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider> */}
    
    <ActionButton text="START!" path="/question" />
    </div>
  );
} 