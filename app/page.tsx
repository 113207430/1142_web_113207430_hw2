"use client";
import ActionButton from "@/component/ActionButton";
import Emoticons from "@/component/emoticons";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <p className="text-center text-lg leading-relaxed">
          歡迎光臨，親愛的朋友！<br />
          你會不會有時候很好奇<br />
          自己死掉之後到底會上天堂還是下地獄呢？<br />
          我也會：）<br />
          所以馬上幫自己測看看吧！
        </p>
        {/* <Emoticons /> */}
      </div>
      <div className="flex justify-center pb-4" >
        <ActionButton text="START!" path="/question" />
      </div>
    </div>
  );
}