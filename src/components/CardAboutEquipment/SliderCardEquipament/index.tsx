import React, { Component } from "react";
import Slider from "react-slick";
import { Img, Div } from './styles';
import procedimento01 from "../images/procedimento01.jpg"
import procedimento02 from "../images/procedimento02.jpg"
import procedimento03 from "../images/procedimento03.jpg"
import equipamento05 from "../images/equipamento05.jpg"
import equipamento06 from "../images/equipamento06.jpg"

export default class SilderCardEquipament extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    };

    const posts = [
      { img: equipamento05 },
      { img: procedimento02},
      { img: equipamento06 }
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