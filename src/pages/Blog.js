import React from 'react'
import Card from '../components/Card'
import Container from '../UI/Container'
import TextCard from '../components/TextCard'
import './Blog.css'
import WhiteButton from '../UI/WhiteButton'


function Blog() {
  return (
    <div className='blog'>
        <Container className='blog-cont'>

                <div className="blog-header">
                        <div className="blog-underline"></div>
                        <h2>BLOG</h2>
                        <p>He who does not travel does not know the value of men.</p>
                    </div>  
                <div className="blog-cards">
                    <Card class='blog-hover-box'  className='blog-card-img' img={'https://wallpapercave.com/dwp1x/wp4069425.jpg'}/>
                    <Card class='blog-hover-box'  className='blog-card-img' img={'https://wallpapercave.com/dwp1x/wp3067499.jpg'}/>
                    <Card class='blog-hover-box'  className='blog-card-img' img={'https://wallpapercave.com/dwp1x/wp4069454.jpg'}/>
                    </div>

                    <div className="blog-text-cards">
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

            <div className="blog-button-cont">
                <WhiteButton className='blog-button'>VIEW MORE</WhiteButton>
            </div>
        </Container>
    </div>
  )
}

export default Blog