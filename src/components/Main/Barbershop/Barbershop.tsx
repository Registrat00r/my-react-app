import React from "react"

export const Barbershop = (): React.ReactElement => {
    return (
         <section className="section barbershop" id="barbershop">
            <div className="barbershop__content">
                <h4 className="barbershop__subtitle">БАРБЕРШОП</h4>
                <h2 className="barbershop__title">Почему выбирают <span className="barbershop__span">барбершоп</span>?</h2>
                <p className="barbershop__description">Барбершоп  — это не просто заведение, где можно постричься!<br />
                    <br />
                    Сюда приходят за новыми эмоциями. Здесь тебе предложат поговить<br/>
                    и расслабиться. Более того, высококвалифицированные мастера<br/>
                    тебе сделают стильную причёску.</p>
                <button className="barbershop__button button-sign" type="button">Узнать больше</button>
            </div>


            <img className="barbershop__image" src="img/barberhool.png" alt="Показ функционала внутри"/>
        </section>
    )
}