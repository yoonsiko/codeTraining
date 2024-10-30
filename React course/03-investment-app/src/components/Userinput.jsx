export default function Userinput({ onChange, inputData }) {

  return <section id='user-input'>
    <div className='input-group'>
      <p>
        <label>Initial Investment</label>
        <input type='number' required onChange={(e) => onChange("initialInvestment", e.target.value)} value={inputData.initialInvestment}></input>
      </p>
      <p>
        <label>Annual Investment</label>
        <input type='number' required onChange={(e) => onChange("annualInvestment", e.target.value)} value={inputData.annualInvestment}></input>
      </p>
    </div>
    <div className='input-group'>
      <p>
        <label>Expected return</label>
        <input type='number' required onChange={(e) => onChange("expectedReturn", e.target.value)} value={inputData.expectedReturn}></input>
      </p>
      <p>
        <label>Duration</label>
        <input type='number' required onChange={(e) => onChange("duration", e.target.value)} value={inputData.duration}></input>
      </p>
    </div>

  </section>
}