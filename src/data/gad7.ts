import type { ChecklistDefinition } from "../types/checklist";

export const gad7Checklist: ChecklistDefinition = {
  title: "불안증상 자가진단 척도 (GAD-7)",
  description:
    "최근 2주 동안 다음과 같은 문제로 얼마나 자주 방해를 받았는지 선택해주세요. 이 검사는 정신과적 진단을 의미하지 않습니다.",
  options: [
    { label: "전혀 방해받지 않았다", score: 0 },
    { label: "며칠 동안 방해받았다", score: 1 },
    { label: "2주 중 절반 이상 방해받았다", score: 2 },
    { label: "거의 매일 방해받았다", score: 3 },
  ],
  questions: [
    { id: 1, text: "초조하거나 불안하거나 조마조마하게 느낀다" },
    { id: 2, text: "걱정하는 것을 멈추거나 조절할 수가 없다" },
    { id: 3, text: "여러 가지 것들에 대해 걱정을 너무 많이 한다" },
    { id: 4, text: "편하게 있기가 어렵다" },
    { id: 5, text: "쉽게 짜증이 나거나 쉽게 성을 내게 된다" },
    { id: 6, text: "너무 안절부절못해서 가만히 있기가 힘들다" },
    { id: 7, text: "마치 끔찍한 일이 생길 것처럼 두렵게 느껴진다" },
  ],
  resultBands: [
    {
      minScore: 0,
      maxScore: 4,
      title: "정상",
      description: "과도한 걱정이나 불안이 보고되지 않는 수준입니다.",
    },
    {
      minScore: 5,
      maxScore: 9,
      title: "경미",
      description: "경미한 수준의 불안이 있습니다. 주의깊은 관찰이 필요합니다.",
    },
    {
      minScore: 10,
      maxScore: 14,
      title: "중간",
      description: "전문가 평가를 받아보는 것을 권장합니다.",
    },
    {
      minScore: 15,
      maxScore: 21,
      title: "심한",
      description: "일상생활에 지장을 줄 수 있는 수준입니다. 전문가의 도움을 권장합니다.",
    },
  ],
};
