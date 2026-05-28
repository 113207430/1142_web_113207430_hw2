"use client";
import Link from "next/link";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation";

const resultMap: Record<string, { title: string; desc: string }> = {
  heaven3: {
    title: "超棒天堂",
    desc: "可以無限失憶然後重聽最愛的歌、重看最愛的劇；可以在電影院重播人生中各種美好回憶；可以自由飛來飛去；想要什麼就有什麼，基本上就是心想事成。",
  },
  heaven2: {
    title: "不錯天堂",
    desc: "每天有兩次夕陽可以看；永遠維持剛剪完頭髮後第七天的髮型；指甲可以接藍芽到手機，自由變換型態跟顏色樣式；每次跳躍時可以離地一公尺，且持續15秒；鄰居是布萊德彼特。",
  },
  heaven1: {
    title: "普通天堂",
    desc: "氣溫剛剛好；空氣中總是瀰漫被子曬過太陽的味道；洗澡水永遠第一次開就開到想要的溫度；撕優格封膜優格都不會噴到手；可以自己設計彩虹顏色的排序。",
  },
  hell1: {
    title: "普通地獄",
    desc: "每天都可以吃到自己愛吃的食物，但吃到第二口就飽到撐；每次躺好準備睡覺時就開始想尿尿；床單永遠有一粒不知道是什麼的屑屑；看劇要調整進度條時永遠會拉過頭。",
  },
  hell2: {
    title: "很爛地獄",
    desc: "每次午休快睡著時都會有墜落感；蚊子在茫茫人海中就是要叮你；在暗戀的人面前大笑時會笑出豬聲；每兩小時周孝安就會在你耳邊唱「舊愛還是最美」；地震時準備要逃跑但腳永遠麻掉。",
  },
  hell3: {
    title: "最爛地獄",
    desc: "背景音24小時無限循環播放「來去台東」；偷滑別人的貼文時總是不小心按到愛心；開竹筷時永遠沒辦法完整分開；耳機其中一耳永遠沒聲音；你在電車難題中，總是被碾壓的那個人。",
  },
};

export default function Result() {
  const { psyData, setScore } = usePsyStore();
  const router = useRouter();
  const score = psyData.score; // ← 從 store 取出 score

  let resultKey = "";
  if (score <= 4) resultKey = "heaven3";
else if (score <= 8) resultKey = "heaven2";
else if (score <= 13) resultKey = "heaven1";
else if (score <= 18) resultKey = "hell1";
else if (score <= 23) resultKey = "hell2";
else resultKey = "hell3";

  const result = resultMap[resultKey];

  function playagain() {
    setScore(0);
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 pt-6">
      {/* <div>目前積分：{score}</div> */}
      <div className="text-2xl font-bold">{result.title}</div>
      <div className="text-center">{result.desc}</div>
      <Link
        href="/"
        className=" px-6 py-3 rounded-3xl
  bg-white/20 backdrop-blur-md
  border border-white/30
  text-black font-bold
  cursor-pointer
  transition-transform duration-200
  hover:scale-105 hover:bg-white/30
  active:scale-95"
        onClick={playagain}
      >
        RESTART!
      </Link>
    </div>
  );
}