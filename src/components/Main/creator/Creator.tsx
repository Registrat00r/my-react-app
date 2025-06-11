import React from "react";
import { CardList } from "../../CardList/CardList";


export const Creator = (): React.ReactElement => {
    return (
        <section className="section creator">
            <div className="creator__content">
                <h2 className="creator__title">Что говорят <span className="creator__span">создатели</span><br/> о Splice</h2>
                <p className="creator__description"> Благодарим вас за проявленный интерес к нашей компании и добро
                    пожаловать в нашу компанию. Я хочу заткнуться, я хочу заткнуться. Черепаха слишком часто
                    появлялась.
                </p>
                <button className="creator__button button-sign" type="button">Попробуйте это прямо сейчас</button>
            </div>
            <div className="creator__card__container">
                <CardList/>

            </div>

            <img src="img/planet.png" className="creator__img" alt="Сеть интернета на планете"/>
        
        </section>
    )
}