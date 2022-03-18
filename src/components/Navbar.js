import React from 'react'
import './Navbar.css'
import Container from '../UI/Container'
import Button from '../UI/Button'
import { AiOutlineMail } from 'react-icons/ai';



function Navbar() {
  return (
    <Container className='navbar'>
     <div className="navbar-content">
                <div className="logo"><h1>OMEGA</h1> <p>travel</p></div>
              
                    <ul className="navbar-menu">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">TRIP</a></li>
                        <li><a href="#">REVIEWS</a></li>
                        <li><a href="#">BLOG</a></li>
                    </ul>
            
            <div className="navbar-button-cont"><Button className='navbar-button'>{<AiOutlineMail />}Talk to Us</Button></div>
            </div>
          
    </Container>
   
  )
}

export default Navbar