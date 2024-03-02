import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
function Card(props) {
  useEffect(() => {
    AOS.init();
  }, [])
   console.log(props);
  return (

<div data-aos="fade-right" className='top' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 1)),url(${props.data.bg_url})`}}>
<div className='trans'>
  <div className='box-1'>
  <span>
    <img className='img1' src={props.data.img_url}/>
  </span>

  <div className='box-1-inner'>
       <p className='movie_name'>{props.data.movie_name}</p>
       <p className='date'>{props.data.date}</p>
       <span className='box2'>
        <p className='time'>{props.data.time}</p>
        <p className='type'>{props.data.type}</p>

       </span>
  </div>

 </div>
<p className='description'>{props.data.description}</p>

<div className='icons'>
<span class="material-symbols-outlined">
share
</span>
<span class="material-symbols-outlined">
favorite
</span>
<span class="material-symbols-outlined">
chat_bubble
</span>
</div>
</div>
</div>

      
    
  )
} 

export default Card;
