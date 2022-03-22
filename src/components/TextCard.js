import React from 'react'
import './TextCard.css'

function ServicesCard(props) {
  return (
    <div className='services-card'>
            <div className="services-card__title"><h3>{props.title}</h3></div>
            <div className="services-card__underline"></div>
            <div className="services-card__text"><p>{props.text}</p></div>
    </div>
  )
}

export default ServicesCard