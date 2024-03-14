const Header = ({header}) =>
    <h3>{header}</h3>

const Parts = ({name, exercises}) =>{
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({array}) => {
  return (
    <strong>Total {array.reduce( (totalId, currentValue) => totalId + currentValue.exercises, 0)} </strong>
  )
  
}

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

export default Course