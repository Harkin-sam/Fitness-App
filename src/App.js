import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer';

import './App.css';

function App() {

  return (
    <main className='container'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>

    <Footer/>

    </main>
    
  );
}

export default App;



