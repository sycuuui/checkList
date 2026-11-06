import { ResultSummary } from "../../components/ResultSummary/ResultSummary";
import styles from "./ResultPage.module.css";

interface ResultPageProps {
  bandTitle: string;
  bandDescription: string;
  totalScore: number;
  maxScore: number;
  onRestart: () => void;
}

export function ResultPage({
  bandTitle,
  bandDescription,
  totalScore,
  maxScore,
  onRestart,
}: ResultPageProps) {
  return (
    <div className={styles.wrapper}>
      <ResultSummary
        bandTitle={bandTitle}
        bandDescription={bandDescription}
        totalScore={totalScore}
        maxScore={maxScore}
      />
      <button type="button" className={styles.restartButton} onClick={onRestart}>
        다시 하기
      </button>
    </div>
  );
}
