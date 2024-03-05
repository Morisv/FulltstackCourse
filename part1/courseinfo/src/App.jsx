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
        <Content name1 = {part1} amount1 = {exercises1}
        name2 = {part2} amount2 = {exercises2}
        name3 = {part3} amount3 = {exercises3}/>
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

const Part = (props) => {
  return (
    <div>
      <p> {props.courseName} {props.numberExercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part courseName = {props.name1}  numberExercises = {props.amount1}/>
      <Part courseName = {props.name2}  numberExercises = {props.amount2}/>
      <Part courseName = {props.name3}  numberExercises = {props.amount3}/>
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