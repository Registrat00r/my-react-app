import React from "react";

export const Plugins = (): React.ReactElement => {
    return (
        <section className="section plugins">
            <div className="plugins__content">
                <h4 className="plugins__subtitle">ПЛАГИНЫ</h4>
                <h2 className="plugins__title">Создайте свою<br/><span className="plugins__span">цифровую студию</span></h2>
                <p className="plugins__description">Попробуйте ведущее в отрасли музыкальное программное обеспечение<br/>
                    бесплатно, со временем купите его и
                    будете владеть им вечно.</p>
                <button className="plugins__button button-sign" type="button">ПОПРОБУЙТЕ СНАРЯЖЕНИЕ</button>
            </div>

            <div className="plugins__circle">

                <img src="img/icon/musicLogo.png" className="plugins__logo-music" alt="Музыкальное лого"/>
                <img src="img/icon/retroColorLogo.png" className="plugins__logo-retro" alt="Лого радио"/>
                <img src="img/icon/fanLogo.png" className="plugins__logo-fan" alt="Лого вентилятора"/>
                <img src="img/icon/izotopeLogo.png" className="plugins__logo-izotope" alt="Изотоп лого"/>
                <img src="img/icon/blueLogo.png" className="plugins__logo-blue" alt="Синее-белое лого"/>
                <img src="img/icon/yellowWhiteLogo.png" className="plugins__logo-yellow" alt="Жёлто-белое лого"/>

                <img src="img/icon/serumLogo.png" className="plugins__logo-serum" alt="Лого Serum"/>
                <img src="img/icon/wordALogo.png" className="plugins__logo-word" alt="Лого с буквой 'А'"/>
                <img src="img/icon/orangeBlackLogo.png" className="plugins__logo-orange" alt="Оранжевое лого с чёрным"/>
            </div>

            <div className="plugins__rectangle"></div>
        </section>
    )
}