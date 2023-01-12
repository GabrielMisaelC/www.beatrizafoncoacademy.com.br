import React, { Component } from "react";
import Slider from "react-slick";
import designdeSobrancelha from './images/DesigndeSobrancelha.jpeg';
import browLamination from './images/browLamination.jpeg';
import lashLiftin from './images/lashLifting.jpeg';
import alongamentoUnha from './images/alongamentoUnha.jpeg';
import { Img, H1, H2, Hr, Div } from './styles';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 30000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            speed: 10000,
            autoplaySpeed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            speed: 10000,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    const posts = [
      { img: alongamentoUnha, title: 'Alongamento de Unhas' },
      { img: browLamination, title: 'Brow Lamination' },
      { img: lashLiftin, title: 'Lash Lifting' },
      { img: designdeSobrancelha, title: 'Design de Sobrancelha' }
    ];


    return (
      <div style={{ textAlign: "center" }}>
        <H1>Navegue pelos Serviços</H1>
        <H2>TODO PROCEDIMENTO CRIA UMA NOVA HISTÓRIA, ESCOLHA O SEU</H2>
        <Hr />
        <Slider {...settings}>
          {posts.map((item, index) => {
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <Div>
                  <div style={{ display: 'block' }}>
                    <Img src={item.img} />
                    <h3 style={{ fontSize: '16px', fontFamily: 'Trispace'}}>{item.title}</h3>
                  </div>
                </Div>
              </div>
            );
          })}
        </Slider>
        <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
      </div>
    );
  }
}