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
  if (good != 0 || neutral != 0 || bad != 0)
  {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text = {'bad'} />
      <h1>Statistics</h1>
      <DisplayStats yes = {good} neut = {neutral} no = {bad} sign ={'%'}/>
    </div>
    
  )
  }else{
  return (
    <div> 
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text = {'bad'} />
      <h1>Statistics</h1>
      <p>No feedback given yikes</p>
    </div>
  )
  }
}

const StatisticsLine = (props) =>(
  <div>
  <p> {props.textStats} {props.amount} {props.percSign}</p>
</div>
)
const DisplayStats =  (props) => {
  return (
    <div>
    <StatisticsLine textStats= {'good'} amount={props.yes}/>
    <StatisticsLine textStats = {'neutral'} amount = {props.no}/>
    <StatisticsLine textStats = {'bad'} amount = {props.neut}/>
    <StatisticsLine textStats={'all'} amount = {props.yes + props.neut + props.no}/>
    <StatisticsLine textStats={'average'} amount={(props.yes - props.no)/((props.yes + props.neut + props.no))}/>
    <StatisticsLine textStats={'Percentage of positives'} amount = {props.yes/(props.yes+props.neut+props.no)*100} percSign={props.sign}/> 
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick} >
    {text}
  </button>
)


export default App