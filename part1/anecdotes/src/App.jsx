import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const [votesArray, setVotes] = useState(() => new Array(anecdotes.length).fill(0))
  const mostVoted = [...anecdotes]
  let anecdoteOfTheDay = selected
  for (let i = 0; i < votesArray.length; i++)
  {
    if (votesArray[anecdoteOfTheDay] < votesArray[i])
    {
      anecdoteOfTheDay = i
    }
  }

  const getNumber = () => (
    setSelected (Math.floor(Math.random()*anecdotes.length))
  )
  const doTheVoting = () => {
    const newArray = [...votesArray]
    newArray[selected] += 1
    setVotes(newArray)   
}
let checkForVotes = 0
for (let x = 0; x < votesArray.length; x++)
{
  if (checkForVotes < votesArray[x])
  {
    checkForVotes = votesArray[x]
  }
}

  if (checkForVotes == 0)
  {
  return (
    <div>
      <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]} </p>
          <Button handleClick={doTheVoting} text={'vote'}/>
          <Button handleClick={getNumber} text={'anecdote'}/>
        <p>Votes : {votesArray[selected]}</p>
      <h1>Anecdote with most Votes</h1>
        <p>Not votes yet</p>
    </div>
  )
  }
  return (
    <div>
      <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]} </p>
          <Button handleClick={doTheVoting} text={'vote'}/>
          <Button handleClick={getNumber} text={'anecdote'}/>
        <p>Votes : {votesArray[selected]}</p>
      <h1>Anecdote with most Votes</h1>
        <p>{mostVoted[anecdoteOfTheDay]}</p>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

export default App