import React,{useState, Fragment} from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  return (
    <Fragment>
      <HeroBanner/>
      <SearchExercises />
    </Fragment>

  )
}

export default Home
