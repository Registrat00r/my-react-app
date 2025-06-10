import React from "react";
import CardList from "../../Cards/CardList";

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
                 {/* <div className="creator__card  creator__card-1">
                    <div className="creator__card__content">
                        <p className="creator__card__description">На Splice я всегда могу найти то, что ищу, будь то именно
                            тот звук,
                            который мне нужен, или просто немного вдохновения.</p>
                        <img className="creator__card__image" src="img/photo/people_andrew.png" alt="Эндрю Хуанг"/>
                        <p className="creator__card__name">Эндрю Хуанг<br/><span className="creator__card__role"></span>Артист
                        </p>

                    </div>

                </div>

                <div className="creator__card creator__card-2">
                    <div className="creator__card__content">
                        <p className="creator__card__description">Наконец-то способ купить плагины, который работает. Платя
                            понемногу за
                            раз, продюсеры могут получить законный доступ к лучшим VST.</p>
                        <img className="creator__card__image" src="img/photo/people_kshmr.png" alt="KSHMR"/>
                        <p className="creator__card__name">KSHMR<br/><span className="creator__card__role"></span>Aртист</p>
                    </div>

                </div>
                <div className="creator__card creator__card-3">
                    <div className="creator__card__content">
                        <p className="creator__card__description">Было интересно погрузиться в сообщество создателей Splices и изучить инструменты,
                             которые поддерживают мой творческий процесс.</p>
                        <img className="creator__card__image" src="img/photo/people_kesha.png" alt="Кеша"/>
                        <p className="creator__card__name">Кеша<br/><span className="creator__card__role"></span>Aртист</p>
                    </div>

                </div>
                <div className="creator__card creator__card-4">
                    <div className="creator__card__content">
                        <p className="creator__card__description">Я всегда могу найти на Splice то, что ищу,
                             будь то нужный мне звук или просто источник вдохновения.</p>
                        <img className="creator__card__image" src="img/photo/people_andrew.png" alt="Эндрю Хуанг"/>
                        <p className="creator__card__name">Эндрю Хуанг<br/><span className="creator__card__role"></span>Aртист
                        </p>
                    </div>

                </div> */}

            </div>

            <img src="img/planet.png" className="creator__img" alt="Сеть интернета на планете"/>
        
        </section>
    )
}