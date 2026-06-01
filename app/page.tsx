"use client";
import ActionButton from "@/component/ActionButton";
import Emoticons from "@/component/emoticons";

export default function Home() {
  return (
    <div className="flex h-full p-6">
    <div className="flex-1 flex flex-col justify-between items-center pt-16">
      <p className="text-center text-sm leading-relaxed" >
        歡迎光臨，親愛的朋友！<br />
        你會不會有時候很好奇<br />
        自己死掉之後到底會上天堂還是下地獄呢？<br />
        <br />
        我也會：）<br />
        馬上幫自己測看看吧！
      </p>
      <div className="mb-60">
        <ActionButton text="開始測驗!" path="/question" />
      </div>
    </div>
  </div>
  );
}