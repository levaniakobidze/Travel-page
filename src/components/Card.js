import React,{useState} from 'react'
import './Card.css'
import Button from '../UI/Button'

function TripCard(props) {
            const [hover,setHover]=useState(false)
            const hoverHandler = () => {
                setHover(true)
            }
            const hoverRemoveHandler = () => {
                    setHover(false)
            }

  return (
    <div className={`trip-card-cont ${props.className}`} onMouseOver={hoverHandler} onMouseLeave={hoverRemoveHandler}>
            <div className={!hover ? `hover-box ${props.class}` : `hover-box box-on-hover ${props.class}`} >
                {hover && <Button className='hover-button'>VIEW MORE</Button>}
            </div>
            <img className={!hover ? 'trip-card-img' : 'trip-card-img card-on-hover'}  src={props.img}  alt="image" />   
    </div>
  )
}

export default TripCard