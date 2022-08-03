import React, { Component } from "react";
import Slider from "react-slick";
import { Img, Div } from './styles';
import imgSala from "../image/sala01.jpeg"
import imgHall from "../image/hall.jpeg"
import imgUnhas from "../image/unhas.jpeg"
import img03   from "../../../images/ImagensCurso/img03.jpeg"



export default class SilderCardSpaceTeaching extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    };

    const posts = [
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