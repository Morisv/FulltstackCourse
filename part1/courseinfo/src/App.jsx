const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header name = {course.name} />
        <Content name1 = {course.parts[0].name} amount1 = {course.parts[0].exercises}
        name2 = {course.parts[1].name} amount2 = {course.parts[1].exercises}
        name3 = {course.parts[2].name} amount3 = {course.parts[2].exercises}/>
        <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
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