import QuizImg from "../assets/quiz-logo.png"

export default function Header() {
  return <header>
    <img src={QuizImg} alt="Quiz logo" />
    <h1>ReactQuiz</h1>
  </header>
}