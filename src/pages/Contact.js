import React from "react";
import Container from "../UI/Container";
import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <Container className="contact-cont">
          <div className="contact-wrapper">
        <div className="contact-text-cont">
          <h2>TALK TO US</h2>
          <div className="contact-underline"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="contact-button">CONTACT US</button>
        </div>
        <div className="address-cont">
          <h5>ADDRESS</h5>
          <div className="contact-underline"></div>
          <p>
            PKF Texas 5847 San Felipe, Luxury Royale Suite 2600 Houston, Texas
            77057
          </p>
          <p><BsFillTelephoneFill /> +375 (44) 123-45-67</p>
          <p><AiOutlineMail /> omega.travel@gmail.com</p>

          <div className="contact-icons">
            <div className="icon">
              <FaFacebookF />{" "}
            </div>
            <div className="icon">
              <BsInstagram />{" "}
            </div>
            <div className="icon">
              <BsTwitter />{" "}
            </div>
            <div className="icon">
              <BsDiscord />{" "}
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
