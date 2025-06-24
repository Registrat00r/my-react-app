import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Form } from "../form/Form"

export const Header = (): React.ReactElement => {
        const [formOpen, setFormOpen] = useState(false)
     return (
        <header className="header container">
        <div className="header__logo logo">
            
            <NavLink to = "/"><img className="header__logo-img" src="img/logo_start.png" alt="Лого" /></NavLink>
        </div>

        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__list--item"><NavLink to = "/"
                        className="header__item-link header__item-link--active">СТУДИЯ</NavLink></li>
                <li className="header__list--item"><NavLink to = "/" className="header__item-link">СООБЩЕСТВО</NavLink></li>
                <li className="header__list--item"><NavLink to = "/" className="header__item-link">ЗВУКИ</NavLink></li>
                <li className="header__list--item"><NavLink to = "/" className="header__item-link">ПЛАГИНЫ</NavLink></li>
                <li className="header__list--item"><NavLink to = "/" className="header__item-link">БЛОГ</NavLink></li>
                <li className="header__list--item"><NavLink to = "/cards">КАРТОЧКИ</NavLink></li>
            </ul>

            <div className="header__buttons">
                <button className="header__login button-log" type="button">Войти</button>
                <button className="header__sign button-sign" type="button" onClick={() => setFormOpen(true)}>Зарегистрироваться</button>
            </div>

        </nav>

        <Form isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </header>
     )
}