"use client";
import Link from "next/link";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation";


export default function Result() {
  const { psyData, setScore } = usePsyStore();
  const router = useRouter();

  let result = <div>結果 C</div>;
  if (psyData.score < 3) result = <div>結果 A <a href="https://www.google.com"></a></div>;
  else if (psyData.score < 7) result = <div>結果 B</div>;

  function playagain() {
    setScore(0);
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>結果，目前積分：{psyData.score}</div>
      {result}
      <Link
        href="/"
        className="text-amber-100 bg-black px-3 py-2 rounded-3xl"
        onClick={playagain}
      >
        RESTART!
      </Link>
    </div>
  );
}