import React from 'react'

export const Promo = (): React.ReactElement => {
    return (
        <section className="section promo">
            <div className="promo__content">
                <h2 className="promo__title section__title">Где начинается<br/> ваша музыка</h2>
                <p className="promo__description">Звуки, предоставляемые бесплатно. Лучшее программное
                    обеспечение в отрасли. Бесконечное вдохновение. Начните творить с помощью Splice.</p>
                <button className="promo__button button-sign" type="button">Зарегистрироваться</button>

            </div>
            <img className="promo__image" src="img/photo_start.png" alt="Изображение двух людей"/>
            <div className="promo__rectangles"></div>
        </section>
    )
} 