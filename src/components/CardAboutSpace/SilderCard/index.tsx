import React, { Component } from "react";
import Slider from "react-slick";

import imgSala from "../image/sala01.jpeg"
import imgHall from "../image/hall.jpeg"
import imgUnhas from "../image/unhas.jpeg"

import { Img, H1, H2, Hr, Div } from './styles';

export default class SilderCardSpace extends Component {
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
      { img: imgHall },
      { img: imgSala },
      { img: imgUnhas }
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