import React from 'react'
import Container from '../UI/Container'
import './Trip.css'
import WhiteButton from '../UI/WhiteButton'
import TripCard from './Card'
import ServicesCard from './TextCard'

function Trip() {
  return (
    <div className='trip'>
        
        <Container className='trip-cont'>
                <div className="trip-header">
                    <div className="trip-underline"></div>
                    <h2>SPECIAL OFFERS</h2>
                    <div className="trip-icons">
                        <div className="line"></div>
                        <div className="box"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="trip-cards"> 
                <TripCard  img={'https://wallpapercave.com/dwp1x/wp4069425.jpg'}/>
                <TripCard  img={'https://wallpapercave.com/dwp1x/wp3067499.jpg'} />
                <TripCard img={'https://wallpapercave.com/dwp1x/wp4069454.jpg'} />
                <TripCard  img={'https://wallpapercave.com/dwp1x/wp4069471.jpg'}/>
                
                
                </div>


                <div className="trip-text-cards">
                    <ServicesCard  title={'Tour to Lviv'} text={' Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu, eu melius constituam sit. Et nam soleat accusamus. Vim hinc aeque viderer no.'}/>
                    <ServicesCard  title={'Tour to Lviv'} text={' Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu, eu melius constituam sit. Et nam soleat accusamus. Vim hinc aeque viderer no.'}/>
                    <ServicesCard  title={'Tour to Lviv'} text={' Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu, eu melius constituam sit. Et nam soleat accusamus. Vim hinc aeque viderer no.'}/>
                </div>


                <div className="trip-button-cont">
                    <WhiteButton className='trip-button'> VIEW MORE OFFERS </WhiteButton>
                </div>
               

        </Container>
        </div>
  )
}

export default Trip