import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/feedslider/testimonial-01.jpg';
import img2 from '../../images/feedslider/testimonial-02.jpg';
import img3 from '../../images/feedslider/testimonial-03.jpg';
import './Feedslider.css';

const Feedslider = () => {
    return (
        <>
            <Carousel className="feed-bg">
                <Carousel.Item className="text-center f-slide" interval={800}>
                    <img
                    className="fs-img"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="fs-caption">
                        <p>I appreciate your hospital really good environment and excellent patient care.Extremely qualified doctors with a humane approach towards patients. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
                        <h5>Maria Rusconi</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center f-slide" interval={500}>
                    <img
                    className="fs-img"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="fs-caption">
                        <p>Thanks to everyone its such a grt hospitalGood maintainence of rooms. Nice geusture by nursing staff. Overall had a very good experience and feel at home.Wish the team a Grand Success, a bright future and good speed. Good job. Cheers..!</p>
                        <h5>Richard William</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center f-slide">
                    <img
                    className="fs-img"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="fs-caption">
                        <p>I am very thankful to this hospital and Dr. Justin Beckham for curing my father’s health problem with his skillful treatment.I really appreciate all the doctors and nursing staff for their commitment. Atmosphere of hospital in always pin drop silence.</p>
                        <h5>Amanda Kinedy</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Feedslider;