import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Location from './Location'
const InputSearch = ({location}) => {

  const [searchIdInput, setSearchIdInput] = useState('')


  useEffect(() =>{
    let newState
    if (searchIdInput === '') {
      newState = Math.floor(Math.random() * (126 + 1) -1 )
    }else{  
      newState = searchIdInput
    }

    axios.get(URL)
    .then(res =>  useHeaderData(res.data))
    .catch(err => console.log(err))
  },[searchIdInput])
  

     const SearchId = event =>{
      event.preventDefault()
      setSearchIdInput(event.target.search.value)
     }
     console.log(setSearchIdInput);
     console.log(location);

  return (
    <div className='input_Search'>
      <form action="" onSubmit={SearchId}>
        <input type="text" id="search" placeholder='Type a location id'  />
        <button>Search</button>
      </form>
    </div>
  )
}

export default InputSearch
