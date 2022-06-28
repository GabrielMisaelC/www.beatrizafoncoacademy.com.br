import React, { Component } from "react";
import Slider from "react-slick";
import { Div, H1 } from './styles';

export default class SliderSlick extends Component {
  render() {
    const settings = {
    display: true,
    width: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    return (
      <Div>
        <Slider {...settings}>
          {["Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy","Beatriz Afonço Beauty Academy"].map((item, index) => {
            return (
              <div key={index}>
                  <H1>
                    {item}
                  </H1>
              </div>
            );
          })}
        </Slider>
      </Div>
    );
  }
}