const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
        <Content courseName = {part1} numberExercises = {exercises1} />
        <Content courseName = {part2} numberExercises = {exercises2} />
        <Content courseName = {part3} numberExercises = {exercises3}/>
        <Total total = {exercises1+exercises2+exercises3} />
    </div>
  )
}
const Header = (props) => {
  return (
    <div> 
      <h1>{props.name}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>
        {props.courseName} {props.numberExercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


export default App