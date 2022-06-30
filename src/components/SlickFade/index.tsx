import React, { Component } from "react";
import Slider from "react-slick";
import { Imagem } from "../ImgBanner";
import { Div } from './styles';

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
            <Imagem />
          </div>
          {/* <div>
            {isScreen900 ? <Img src={banner01} /> : <Img src={banner_300_400} />}
          </div>
          <div>
            {isScreen900 ? <Img src={banner01} /> : <Img src={banner_300_400} />}
          </div> */}
        </Slider>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
      </Div>
    );
  }
}