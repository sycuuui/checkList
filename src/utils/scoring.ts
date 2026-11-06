import type { ResultBand } from "../types/checklist";

export function calculateTotalScore(answers: Array<number | null>): number {
  return answers.reduce<number>((sum, score) => sum + (score ?? 0), 0);
}

export function findResultBand(
  totalScore: number,
  resultBands: ResultBand[]
): ResultBand {
  const matched = resultBands.find(
    (band) => totalScore >= band.minScore && totalScore <= band.maxScore
  );
  return matched ?? resultBands[resultBands.length - 1];
}
