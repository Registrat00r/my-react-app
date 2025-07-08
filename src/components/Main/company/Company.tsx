import React from "react"

export const Company = (): React.ReactElement => {
    return (
         <section className="section commpany">
            <h4 className="commpany__subtitle">ПАРТНЁРЫ</h4>
            <div className="commpany__img">
                <img className="commpany__img-imagin" src="img/company/BarbershopRWB.png" alt="винтаж классика"/>
                <img className="commpany__img-imagin" src="img/company/barbersshop.png" alt="Бородатый мужик"/>
                <img className="commpany__img-imagin" src="img/company/hairsStyle.png" alt="Стиль волос"/>
                <img className="commpany__img-imagin" src="img/company/oldBoy.png" alt="Старый мальчик"/>
                <img className="commpany__img-imagin" src="img/company/berloga.png" alt="Берлога"/>
            </div>
        </section>
    )
}