import React, { Component } from "react";
import Slider from "react-slick";
import img01 from '../../imagesProcedimentos/img01.jpeg';
import img02 from '../../imagesProcedimentos/img02.jpeg';
import img03 from '../../imagesProcedimentos/img03.jpeg';
import img04 from '../../imagesProcedimentos/img04.jpeg';
import { Img, H1, H2, Hr, Div } from './styles';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };


    const posts = [
      { img: img01, title: 'Alongamento de unhas' },
      { img: img02, title: 'BB Glow' },
      { img: img03, title: 'Lash Lifting' },
      { img: img04, title: 'Glow Lips' }
    ];


    return (
      <div style={{ textAlign: "center", display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <H1>Navegue pelos Serviços</H1>
        <H2>TODO PROCEDIMENTO CRIA UMA NOVA HISTÓRIA, ESCOLHA O SEU</H2>
        <Hr />
        <div>
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
        </div>
        <hr style={{ width: '80%' }} />
      </div>
    );
  }
}