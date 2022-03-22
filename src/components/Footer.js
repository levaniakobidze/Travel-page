import React from 'react'
import './Footer.css'
import Container from '../UI/Container'

function Footer() {
  return (
    <div className='footer'>
        <Container className='footer-cont'>
            <div className="footer-logo">
                <h5>OMEGA</h5>
                <p>travel</p>
                <div className="c">2018 All Right Reserved</div>
            </div>

            <ul className="footer-menu">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">HELP</a></li>
                    <li><a href="#">PRIVACY</a></li>
                    <li><a href="#">TERM</a></li>
            </ul>
        </Container>
    </div>
  )
}

export default Footer