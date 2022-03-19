import React from 'react'
import './WhiteButton.css'

function WhiteButton(props) {
  return (
    <button className={`white-button ${props.className}`}>{props.children}</button>
  )
}

export default WhiteButton