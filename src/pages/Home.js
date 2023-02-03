import React,{useState} from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  return (
    <div>
      <HeroBanner/>
      <SearchExercises />
      <Exercises />
    </div>

  )
}

export default Home
