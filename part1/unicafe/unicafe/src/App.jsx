import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood (good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral (neutral + 1)
  }
  const handleBadClick = () => {
    setBad (bad + 1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text = {'bad'} />
      <h1>Statistics</h1>
      <DisplayStats textStats={'good'} amount={good}/>
      <DisplayStats textStats={'neutral'} amount={neutral}/>
      <DisplayStats textStats={'bad'} amount={bad}/>
    </div>
  )
}
const DisplayStats =  ({textStats, amount}) =>(
  <div>
    <p> {textStats} {amount}</p>
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick} >
    {text}
  </button>
)


export default App