import React from "react"
import { NavLink } from 'react-router'

export const Footer = (): React.ReactElement => {
    return (
        <footer className="footer container">
            <div className="footer__content">
                <NavLink to="/">
                    <img className="footer__logo" src="img/barbershopLogo.jpg" alt="logo_barbershop" />
                </NavLink>
                <p className="footer__description">2021 Splice.com Все права защищены</p>
            </div>


            <nav className="footer__nav">
                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">БАРБЕРШОП</h2>
                    <ul className="footer__nav__list">
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Будущее</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">О нас</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Сотрудничество с нами</a></li>
                    </ul>
                </div>

                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">СТИЛИСТ</h2>
                    <ul className="footer__nav__list">

                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Лучшие стилисты</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Интересные<br/>истории</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Польза стилиста</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Бесплатный разговор</a></li>
                    </ul>
                </div>

                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">МУЖСКОЙ СТИЛЬ</h2>
                    <ul className="footer__nav__list">

                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Выбор прически</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Выбор бороды</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Выбор цвета</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Выбор пользователей</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Выбор стилистов</a></li>
                    </ul>
                </div>

                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">УСЛУГИ</h2>
                    <ul className="footer__nav__list">

                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Создай свой стиль</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Мойка головы</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Напитки</a></li>
                    </ul>
                </div>

                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">БАРБЕРЫ</h2>
                    <ul className="footer__nav__list">

                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Особенности</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Каталог</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Имя Фамилия</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Время</a></li>
                    </ul>
                </div>

                <div className="footer__nav-block">
                    <h2 className="footer__nav__title">О НАС</h2>
                    <ul className="footer__nav__list">
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Местонахождение</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Города</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Развитие</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">История</a></li>
                        <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Сообщество</a></li>
                    </ul>
                </div>
            </nav>
            <div className="footer__social-networks">
                <h2 className="footer__nav__title">НАЙДИТЕ НАС В СОЦИАЛЬНЫХ СЕТЯХ</h2>
                <div className="footer__social-media">
                    <img className="footer__social-media-facebook" src="img/Facebook.png" alt="facebook" />
                    <img className="footer__social-media-twitter" src="img/Twitter.png" alt="twitter" />
                    <img className="footer__social-media-instagram" src="img/Instagram.png" alt="instagram" />
                    <img className="footer__social-media-youtube" src="img/YouTube.png" alt="youtube" />
                </div>


                <ul className="footer__nav__list">
                    <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Условия использования</a></li>
                    <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Политика конфиденциальности</a></li>
                    <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Работы</a></li>
                    <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Контакты</a></li>
                    <li className="footer__nav-list-item"><a className="footer__nav-item" href="#">Помощь</a></li>
                </ul>
            </div>

        </footer>
    )
}