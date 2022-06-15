import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <p> {props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad
  if (all > 0) {return  (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={(props.good-props.bad)/all} />
      <StatisticLine text="positive" value ={100*(props.good)/(all) +" %"} />
    </div>
  )} else {
    return(
      <h1> Statistics will show after there is at least one vote.</h1>
    )
  }
}

const Button = (props) => {
  return(
    <button onClick={() => props.setTo(props.value + 1)}   >vote {props.name}</button>
  )
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
      <Button setTo={setGood} value={good} name={"good"}/>
      <Button setTo={setNeutral} value={neutral} name={"neutral"}/>
      <Button setTo={setBad} value={bad} name={"bad"}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>      
    </div>
  )
}

export default App