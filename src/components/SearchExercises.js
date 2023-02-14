import React,{useState, useEffect} from 'react'
import './SearchExercises.css';
import { fetchData, exercisesOptions } from '../Utils/fetchData';

function SearchExercises() {

  const [search, setSearch]=useState('')


  const searchInputChangeHandler =(e)=>{
    setSearch(e.target.value)
  }

  const handleSearch = async () => {
    if (search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      console.log(exercisesData)
    }
  }


  return (
    <div className='Search-Exercises-container'>
      <h2>Awesome Exercises you <br /> should know</h2>

      <div className='text-field'>

          <input  placeholder='Search Exercises' type='text' onChange = { searchInputChangeHandler}/>
 
          <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
          
    </div>
  )
}

export default SearchExercises