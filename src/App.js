import React from 'react'
import Home from './components/Home'
import Navbar from './utils_componets/Navbar'
import './utils_componets/App.css';
import { Routes,Route } from 'react-router-dom';
import Movie from './components/Movie';
import Tv from './components/Tv';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/netflix_clone' element={<Home />}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path="/tv"    element={<Tv/>}/>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
