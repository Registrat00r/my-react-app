import React from 'react';

export const Header = (): React.ReactElement => {
     return (
        <header className="header container">
        <div className="header__logo logo">
            <img className="header__logo-img" src="img/logo_start.png" alt="Лого" />
        </div>

        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__list--item"><a href="#"
                        className="header__item-link header__item-link--active">СТУДИЯ</a></li>
                <li className="header__list--item"><a href="#" className="header__item-link">СООБЩЕСТВО</a></li>
                <li className="header__list--item"><a href="#" className="header__item-link">ЗВУКИ</a></li>
                <li className="header__list--item"><a href="#" className="header__item-link">ПЛАГИНЫ</a></li>
                <li className="header__list--item"><a href="#" className="header__item-link">БЛОГ</a></li>

            </ul>

            <div className="header__buttons">
                <button className="header__login button-log" type="button">Войти</button>
                <button className="header__sign button-sign" type="button">Зарегистрироваться</button>
            </div>

        </nav>

    </header>
     )
}