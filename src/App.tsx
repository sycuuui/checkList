import { gad7Checklist } from "./data/gad7";
import { useChecklist } from "./hooks/useChecklist";
import { IntroPage } from "./pages/IntroPage/IntroPage";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { ResultPage } from "./pages/ResultPage/ResultPage";

function App() {
  const checklist = useChecklist(gad7Checklist);

  return (
    <div className="app-shell">
      {checklist.stage === "intro" && (
        <IntroPage
          title={gad7Checklist.title}
          description={gad7Checklist.description}
          questionCount={checklist.totalQuestions}
          onStart={checklist.start}
        />
      )}

      {checklist.stage === "question" && (
        <QuestionPage
          question={checklist.currentQuestion}
          options={gad7Checklist.options}
          selectedScore={checklist.currentAnswer}
          currentIndex={checklist.currentIndex}
          totalQuestions={checklist.totalQuestions}
          isLastQuestion={checklist.isLastQuestion}
          onSelect={checklist.selectAnswer}
          onPrev={checklist.goPrev}
          onNext={checklist.goNext}
        />
      )}

      {checklist.stage === "result" && (
        <ResultPage
          bandTitle={checklist.resultBand.title}
          bandDescription={checklist.resultBand.description}
          totalScore={checklist.totalScore}
          maxScore={checklist.maxScore}
          onRestart={checklist.restart}
        />
      )}
    </div>
  );
}

export default App;
