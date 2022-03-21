import React,{useState} from 'react'
import './Slider.css'

let reviewArray = [
    {title:'“The trip to Belgium was wonderful”', text:'Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu.', user:'Steven & Anna'},
    {title:'“That was really amazing trip”', text:'Curae sem nulla, curabitur per non himenaeos. Velit sed, luctus eleifend curabitur. Luctus odio platea, metus etiam, dictum sodales hac phasellus ipsum commodo. Tristique dui velit risus, facilisis ut auctor, platea.', user:'Stieven'},
    {title:'“My recomendations, the trip was awsome”', text:'Mattis posuere velit, neque netus ullamcorper accumsan ultricies. Venenatis ornare, nibh habitasse nisl dictumst. Interdum imperdiet aliquam nunc.', user:'Lora Davson'},
    {title:'“What a wonderfull trip”', text:'Eget posuere, rutrum molestie laoreet. Praesent quisque lorem a, conubia aenean fames, nisi rutrum id dictumst urna quis velit eros..', user:'Hanna Larret'},
    {title:'“Just amazing”', text:'Lorem ipsum dolor sit amet, id altera persequeris vim, mea an appareat prodesset. Cu mea error eripuit delicata. Nec soluta aliquid similique eu.', user:'Stephen Roden'}
]


function Slider() {

   const  [index,setIndex] = useState(0);

        const increaseIndex = () => {
            if(index == reviewArray.length-1){
                setIndex(0)
            }else {
                setIndex(()=>index+1)
            }
           
        }

        const decreaseIndex = () => {
            if(index == 0){
                setIndex(reviewArray.length-1)
            }else {
                setIndex(()=>index-1)
            }
           
            
        }

        console.log(index)
        
  return (
    <div className='slider'>
        <div className="arrow" onClick={decreaseIndex}> <img src={require('../images/Left-Arrow.png')} alt="image" /></div>
        <div className="slider-text"> <div className="review-text__title"> <h4>{reviewArray[index].title}</h4></div>
        
        <div className="review-text__text"><p>{reviewArray[index].text}</p></div>

        <div className="review-user">{reviewArray[index].user}</div>
        
         </div>
        <div className="arrow" onClick={increaseIndex}> <img src={require('../images/Right-Arrow.png')} alt="" /> </div>
    </div>
  )
}

export default Slider