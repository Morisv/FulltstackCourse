const RenderNames = ({showing}) => {
    return (
    <div>
        <h3>Numbers</h3>
        <ul>
          {showing.map(person =>
            <li key = {person.id}>{person.name} {person.number}</li>)}
        </ul>
    </div>
    )
}

export default RenderNames