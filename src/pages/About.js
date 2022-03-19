import React from "react";
import "./About.css";
import Container from "../UI/Container";
import WhiteButton from "../UI/WhiteButton";

function About() {
  return (
    <div className="about">
      <Container className='about-cont'>
        <div className="about-main-cont">
          <div className="about-text-cont">
            <div className="about-header">
              <h6>More Than 20 years of Experience</h6>
            </div>

            <h4 className="about-title">
              Ngga ada itu dua puluh tahun, baru bikin aja ini, gaya gayaan aja
              buat nipu kalian
            </h4>

            <div className="underline"></div>

            <p>
              Lorem ipsum dolor sit amet, id altera persequeris vim, mea an
              appareat prodesset. Cu mea error eripuit delicata. Nec soluta
              aliquid similique eu, eu melius constituam sit. Et nam soleat
              accusamus. Vim hinc aeque viderer no, ei aeque viris euismod quo.
              Id qui altera equidem.
            </p>

            <WhiteButton className='about-button'>ABOUT US</WhiteButton>
          </div>
          <div className="about-img-cont">
            <img className="about-img2" src={require('../images/about-img2.png')} alt="sdsadas" />
            <img className="about-img1" src={require('../images/about-img1.png')} alt="sdsadas" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
