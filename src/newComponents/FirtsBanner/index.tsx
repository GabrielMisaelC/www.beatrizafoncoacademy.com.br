import React, { Component } from "react";
import Slider from "react-slick";
import { Div, Conteiner, Titulo, Img, Meio, PostSlider, DivButton } from "./styles";

import principal1 from "./images/Principal1.png";
import principal2 from "./images/Principal2.png";
import principal3 from "./images/principal3.png";

import { ButtonInstagram } from "./components/ButtonIntagram";
import { ButtonFacebook } from "./components/ButtonFacebook";
import { ButtonAgenda } from "./components/ButtonAgenda";

export default class FirtsBanner extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };

    const imgs = [
      { img: principal1},
      { img: principal2},
      { img: principal3}
    ];


    return (
      <Conteiner>
        <Titulo>Arraste Para Cima</Titulo>
        
        <Meio style={{ gap: 20 }}>

        <PostSlider>
        <Slider {...settings}>
        {imgs.map((item, index) => {
            return (
              <Div key={index} style={{ alignContent: 'center' }}>
                  <Img src={item.img} />
              </Div>
            );
          })}
        </Slider>
        </PostSlider>

        <DivButton style={{ gap: 20 }}>
          <div>
            <ButtonInstagram/>
          </div>
          <div>
            <ButtonFacebook/>
          </div>
          <div>
            <ButtonAgenda/>
          </div>
        </DivButton>

        </Meio>
      </Conteiner>
    );
  }
}