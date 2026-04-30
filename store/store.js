import { create } from 'Zustand';

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


const usepsyData = create(
   (set) => ({
    questionIndex: 0,
    totalValue:0,
    questions: questionData

   })
 

);

export { usePsyDataStore }