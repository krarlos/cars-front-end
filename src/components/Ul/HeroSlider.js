import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import FindCarForm from './FindCarForm';


import "../../styles/hero-slider.css";

const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings} className="hero__slider">
            <div className="slider__item slider__item-01 mt0">
                <Container>

                </Container>



            </div >

            <div className="slider__item slider__item-02 mt0">
                <Container>

                </Container>
            </div>

            <div className="slider__item slider__item-03 mt0">
                <Container>
                    <div className="slider__content ">
                    </div>
                </Container>
            </div>
        </Slider >
    );
};

export default HeroSlider;