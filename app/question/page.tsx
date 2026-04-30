"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyDataStore } from "../../store/store";


export default function Question() {
  const router = useRouter();

  const questionData = [
    {
      title: "題目一",
      options:[
        {
          text:"選項一",
          value:1
        },
        {
          text:"選項二",
          value:2
        },
        {
          text:"選項三",
          value:3
        }
      ]
    },
    {
      title: "題目二",
      options:[
        {
          text:"選項一",
          value:1
        },
        {
          text:"選項二",
          value:2
        },
        {
          text:"選項三",
          value:3
        }
      ]
    },
    {
      title: "題目三",
      options:[
        {
          text:"選項一",
          value:1
        },
        {
          text:"選項二",
          value:2
        },
        {
          text:"選項三",
          value:3
        }
      ]
    }
  ];


const [questionIndex, setQuestionIndex] = useState(0);

function nextQuestion(optionIndex: number){
  console .log("使用者選擇：" + optionIndex);

  if(questionIndex < questionData.length-1){
    console .log("下一題～");
    setQuestionIndex( questionIndex +1);
  }else{
    console .log("看結果頁面");
    router.push("/prepare");
  }
}

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      答題
    <div>
      <div>{("Q"+ (questionIndex+1) + ".") + questionData[questionIndex].title}</div>
      <div  onClick={ ()=>nextQuestion(0)}>{questionData[questionIndex].options[0].text }</div>
      <div  onClick={ ()=>nextQuestion(1)}>{questionData[questionIndex].options[1].text }</div>
      <div  onClick={ ()=>nextQuestion(2)}>{questionData[questionIndex].options[2].text }</div>
    </div>

    {/* <Link className="text-amber-100 bg-black px-3 py-2 rounded-3xl" href="/prepare">準備看結果!</Link> */}
    </div>
  );
}