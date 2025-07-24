import React from "react";
import Blue from "../assets/Blue.png";
import Eva from "../assets/Eva.png";
import Yn from "../assets/Yn.png";
import { Carousel } from "antd";

const Slide = () => (
  <div className="px-[150px] mb-[60px] pt-[60px]">
    <Carousel autoplay arrows className="rounded overflow-hidden">
      <div>
        <img src={Yn} className="w-full h-[400px] cover-object" />
      </div>
      <div>
        <img src={Eva} className="w-full h-[400px] fill" />
      </div>
      <div>
        <img src={Blue} className="w-full h-[400px] fill" />
      </div>
    </Carousel>
  </div>
);

export default Slide;
