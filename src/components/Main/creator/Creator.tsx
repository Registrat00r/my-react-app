import React from "react"
import { CardList } from "../../CardList/CardList"
import { NavLink } from 'react-router'


export const Creator = (): React.ReactElement => {
    return (
        <section className="section creator">
            <div className="creator__content">
                <h2 className="creator__title" id="creator">Что говорят <span className="creator__span">лучшие</span><br />барберы</h2>
                <p className="creator__description" >У лучших в городе мастеров можно привести в порядок бороду
                    и прическу, а еще полистать журнал.</p>
                <button className="creator__button button-sign" type="button">
                    <NavLink to="/cards" className="creator__cards">Наши мастера</NavLink>
                </button>
            </div >
            <div className="creator__card__container">
                <CardList />

            </div>

            <img src="img/planet.png" className="creator__img" alt="Сеть интернета на планете" />

        </section>
    )
}