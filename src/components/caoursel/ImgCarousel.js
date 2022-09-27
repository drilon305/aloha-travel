import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from "../../assets/borabora.jpg";
import Maldives from "../../assets/maldives.jpg";
import KeyWest from "../../assets/keywest.jpg";

const ImgCarousel = () => {
  return (
    <div className="container">
<Carousel className="caoursel" showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={BoraBora} alt="/" />
      </div>
      <div>
        <img src={Maldives} alt="/" />
      </div>
      <div>
        <img src={KeyWest} alt="/" />
      </div>
    </Carousel>
    </div>
    
  );
};

export default ImgCarousel;
