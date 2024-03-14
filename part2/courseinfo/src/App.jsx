const App = () => {


const Course = ({course}) => {
  return (
    <div>
      <Header header = {course.name}/>
        {course.parts.map(part =>
          <Parts key = {part.id} name ={part.name} exercises = {part.exercises}/>
          )}
       <Total array = {course.parts}/> 
    </div>
  )
} 

const Header = ({header}) =>
    <h3>{header}</h3>

const Courses = (props) => 
    <h1>{props.courseNames}</h1>

const Parts = (props) =>{
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <strong>Total {props.array.reduce( (totalId, currentValue) => totalId + currentValue.exercises, 0)} </strong>
  )
  
}


const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div> 
      <h1>Web dev </h1>
      {courses.map (course => (  <Course key = {course.id} course={course}/>
      ))}</div>
  )
}

export default App