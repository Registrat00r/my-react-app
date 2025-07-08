import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

export function Slider() {
    return (
        <Swiper modules={[Pagination]}
            spaceBetween={720}
            pagination={{ clickable: true }}>

            <SwiperSlide>
                <img className="slider__image" src="img/slider1.png"
                    alt="Стрижка бороды"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider__image" src="img/slider2.png"
                    alt="Стрижка волос"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider__image" src="img/slider3.png"
                    alt="Наши барберы"></img>
            </SwiperSlide>

        </Swiper>
    )
}