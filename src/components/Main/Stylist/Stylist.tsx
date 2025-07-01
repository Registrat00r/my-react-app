import React from "react"
import { Slider } from "../../slider/Slider"



export const Stylist = (): React.ReactElement => {
    return (
        <section className="section stylist" id="stylist">
            <h4 className="stylist__subtitle">СТИЛИСТ</h4>
            <h2 className="stylist__title">Найди своего <span className="stylist__title-span">стилиста</span></h2>
            <p className="stylist__description">В каждом барбершопе <span className="stylist__description-span">Аристократ</span> вас приветливо встретят,<br/>
                 предложат напитки, подберут и сделают стрижку по стилю и <br/>аккуратно побреют.</p>
             <button className="stylist__button button-sign" type="button">Записаться</button>

            <Slider/>

        </section>
    )
}