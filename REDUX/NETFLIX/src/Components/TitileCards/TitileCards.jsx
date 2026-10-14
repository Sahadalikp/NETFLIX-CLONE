import React, { useEffect, useRef, useState } from 'react'
import './TitileCards.css'
import Cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom';


function TitileCards({titile,catagory}) {

  const[apiData,setApiData]=useState([])

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTY1MzczNjA2NTkwNGE5MjI5N2YwOTI2MDgyZWUwMiIsIm5iZiI6MTc5MTUzNjM2OS4xMjk5OTk5LCJzdWIiOiI2YWM4YWNmMTY4NDQzNDY0ZWFiNzk1ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kGMYqdq9duSSInf6Tnp7YpEyuLGGPvwP9WGqsa1BUjw'
  }
};                                                                                  



const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results)) 
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
},[])

console.log(apiData)
  return (
    <div className='TitileCards'>
      <h2>{titile?titile:"Populer on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitileCards