import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { OptionButton } from "../../components/OptionButton/OptionButton";
import { NavigationButtons } from "../../components/NavigationButtons/NavigationButtons";
import type { ChecklistOption, ChecklistQuestion } from "../../types/checklist";
import styles from "./QuestionPage.module.css";

interface QuestionPageProps {
  question: ChecklistQuestion;
  options: ChecklistOption[];
  selectedScore: number | null;
  currentIndex: number;
  totalQuestions: number;
  isLastQuestion: boolean;
  onSelect: (score: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function QuestionPage({
  question,
  options,
  selectedScore,
  currentIndex,
  totalQuestions,
  isLastQuestion,
  onSelect,
  onPrev,
  onNext,
}: QuestionPageProps) {
  return (
    <div className={styles.wrapper}>
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      <h2 className={styles.question}>{question.text}</h2>
      <div className={styles.options}>
        {options.map((option) => (
          <OptionButton
            key={option.label}
            label={option.label}
            selected={selectedScore === option.score}
            onClick={() => onSelect(option.score)}
          />
        ))}
      </div>
      <NavigationButtons
        canGoPrev={currentIndex > 0}
        canGoNext={selectedScore !== null}
        isLast={isLastQuestion}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
