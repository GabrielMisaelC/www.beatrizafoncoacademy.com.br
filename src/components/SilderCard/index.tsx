import React, { Component } from "react";
import Slider from "react-slick";

import img03 from "../../images/ImagensCurso/img03.jpeg"
import procedimento01 from "../../imagesProcedimentos/procedimento01.jpg"
import procedimento02 from "../../imagesProcedimentos/procedimento02.jpg"
import procedimento03 from "../../imagesProcedimentos/procedimento03.jpg"

import { Img, H1, H2, Hr, Div } from './styles';

export default class SilderCard extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       speed: 10000,
      //       autoplaySpeed: 1000,
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       initialSlide: 1
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       speed: 10000,
      //       autoplaySpeed: 1000,
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };


    const posts = [
      { img: img03 },
      { img: img03 },
      { img: img03 }
    ];


    return (
      <div style={{ textAlign: "center" }}>
        <Slider {...settings}>
          {posts.map((item, index) => {
            return (
              <Div key={index} style={{ textAlign: 'center', alignContent: 'center' }}>
                  <Img src={item.img} />
              </Div>
            );
          })}
        </Slider>
      </div>
    );
  }
}