import React from "react";

export const Footer = (): React.ReactElement => {
    return (
            <footer className="container footer">
        <div className="footer__content">
            <img className="footer__logo" src="img/logo_start.png" alt="logo_company"/>
            <p className="footer__description">2021 Splice.com Все права защищены</p>
        </div>


        <nav className="footer__nav">
            <div className="footer__nav-block">
                <h2 className="footer__nav__title">СТУДИЯ</h2>
                <ul className="footer__nav__list">
                    <li className="footer__nav-list-item"><a href="#">Будущее</a></li>
                    <li className="footer__nav-list-item"><a href="#">О Splice Студии</a></li>
                    <li className="footer__nav-list-item"><a href="#">Управление вашей <br/>производственной библиотекой</a>
                    </li>
                    <li className="footer__nav-list-item"><a href="#">Сотрудничество с Baewatch</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">ПЛАГИНЫ</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Лучшие VSTs</a></li>
                    <li className="footer__nav-list-item"><a href="#">Сыворотка</a></li>
                    <li className="footer__nav-list-item"><a href="#"> Взял в рассрочку.</a></li>
                    <li className="footer__nav-list-item"><a href="#">Бесплатные плагины</a></li>
                    <li className="footer__nav-list-item"><a href="#">Ведущие производители</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">СООБЩЕСТВО</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Проекты Ableton Live</a></li>
                    <li className="footer__nav-list-item"><a href="#">Проекты FL Studio</a></li>
                    <li className="footer__nav-list-item"><a href="#">Logic Pro X Проекты</a></li>
                    <li className="footer__nav-list-item"><a href="#">Проекты Garageband</a></li>
                    <li className="footer__nav-list-item"><a href="#">Конкурсы ремиксов</a></li>
                    <li className="footer__nav-list-item"><a href="#">Секреты Tiestos</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">БИТМЕЙКЕР</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Создайте Свой собственный Ритм</a></li>
                    <li className="footer__nav-list-item"><a href="#">Вакапелла</a></li>
                    <li className="footer__nav-list-item"><a href="#">Just Blaze</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">ЗВУКИ</h2>
                <ul className="footer__nav__list">

                    <li className="footer__nav-list-item"><a href="#">Особенности</a></li>
                    <li className="footer__nav-list-item"><a href="#">Каталог</a></li>
                    <li className="footer__nav-list-item"><a href="#">Как Яуз использует звуки</a></li>
                    <li className="footer__nav-list-item"><a href="#">химера deadmau5s</a></li>
                    <li className="footer__nav-list-item"><a href="#">KSHMR Vol. 2</a></li>
                </ul>
            </div>

            <div className="footer__nav-block">
                <h2 className="footer__nav__title">БЛОГ</h2>
                <ul className="footer__nav__list">
                    <li className="footer__nav-list-item"><a href="#">Последние сообщения</a></li>
                    <li className="footer__nav-list-item"><a href="#">Использование обезглавливателя<br/> Soundtoys</a></li>
                    <li className="footer__nav-list-item"><a href="#">Освоение 101</a></li>
                    <li className="footer__nav-list-item"><a href="#">Создание будущих ритмов</a></li>
                    <li className="footer__nav-list-item"><a href="#">Принадлежность к месту соединения</a></li>
                </ul>
            </div>
        </nav>
        <div className="footer__social-networks">
            <h2 className="footer__nav__title">НАЙДИТЕ НАС В СОЦИАЛЬНЫХ СЕТЯХ</h2>
            <div className="footer__social-media">
                <img className="footer__social-media-facebook" src="img/Facebook.png" alt="facebook"/>
                <img className="footer__social-media-twitter" src="img/Twitter.png" alt="twitter"/>
                <img className="footer__social-media-instagram" src="img/Instagram.png" alt="instagram"/>
                <img className="footer__social-media-youtube" src="img/YouTube.png" alt="youtube"/>
            </div>


            <ul className="footer__nav__list">
                <li className="footer__nav-list-item"><a href="#">Условия использования</a></li>
                <li className="footer__nav-list-item"><a href="#">Политика конфиденциальности</a></li>
                <li className="footer__nav-list-item"><a href="#">Работы</a></li>
                <li className="footer__nav-list-item"><a href="#">Контакты</a></li>
                <li className="footer__nav-list-item"><a href="#">Помощь</a></li>
            </ul>
        </div>

    </footer>
    )
}