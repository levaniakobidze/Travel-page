import React from 'react'
import './ServicesCard.css'

function ServicesCard(props) {
  return (
    <div className='services-card'>
            <div className="services-card__title">{props.title}</div>
            <div className="services-card__underline"></div>
            <div className="services-card__text">{props.text}</div>
    </div>
  )
}

export default ServicesCard