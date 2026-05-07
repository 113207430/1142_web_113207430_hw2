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

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>答題</div>
      <div>
        <div>{"Q" + (questionIndex + 1) + "." + q.title}</div>
        <div onClick={() => nextQuestion(0)}>{q.options[0].text}</div>
        <div onClick={() => nextQuestion(1)}>{q.options[1].text}</div>
        <div onClick={() => nextQuestion(2)}>{q.options[2].text}</div>
      </div>
    </div>
  );
}