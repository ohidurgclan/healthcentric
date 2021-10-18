import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import img1 from '../../images/slider/slider-1.jpg';
import img2 from '../../images/slider/slider-2.jpg';
import img3 from '../../images/slider/slider-3.jpg';
import img4 from '../../images/slider/slider-4.jpg';

const Slider = () => {
    return (
        <>
          <Carousel>
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2 className="slider-h2">The hospital you trust to</h2>
                  <h4 className="slider-h4">Care For Your Health</h4>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">The Hospital of The Futute</h2>
                <h4 className="slider-h4">Center & Health Care</h4>    
                </Carousel.Caption>
                </Carousel.Item>
              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">Changeing Health</h2>
                <h4 className="slider-h4"> Care For Good</h4>    
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 4 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="slider-h2">The Great Place of</h2>
                <h4 className="slider-h4">Medical Diagonestics</h4>    
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Slider;