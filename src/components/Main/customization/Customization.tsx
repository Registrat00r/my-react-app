import React from "react";

export const Customization = (): React.ReactElement => {
    return (
        <section className="section customization">
            <h2 className="customization__title">Как бы хорошо это ни звучало</h2>

            <div className="customization__block">
                <div className="customization__item">
                    <img className="customization__item__img" src="img/Volume_Up.png" alt="Звук"/>
                    <h3 className="customization__item__title"> 100 без роялти </h3>
                    <p className="customization__item__description">
                        Используйте звуки для чего угодно. <br/>
                        Они разрешены для коммерческого использования.</p>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/Unlock.png" alt="Разблокировать"/>
                    <h3 className="customization__item__title"> Никаких обязательств </h3>
                    <p className="customization__item__description">
                        Отмените подписку в любое время, без лишних вопросов.</p>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/Download.png" alt="Скачать"/>
                    <h3 className="customization__item__title"> Ваш навсегда </h3>
                    <p className="customization__item__description">
                        Сохраните все, что вы скачали. Даже если вы отмените подписку.</p>
                </div>

                <div className="customization__item">
                    <img className="customization__item__img" src="img/Play.png" alt="Играть"/>
                    <h3 className="customization__item__title"> Индивидуальные образцы </h3>
                    <p className="customization__item__description">
                        Просматривайте и загружайте отдельные образцы, а не только полные пакеты.</p>
                </div>
            </div>


        </section>
    )
}