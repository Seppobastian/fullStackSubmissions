import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad
  return  (
    <div>
      <h1>Statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {all}</p>
      <p>average: {(props.good-props.bad)/all}</p>
      <p>positive: {100*(props.good)/(all)} %</p>
    </div>
  )
 
  
  // ...
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1 style={{"fontFamily":"arial"}}>
        Give feedback
      </h1>
      <button onClick={() => setGood(   good + 1)}   >vote good</button>
      <button onClick={() => setNeutral(neutral + 1)}>vote neutral</button>
      <button onClick={() => setBad(    bad + 1)}    >vote bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>      
    </div>
  )
}

export default App