// src/store.js
import { create } from 'zustand'

// store/store.ts (quizData 部分)

const quizData = [
  {
    title: "電車難題。你正在駕駛一輛失速的電車，改道不改道，你會做什麼選擇呢？",
    image: "/1.png",
    options: [
      { text: "不改道撞五人", value: 1 },
      { text: "改道撞一人", value: 1 },
      { text: "撞完五人後改道撞另一人", value: 5 },
      { text: "犧牲自己一人翻車拯救所有其他人", value: 0 },
    ],
  },
  {
    title: "朋友邀請你吃一塊他的蛋餅，你會夾：",
    image: "/2.png",
    options: [
      { text: "中間那幾塊", value: 2 },
      { text: "最邊邊那一塊", value: 0 },
    ],
  },
  {
    title: "遇到世界健身的工作人員發問卷，你會：",
    image: "/3.jpg",
    options: [
      { text: "接過來填個資", value: 1 },
      { text: "接過來亂填個資", value: 0 },
      { text: "拍拍屁股大步走掉", value: 3 },
      { text: "大步走掉（但不拍拍屁股）", value: 1 },
    ],
  },
  {
    title: "你跟最好的朋友同時想上廁所時，你會：",
    image: "/4.jpg",
    options: [
      { text: "讓他先", value: 0 },
      { text: "讓他先然後狂敲門，所以輪到你的時候可以慢慢來", value: 2 },
      { text: "自己先然後速戰速決", value: 1 },
      { text: "自己先然後慢慢享受如廁時光", value: 3 },
    ],
  },
  {
    title: "你吃素嗎",
    image: "/5.png",
    options: [
      { text: "是（隨便，我沒有要幫你訂便當）", value: 0 },
      { text: "不是（隨便，我沒有要幫你訂便當）", value: 0 },
    ],
  },
  {
    title: "你在拜拜或禱告的時候會說請、謝謝、對不起嗎？",
    image: "/6.png",
    options: [
      { text: "會", value: 0 },
      { text: "不會", value: 2 },
    ],
  },
  {
    title: "科學研究發現，蜘蛛靠近人類常常是因為感到害怕，想要尋求人類的保護，但蜘蛛通常在得到庇護之前就被人類殺死了。閱讀結束後，下一次看到蜘蛛爬到手臂上的你會：",
    image: "/7.png",
    options: [
      { text: "彈掉", value: 1 },
      { text: "拍死", value: 3 },
      { text: "彈掉再拍死", value: 5 },
      { text: "拍死再彈掉", value: 5 },
    ],
  },
  {
    title: "咖哩飯拌？",
    image: "/8.jpg",
    options: [
      { text: "絕對要拌，不拌的根本是邪教", value: 1 },
      { text: "蛤，要拌的根本是邪教", value: 1 },
      { text: "在浩瀚宇宙中人們的存在不過虛無飄渺，每個瞬間的行為與想法在時間洪流浩浩湯湯的奔湧之下根本不值一提。對於特定選擇的是非對錯反覆爭辯，彷彿落入漁網中以猙獰姿態翻騰的魚，無疑是徒然掙扎。既然終點終將被熵所吞沒，榮耀與羞恥、善良與卑劣、成功與失敗，也不過是生物為了抵抗虛無而臨時發明的。人類熱衷於替選擇賦予重量，彷彿只要足夠嚴肅地思考，就能讓自身短暫的存在顯得更加崇高。最終從群星的尺度回望，那些徹夜未眠的糾結，甚至不如一粒漂浮於黑暗中的宇宙塵埃更能留下痕跡。所以無所謂。", value: 3 },
    ],
  },
  {
    title: "你的下一口會是？",
    image: "/sandwich.png",
    options: [
      { text: "A", value: 2 },
      { text: "B", value: 1 },
      { text: "C", value: 0 },
    ],
  },
  {
    title: "隨便選一個選項（測試你平常積的陰德）：",
    image: "/9.jpg",
    options: [
      { text: "", value: 0 },
      { text: "", value: 1 },
      { text: "", value: 2 },
    ],
  },
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: quizData
    },
    setScore: (score) =>
      set((state) => ({
        ...state,
        psyData: { ...state.psyData, score },
      })),
}))


export { usePsyStore }