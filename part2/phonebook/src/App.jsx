import Filter from './components/filter'
import Adding from './components/addPeople'
import RenderNames from './components/names'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] =useState ('')
  const [showAll, setShowAll] = useState(true)

  const addNewName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1
    }
    if (persons.some (person => person.name === nameObject.name))
    {
      window.alert(nameObject.name, ' is already in the phonebook')
    }else{
    setPersons (persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log('das me', event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('das my new number', event.target.value)
    setNewNumber (event.target.value)
  }

  const handleFiltering = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setNewFilter(filterValue);
    const filteredNames = persons.filter(person => person.name.toLowerCase().includes(filterValue));
    setShowAll(filteredNames.length === persons.length);
  }

  const namesToShow = showAll 
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(newFilter));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter ={newFilter}
      handlingFiltering={handleFiltering}
      />
        <Adding addNewName ={addNewName}
        newName = {newName}
        handleNameChange = {handleNameChange}
        handleNumberChange ={handleNumberChange}
        />
      <RenderNames showing = {namesToShow}/>
    </div>
  )
}

export default App