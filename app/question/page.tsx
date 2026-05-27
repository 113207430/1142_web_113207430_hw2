"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "@/store/store";


export default function Question() {
  const router = useRouter();

  const [questionIndex, setQuestionIndex] = useState(0);
  const { psyData, setScore } = usePsyStore();

  function nextQuestion(optionIndex: number) {
    const addScore =
      psyData.quizData[questionIndex].options[optionIndex].value;
    setScore(psyData.score + addScore);

    if (questionIndex < psyData.quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/prepare");
    }
  }

  const q = psyData.quizData[questionIndex];
  if (!q) return null;

  return (
    <div className="w-full px-4 pt-6">
  <div className="w-full">{"Q" + (questionIndex + 1) + "." + q.title}</div>

  {q.image && (
    <img
      src={q.image}
      alt="題目圖片"
      className="w-full rounded-xl my-2"
    />
  )}

  {q.options.map((option: { text: string; value: number }, index: number) => (
    <div
      key={index}
      onClick={() => nextQuestion(index)}
      className="
        cursor-pointer
        bg-white/20 backdrop-blur-sm
        border border-white/40
        text-black font-bold
        px-4 py-3 rounded-2xl
        min-h-[3rem] h-auto
        whitespace-normal break-words
        transition-transform duration-200
        hover:scale-105 hover:shadow-lg hover:-translate-y-1
        active:scale-95
        w-full
        mt-2.5
      "
    >
      {option.text}
    </div>
  ))}
</div>
  );
}