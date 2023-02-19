import React,{useState,useEffect} from 'react'
import api from './api'
import './App.css';

const Banner = () => {

  const[movie,setMovie]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch(api.fetchNetflixOriginals);
      const data=await response.json()
      setMovie(data.results[Math.floor(Math.random()*data.results.length -1)])
    }
    fetchData()
  },[])

  const truncate=(str,n)=>{
    return str?.length>n ? str.substr(0,n-1)+"...":str;
  }
  return (
    <header className='banner'
    style={
      {
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
      }}>
      <div  className='banner-contents'>
        <h1 className='banner-title'>
          {
            movie?.title || movie?.name
          }
        </h1>
      
        <h1 className='banner-description'>
          {truncate(movie?.overview,150)}

        </h1>
        

      </div>
    </header>
  
  )
}

export default Banner
