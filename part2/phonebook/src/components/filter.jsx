const Filter = ({filter, handlingFiltering}) =>{
    return (
        <div>
            filter shown with : <input value ={filter} 
            onChange ={handlingFiltering}/>
      <p></p>
        </div>
    )
  }

export default Filter 