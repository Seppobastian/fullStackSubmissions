const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const arr = [[part1,exercises1],[part2, exercises2],[part3, exercises3]]

  const Header = (props) =>{
    return(
      <h1>
        {props.course}
      </h1>
    )
  }
  const Content = (props) =>{
    return(
      props.data.map(d => <p>{d[0]} {d[1]}</p>)
    )
  }
  const Total = (props) =>{
    return(
      <p>
        Number of exercises {(props.data.map(d => d[1])).reduce((pSum, a) => pSum + a, 0)}
      </p>
      
    )
  }
  return (
    <div>
      <Header course={course}/>
      <Content data={arr}/>
      <Total data={arr}/>
    </div>
  )
}

export default App