import React, { Component } from "react";
import Slider from "react-slick";
import { Img, Div } from './styles';
import procedimento01 from "../images/procedimento01.jpg"
import procedimento02 from "../images/procedimento02.jpg"
import procedimento03 from "../images/procedimento03.jpg"

export default class SilderCard extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    };

    const posts = [
      { img: procedimento02 },
      { img: procedimento03 },
      { img: procedimento01 }
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