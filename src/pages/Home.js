import React from 'react'
import './Home.css'
import Button from '../UI/Button'
import Container from '../UI/Container'

function Home() {
  return (
    <div className='home'>
        <div className="home-img"></div>
        <Container className='home-main-cont'>
            <div className="home-wrapper">
               
              <h2>EXCELLENT TOURS AT EXCELLENT PRICES!
                </h2>
                <h5>CONVENIENT SEARCH
                </h5>
                
                <Button className='home-button'>MORE INFO</Button>
            </div>


        </Container>
    </div>
  )
}

export default Home