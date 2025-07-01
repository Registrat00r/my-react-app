import React from "react"

export const Customization = (): React.ReactElement => {
    return (
        <section className="section customization" id="customization">
            <h2 className="customization__title">Как бы хорошо это ни звучало</h2>

            <div className="customization__block">
                <div className="customization__item">
                    <img className="customization__item__img" src="img/card.svg" alt="Карта"/>
                    <h3 className="customization__item__title"> Безналичный расчет </h3>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/global.svg" alt="Планета"/>
                    <h3 className="customization__item__title"> Удобная <br /> онлайн-запись </h3>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/cosmetic.svg" alt="Косметика"/>
                    <h3 className="customization__item__title"> Професиональная мужская косметика </h3>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/tools.svg" alt="Инструменты"/>
                    <h3 className="customization__item__title"> Большой <br /> спектр услуг </h3>
                </div>
            </div>


        </section>
    )
}