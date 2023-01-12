import React, { Component } from "react";
import Slider from "react-slick";
import { Div, Conteiner, Titulo, Img } from "./styles";
import firts from "./images/firts.jpg";
import firtsBanner2 from "./images/firtsBanner2.jpg";
import firtsBanner3 from "./images/firtsBanner3.jpg"

export default class FirtsBanner extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
    };

    const imgs = [
      { img: firtsBanner2},
      { img: firts},
      { img: firtsBanner3}
    ];


    return (
      <Conteiner>
        <Titulo>Arraste Para Cima</Titulo>
        <Slider {...settings}>
        {imgs.map((item, index) => {
            return (
              <Div key={index} style={{ alignContent: 'center' }}>
                  <Img src={item.img} />
              </Div>
            );
          })}
        </Slider>
      </Conteiner>
    );
  }
}