import React,{useEffect, useState} from 'react'
import './CardRow.css'
import axios from '../../axios'
import { API_KEY , imageUrl } from '../../Constants/constants'
import YouTube from 'react-youtube'


function CardRow(props) {
  const [card, setCard] = useState([])
  const [uKey, setUKey] = useState('')
  useEffect(() => {
    axios.get(props.url)
    .then(res => setCard(res.data.results))
  },[props]);

  const opts = {
      height: '390',
      width: '100%',
      justify: 'center',
      playerVars: {
        autoplay: 1,
      },
     }

      const getUKey = (id) => {        
        axios.get(`/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(res => setUKey(res.data.results[0]))        
      }
  
  return (
    <div className='card-row' >
      <h2>{props.title}</h2>
      <div className="cards">
        {card.map((movie, index) => {
         return  (
         <div className='card-hover' key={index}>           
          <img onClick={() =>  getUKey(movie.id) } className= {props.isSmall ? 'card-sm' : 'card'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" /> 
          <h3 className='card-title'>{movie ? movie.title||movie.name : ''}</h3>            
        </div>
        )
        })}
        
      </div>      
      { uKey && <YouTube opts={opts} videoId={uKey.key} /> }    
     
    </div>
  )
}

export default CardRow
