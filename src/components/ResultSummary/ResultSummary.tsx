import styles from "./ResultSummary.module.css";

interface ResultSummaryProps {
  bandTitle: string;
  bandDescription: string;
  totalScore: number;
  maxScore: number;
}

export function ResultSummary({
  bandTitle,
  bandDescription,
  totalScore,
  maxScore,
}: ResultSummaryProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.score}>
        {totalScore} <span className={styles.maxScore}>/ {maxScore}</span>
      </span>
      <h2 className={styles.bandTitle}>{bandTitle}</h2>
      <p className={styles.bandDescription}>{bandDescription}</p>
    </div>
  );
}
