import React from "react"

export const Sounds = (): React.ReactElement => {
    return (
        <section className="section sounds">
            <h4 className="sounds__subtitle">Звуки</h4>
            <h2 className="sounds__title">Найди свой <span className="sounds__title-span">звук</span></h2>
            <p className="sounds__description">Просматривайте и загружайте миллионы бесплатных сэмплов<br />
                от ведущих продюсеров, артистов и звукорежиссеров. Доступно<br />
                на настольных компьютерах, в Интернете и мобильных устройствах.</p>
            <button className="sounds__button button-sign" type="button">Попробуй звук</button>


             <div className="sounds__img">
                    <img className="sounds__image" src="img/sound_packs.png" alt="Програмное обеспечение для создания музыки"/>    
                    
                </div>

            {/* <div className="swiper">
                {/* Additional required wrapper
            <div className="swiper-wrapper">
                {/* Slides 
                <div className="swiper-slide">
                    <img className="sounds__image" src="img/sound_packs.png"
                        alt="Программное обеспечение для создания музыки" />
                </div>
                <div className="swiper-slide">
                    <img className="sounds__image" src="img/sound_packs.png"
                        alt="Программное обеспечение для создания музыки" />
                </div>
                <div className="swiper-slide">
                    <img className="sounds__image" src="img/sound_packs.png"
                        alt="Программное обеспечение для создания музыки" />
                </div>

            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

        </div> */}
        </section >
    )
}