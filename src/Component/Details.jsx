import React from 'react'
import Movie from '../Moviedata.json'
import Card from './Card';
function Details() {
// console.log(Movie);
  return (
<main>
   {
    Movie.map((e,index)=>(
         <Card data={e}/>
        ))
  }
</main>
  )
}

export default Details;
