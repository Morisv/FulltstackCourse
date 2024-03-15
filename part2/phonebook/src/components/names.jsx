const RenderNames = ({showing}) => {
    return (
    <div>
        <h2>Numbers</h2>
        <ul>
          {showing.map(person =>
            <li key = {person.id}>{person.name} {person.number}</li>)}
        </ul>
    </div>
    )
}

export default RenderNames