import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

export function Slider() {
    return (
        <Swiper modules={[Pagination]}
            spaceBetween={720}
            pagination={{ clickable: true }}>

            <SwiperSlide>
                <img className="slider__image" src="img/sound_packs.png"
                    alt="Программное обеспечение для создания музыки"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider__image" src="img/sound_packs.png"
                    alt="Программное обеспечение для создания музыки"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="slider__image" src="img/sound_packs.png"
                    alt="Программное обеспечение для создания музыки"></img>
            </SwiperSlide>

        </Swiper>
    )
}