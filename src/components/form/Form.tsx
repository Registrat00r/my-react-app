import  React from 'react';
import type { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const Form = ({isOpen, onClose}: PropsWithChildren<ModalProps>) => {

    const Submit = (e: React.FormEvent) => {
         e.preventDefault();
         onClose();
    }

    if(!isOpen) return null
    return ReactDOM.createPortal(
        <div className="form" id="formModal" onClick={onClose}>
        <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
            <div className="form-menu">
                <h2 className="form__name">Зарегистрироваться</h2>
                <button className="exit-button" onClick={onClose}>X</button>
            </div>
            <form id="contactForm" onSubmit={Submit}>
                <div className="form-group">
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname" placeholder="Фамилия" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" placeholder="Имя" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phome">Номер</label>
                    <input type="tel"  id="phone" name="phone" placeholder="Номер" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Почта</label>
                    <input type="email" id="email" name="email" placeholder="Почта(не обязательно)" />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Зарегистрироваться</button>
                    <button type="button" className="cansel-button" onClick={onClose}>Выход</button>
                </div>

            </form>
        </div>
    </div>,
    document.body
    )
}