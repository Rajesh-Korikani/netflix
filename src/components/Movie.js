import React from 'react'
import Row from '../utils_componets/Row'
import api from '../utils_componets/api'
import '../utils_componets/App.css'

const Movie = () => {
  return (
    <div className='down'>
    <Row title="ACTION MOVIES" fetchUrl={api.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" fetchUrl={api.fetchComedyMovies} />
    <Row title="HORROR MOVIES" fetchUrl={api.fetchHorrorMovies}/>
    <Row title="ROMANCE MOVIES" fetchUrl={api.fetchRomanceMovies}/>
    
    </div>
  )
}

export default Movie
