import React from 'react'
import './SubscribeForm.css'
function SubscribeForm() {

const submitHandler = (e) => {
    e.preventDefault()
}


  return (
    <form action="#" onSubmit={submitHandler}>
        <div className="input-cont">
            <input  className='email-submit-input' type="text" placeholder='Youremail@address.com' />
             </div>
        <div className="input-button">
            <button className='email-submit-btn'>SUBSCRIBE</button>
        </div>


    </form>
  )
}

export default SubscribeForm