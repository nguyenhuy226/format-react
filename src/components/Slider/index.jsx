import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';
export const Slider = ({ children, slidesPerView = 1, className ,spaceBetween=0}) => {

    return (
        <Swiper
        spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            className={className}
        >
            {React.Children.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)}
        </Swiper>
    )
}
