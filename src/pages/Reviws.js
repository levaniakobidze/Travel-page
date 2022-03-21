import React from 'react'
import './Reviews.css'
import Container from '../UI/Container'
import Slider from '../components/Slider'

function Reviws() {
  return (
    <div className='review'>
        <Container className='review-cont'>
            <div className="review-header">
                <div className="review-underline"></div>
                <h2>REVIEWS</h2>
                <p>Wherever you go, go with all your heart.</p>
            </div>
            
                <Slider />
           
        </Container>
    </div>
  )
}

export default Reviws