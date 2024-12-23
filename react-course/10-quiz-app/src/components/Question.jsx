import Questiontimer from "./QuestionTimer.jsx"
import Answers from "./Answers.jsx"
import { useState } from "react";
import QUESTIONS from '../assets/question.js'

export default function Question({ questionKey, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionKey].answers[0] === answer,
      })

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000)
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered'
  }

  return (
    <div id='question'>
      <Questiontimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState} />
      <h2> {QUESTIONS[questionKey].text} </h2>
      <Answers
        answers={QUESTIONS[questionKey].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer} />
    </div>
  )
}