import React from "react";
import { NavLink } from 'react-router';


export const NotFoundPage= (): React.ReactElement =>{
    return (
        <div className="not__found__page">
            <h1 className="Not__found__title">404 — Страница не найдена</h1>
            <button className="Not__found-button"><NavLink to = "/">Вернуться</NavLink></button>
        </div>
    )
}