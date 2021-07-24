import React from 'react'
import SlideOne from '../Img/slide/slide-1.jpg'
import SlideTwo from '../Img/slide/slide-2.jpg'
import SlideThree from '../Img/slide/slide-3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <section id="heros" >
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="animate__animated animate__fadeInDown cap" >Henry  <span>Clausen</span></h2>
            <p className="animate__animated animate__fadeInUp desc">Hər uğurlu insanın bir planı, hər uğurusuz insanın bir bəhanəsi olur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideTwo}
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <h2 className="animate__animated animate__fadeInDown cap" >John <span>Murphy</span></h2>
            <p className="animate__animated animate__fadeInUp desc">Bir məhsulun ərsəyə gəldiyi qiymət yox, edəcəyiniz endirim vacibdir.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideThree}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h2 className="animate__animated animate__fadeInDown cap" >Peter <span>Drucker</span></h2>
            <p className="animate__animated animate__fadeInUp desc">Biznesin iki vacib funksiyası var: marketinq və yenilik.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
