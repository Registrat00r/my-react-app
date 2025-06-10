import React from "react";

export const Studio = (): React.ReactElement => {
    return (
         <section className="section studio">
            <div className="studio__content">
                <h4 className="studio__subtitle">СТУДИЯ</h4>
                <h2 className="studio__title">Оставайтесь<br/>в <span className="studio__span">гармонии</span></h2>
                <p className="studio__description">Попробуйте ведущее в отрасли музыкальное<br/> программное обеспечение
                    бесплатно, со временем<br/> окупите его и
                    будете владеть им вечно.</p>
                <button className="studio__button button-sign" type="button">ПОПРОБУЙТЕ СТУДИЮ</button>
            </div>


            <img className="studio__image" src="img/main_menu.png" alt="Показ функционала внутри"/>
        </section>
    )
}