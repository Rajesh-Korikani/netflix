import React from 'react'
import Row from '../utils_componets/Row';

import Banner from '../utils_componets/Banner';
import api from '../utils_componets/api'

const Home = () => {
  return (
    <div>
    

    <Banner/>

    <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
    <Row title="TRENDING NOW" fetchUrl={api.fetchTrending} />
    <Row title="TOP RATED" fetchUrl={api.fetchTopRated}/>
    <Row title="ACTION MOVIES" fetchUrl={api.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" fetchUrl={api.fetchComedyMovies} />
    <Row title="HORROR MOVIES" fetchUrl={api.fetchHorrorMovies}/>
    <Row title="ROMANCE MOVIES" fetchUrl={api.fetchRomanceMovies}/>
    <Row title="DOCUMENTARIES" fetchUrl={api.fetchDocumentaries} />
    </div>
  )
}

export default Home
