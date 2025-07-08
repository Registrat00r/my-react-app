import React from 'react'

export const Promo = (): React.ReactElement => {
    return (
        <section className="section promo">
            <div className="promo__content">
                <h2 className="promo__title section__title">Где начинается ваш стиль</h2>
                <p className="promo__description">Мы создаём не просто стрижки - мы создаём образ. Доверьтесь профессионалам,
                    которые знают толк в мужском стиле.
                </p>
                <div className="promo__button-sign">
                <button className="promo__button button-sign" type="button">Записаться</button>
</div>

            </div>
            <img className="promo__image" src="img/barberBackground.png" alt="Изображение двух людей"/>
            <div className="promo__rectangles"></div>
        </section>
    )
} 