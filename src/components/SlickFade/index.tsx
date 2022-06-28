import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import Jpg1 from '../../images/abstract01.jpeg';
import Jpg2 from '../../images/abstract02.jpeg';
import Jpg3 from '../../images/abstract03.jpeg';
import prog from '../../images/programa01.jpeg';
import banner01 from '../../images/banner01.jpeg';
import { Img, Div } from './styles';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <Div>
        <Slider {...settings}>
          <div>
            <Img src={banner01} />
          </div>
          <div>
            <Img src={banner01} />
          </div>
          <div>
            <Img src={banner01} />
          </div>
        </Slider>
      </Div>
    );
  }
}