import type { ChecklistDefinition } from "../types/checklist";

export const gad7Checklist: ChecklistDefinition = {
  title: "불안증상\n자가진단 척도 (GAD-7)",
  description:
    "간단한 심리검사로\n나의 불안 파도 높이를 확인해 보세요.\n\n지난 2주간, 다음의 문제들로 인해\n얼마나 자주 방해를 받았는지\n체크해 주시기 바랍니다.",
  options: [
    { label: "전혀 방해받지 않았다", score: 0 },
    { label: "며칠 동안 방해받았다", score: 1 },
    { label: "2주 중 절반 이상 방해받았다", score: 2 },
    { label: "거의 매일 방해받았다", score: 3 },
  ],
  questions: [
    { id: 1, text: "1. 초조하거나 불안하거나 조마조마하게 느낀다" },
    { id: 2, text: "2. 걱정하는 것을 멈추거나 조절할 수가 없다" },
    { id: 3, text: "3. 여러 가지 것들에 대해 걱정을 너무 많이 한다" },
    { id: 4, text: "4. 편하게 있기가 어렵다" },
    { id: 5, text: "5. 너무 안절부절못해서 가만히 있기가 힘들다" },
    { id: 6, text: "6. 쉽게 짜증이 나거나 쉽게 성을 내게 된다" },
    { id: 7, text: "7. 마치 끔찍한 일이 생길 것처럼 두렵게 느껴진다" },
  ],
  resultBands: [
    {
      minScore: 0,
      maxScore: 4,
      title: "안정",
      description: "불안이 일상에 거의 영향을 주지 않는 수준으로, 일상을 충분히 잘 보낼 수 있는 상태입니다.",
    },
    {
      minScore: 5,
      maxScore: 9,
      title: "경미한 불안",
      description: "일상의 컨디션을 약간 흐트러뜨릴 수 있는 가벼운 수준의 불안이 있습니다. 생활과 마음의 리듬을 점검할 필요가 있습니다.",
    },
    {
      minScore: 10,
      maxScore: 14,
      title: "중간 정도의 불안",
      description: "걱정이 잘 멈추지 않고 몸의 긴장, 초조가 일상에 실제로 지장을 줄 수 있습니다. 불안을 스스로 관리하는 것이 필요하며, 원한다면 전문가에게 도움을 요청하며 자신의 마음건강을 점검해볼 필요가 있습니다.",
    },
    {
      minScore: 15,
      maxScore: 21,
      title: "심한 불안",
      description: "불안이 학업, 수면, 대인관계 등 일상의 기능을 크게 떨어뜨릴 수 있습니다. 상담센터에 방문하여 추가적인 검사를 받아보거나, 심리상담사나 정신건강의학과 전문의 등 전문가의 도움을 받아볼 것을 적극 권장합니다.",
    },
  ],
};
