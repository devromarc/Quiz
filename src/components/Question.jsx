import React from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const Question = ({
  questionText,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onTimeout,
  answers,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onTimeout} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
