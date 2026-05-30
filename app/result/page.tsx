"use client";
import Link from "next/link";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation";

const resultMap: Record<string, { title: string; image: string }> = {
  heaven3: { title: "超棒天堂", image: "/results/heaven3.png" },
  heaven2: { title: "不錯天堂", image: "/results/heaven32.png" },
  heaven1: { title: "普通天堂", image: "/results/heaven1.png" },
  hell1:   { title: "普通地獄", image: "/results/hell1.png" },
  hell2:   { title: "很爛地獄", image: "/results/hell2.png" },
  hell3:   { title: "最爛地獄", image: "/hell3.png" },
};

function downloadImage(imagePath: string, title: string) {
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = `${title}.png`;
  link.click();
}

export default function Result() {
  const { psyData, setScore } = usePsyStore();
  const router = useRouter();
  const score = psyData.score;

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
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-center items-center gap-3"
      style={{ color: "#5B4B00"}}>
        <p className="text-center text-lg">我親愛的朋友，你死後將會被分配到：</p>
        <img
          src={result.image}
          alt={result.title}
          className="w-full rounded-2xl"
          style={{ filter: "drop-shadow(0px 8px 10px rgba(0,0,0,0.5))" }}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-3 pb-4 mt-3">
        <button
          onClick={() => downloadImage(result.image, result.title)}
          className="px-6 py-3 rounded-3xl bg-white/20 backdrop-blur-md border font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-white/30 active:scale-95"
          style={{ color: "#5B4B00", boxShadow: "0 0 8px 2px rgba(91, 75, 0, 0.3)" }}
        >
          下載下來給媽咪看
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-3xl bg-white/20 backdrop-blur-md border font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-white/30 active:scale-95"
          style={{ color: "#5B4B00", boxShadow: "0 0 8px 2px rgba(91, 75, 0, 0.3)" }}
          onClick={playagain}
        >
          再測一次（硬要）
        </Link>
      </div>
    </div>
  );
}