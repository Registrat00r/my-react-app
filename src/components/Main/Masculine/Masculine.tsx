import React from "react"

export const Masculine = (): React.ReactElement => {
    return (
        <section className="section masculine" id="masculine">
            <div className="masculine__content">
                <h2 className="masculine__title">В этом заведении ты можешь<br/><span className="masculine__span"> рассчитывать на следующее:</span></h2>
                <p className="masculine__description">
                    первоклассное обслуживание;<br />
                    интересные беседы;<br />
                    крутые «селфи»<br />
                </p>
                <button className="masculine__button button-sign" type="button">Выберите стиль</button>
            </div>

            <div className="masculine__circle">

                <img src="img/hair/hair_1.png" className="masculine__hair masculine__hair-1" alt="Прическа"/>
                <img src="img/hair/hair_2.png" className="masculine__hair masculine__hair-2" alt="Прическа"/>
                <img src="img/hair/hair_3.png" className="masculine__hair masculine__hair-3" alt="Прическа"/>
                <img src="img/hair/hair_4.png" className="masculine__hair masculine__hair-4" alt="Прическа"/>
                <img src="img/hair/hair_5.png" className="masculine__hair masculine__hair-5" alt="Прическа"/>
                <img src="img/hair/hair_6.png" className="masculine__hair masculine__hair-6" alt="Прическа"/>

                <img src="img/hair/hair_7.png" className="masculine__hair masculine__hair-7" alt="Прическа"/>
                <img src="img/hair/hair_8.png" className="masculine__hair masculine__hair-8" alt="Прическа"/>
                <img src="img/hair/hair_9.png" className="masculine__hair masculine__hair-9" alt="Прическа"/>
            </div>

            <div className="masculine__rectangle"></div>
        </section>
    )
}