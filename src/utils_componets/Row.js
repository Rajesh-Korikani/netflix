import React,{useState,useEffect} from 'react'
import './App.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube'






const base_url="https://image.tmdb.org/t/p/original";
const Row = ({title,fetchUrl,isLargeRow}) => {

  const[movies,setMovies]=useState([]);
  const[trailerUrl,setTrailerUrl]=useState("");
  const[loading,setLoading]=useState(false)
  const[isError,setIsError]=useState({status:false,msg:""});

  const fetchData=async(urlId)=>{
    setLoading(true);
    setIsError({status:false,msg:""})
    try {
      
   
    const response =await fetch(urlId);
    const data=await response.json();
    setMovies(data.results)
    setLoading(false);
    setIsError({status:false,msg:""})

    if(response.status===404){
      throw new Error("data not found");
    }

  } catch (error) {
    setLoading(false);
    setIsError({
      status: true,
      msg: error.message || "something went wrong, pls try again!",})
  }

  }

  useEffect(()=>{fetchData(fetchUrl)}
  ,[]
  )

  if(loading){
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  if(isError?.status){
    return(<div>
      <h3 style={{
        color:'red',
      }}>
        {isError?.msg }
      </h3>
    </div>)
  }
  
  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name ||"")
      .then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(error=>console.log(error));
    }
  }

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }
    
  return (
    
   
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {
          movies&& movies.map((movie)=>{return(
           
            <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}/>
            
           
            )
          })
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
       
    </div>
    
  )
}

export default Row

