// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const Slider = ({ images }) => {
  return (
    <Swiper
      navigation
      loop
      spaceBetween={10}
      className="swiper-container"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
