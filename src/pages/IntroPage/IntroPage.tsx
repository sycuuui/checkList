import styles from "./IntroPage.module.css";

interface IntroPageProps {
  title: string;
  description: string;
  questionCount: number;
  onStart: () => void;
}

export function IntroPage({
  title,
  description,
  questionCount,
  onStart,
}: IntroPageProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.meta}>총 {questionCount}개 문항</p>
      <button type="button" className={styles.startButton} onClick={onStart}>
        시작하기
      </button>
    </div>
  );
}
