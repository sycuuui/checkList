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
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.meta}>총 {questionCount}개 문항</p>
      </div>
      <div className={styles.mascot}>
        <span className={styles.mascotEmoji} role="img" aria-label="웃는 얼굴">
          🙂
        </span>
      </div>
      <button type="button" className={styles.startButton} onClick={onStart}>
        시작
      </button>
    </div>
  );
}
