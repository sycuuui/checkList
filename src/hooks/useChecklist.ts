import { useState } from "react";
import type { ChecklistDefinition } from "../types/checklist";
import { calculateTotalScore, findResultBand } from "../utils/scoring";

export type ChecklistStage = "intro" | "question" | "result";

export function useChecklist(definition: ChecklistDefinition) {
  const totalQuestions = definition.questions.length;

  const [stage, setStage] = useState<ChecklistStage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(
    Array(totalQuestions).fill(null)
  );

  const currentQuestion = definition.questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  function start() {
    setStage("question");
  }

  function selectAnswer(score: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = score;
      return next;
    });
  }

  function goNext() {
    if (currentAnswer === null) return;
    if (isLastQuestion) {
      setStage("result");
      return;
    }
    setCurrentIndex((i) => i + 1);
  }

  function goPrev() {
    if (currentIndex === 0) return;
    setCurrentIndex((i) => i - 1);
  }

  function restart() {
    setStage("intro");
    setCurrentIndex(0);
    setAnswers(Array(totalQuestions).fill(null));
  }

  const totalScore = calculateTotalScore(answers);
  const resultBand = findResultBand(totalScore, definition.resultBands);
  const maxScore = definition.options.reduce(
    (max, option) => Math.max(max, option.score),
    0
  ) * totalQuestions;

  return {
    stage,
    currentIndex,
    totalQuestions,
    currentQuestion,
    currentAnswer,
    isLastQuestion,
    progress: (currentIndex + 1) / totalQuestions,
    start,
    selectAnswer,
    goNext,
    goPrev,
    restart,
    totalScore,
    maxScore,
    resultBand,
  };
}
