import React from 'react'
import Container from '../UI/Container'
import './Subscribe.css'
import SubscribeForm from './SubscribeForm'

function Subscribe() {
  return (
    <div className='subscribe'>
        <Container className='subscribe-cont'>
            <div className="subscribe-title">
                <h2>Subsribe to our newsletter for deal & promo</h2>
            </div>
            <div className="subscribe-form">
                <SubscribeForm />
            </div>
        </Container>
    </div>
  )
}

export default Subscribe