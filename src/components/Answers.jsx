import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelectAnswer }) => {
  const shuffledChoices = useRef();
  if (!shuffledChoices.current) {
    shuffledChoices.current = [...answers];
    shuffledChoices.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledChoices.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClasses}
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
