import React from "react";
import Container from '../UI/Container'
import TextCard from '../components/TextCard'
import "./Services.css";
function Services() {
  return (
    <div className="services">
    <Container className='services-cont'>
    <div className="services-text-cont">
          <div className="services-underline"></div>
          <div className="services-header">
            <h1>SERVICES</h1>
          </div>
          <div className="services-title">
            <p>Travel and change of place impart new vigor to the mind.</p>
          </div>
          </div>
          <div className="services-card-cont">
          <TextCard
              title={"Hotel Bookings"}
              text={
                "Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu."
              }
            />

<TextCard
              title={"Hotel Bookings"}
              text={
                "Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu."
              }
            />

<TextCard
              title={"Hotel Bookings"}
              text={
                "Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu."
              }
            />
          </div>
        
    </Container>
    </div>
  );
}

export default Services;
