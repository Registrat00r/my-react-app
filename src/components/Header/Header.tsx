import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Form } from "../form/Form"

export const Header = (): React.ReactElement => {
    const [formOpen, setFormOpen] = useState(false)
    const navigate = useNavigate()
 
    const scrollToSection = (hash: string) => {
    const id = hash.replace('#', '')
    navigate('/')

    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) => {
    e.preventDefault()
    scrollToSection(hash)
  }

    return (
        <header className="header container">
            <div className="header__logo logo">

                <NavLink to="/"><img className="header__logo-img" src="img/barbershopLogo.jpg" alt="Лого" /></NavLink>
            </div>

            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list--item"><NavLink
                        to="/#barbershop" onClick={(e) => handleClick(e, 'barbershop')}
                        className="header__item-link">БАРБЕРШОП</NavLink></li>
                    <li className="header__list--item"><NavLink to="/" className="header__item-link"
                     onClick={(e) => handleClick(e, 'stylist')}>СТИЛИСТ</NavLink></li>
                    <li className="header__list--item"><NavLink to="/" className="header__item-link"
                    onClick={(e) => handleClick(e, 'masculine')}>МУЖСКОЙ СТИЛЬ</NavLink></li>
                    <li className="header__list--item"><NavLink to="/" className="header__item-link"
                    onClick={(e) => handleClick(e, 'customization')}>УСЛУГИ</NavLink></li>
                    <li className="header__list--item"><NavLink to="/" className="header__item-link"
                    onClick={(e) => handleClick(e, 'creator')}>БАРБЕРЫ</NavLink></li>
                    <li className="header__list--item"><NavLink to="/cards" className="header__item-link">КАРТОЧКИ</NavLink></li>
                </ul>

                <div className="header__buttons">
                    <button className="header__sign button-sign" type="button" onClick={() => setFormOpen(true)}>Записаться</button>
                </div>

            </nav>

            <Form isOpen={formOpen} onClose={() => setFormOpen(false)} />
        </header>
    )
}