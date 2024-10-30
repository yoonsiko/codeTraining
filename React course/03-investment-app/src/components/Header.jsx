import img from "../assets/investment-calculator-logo.png"

export default function Header({ children }) {
  return <header id="header">
    <img src={img} />
    <h1>{children}</h1>
  </header>
}