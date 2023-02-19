import React from 'react'
import Row from '../utils_componets/Row';
import api from "../utils_componets/api";

const Tv = () => {
  return (
    <div className='down'>
    < Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals}/>
    <Row title="TRENDING NOW" fetchUrl={api.fetchTrending} />
    <Row title="TOP RATED" fetchUrl={api.fetchTopRated}/>
    <Row title="DOCUMENTARIES" fetchUrl={api.fetchDocumentaries} />
    </div>
  )
}

export default Tv
