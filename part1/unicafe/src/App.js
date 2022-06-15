import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1 font-family="Arial">
        Give feedback
      </h1>
      <button onClick={() => setGood(   good + 1)}   >vote good</button>
      <button onClick={() => setNeutral(neutral + 1)}>vote neutral</button>
      <button onClick={() => setBad(    bad + 1)}    >vote bad</button>

      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

export default App