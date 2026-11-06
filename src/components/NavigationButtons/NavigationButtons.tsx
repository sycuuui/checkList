import styles from "./NavigationButtons.module.css";

interface NavigationButtonsProps {
  canGoPrev: boolean;
  canGoNext: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export function NavigationButtons({
  canGoPrev,
  canGoNext,
  isLast,
  onPrev,
  onNext,
}: NavigationButtonsProps) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.secondary}
        onClick={onPrev}
        disabled={!canGoPrev}
      >
        이전
      </button>
      <button
        type="button"
        className={styles.primary}
        onClick={onNext}
        disabled={!canGoNext}
      >
        {isLast ? "결과 보기" : "다음"}
      </button>
    </div>
  );
}
