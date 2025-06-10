import React from "react";

export const Company = (): React.ReactElement => {
    return (
         <section className="section commpany">
            <h4 className="commpany__subtitle">ФИГУРИРУЮЩИЙ В</h4>
            <div className="commpany__img">
                <img className="commpany__img-imagin" src="img/company/variety.png" alt="Компания variety"/>
                <img className="commpany__img-imagin" src="img/company/theVerge.png" alt="Компания theVerge"/>
                <img className="commpany__img-imagin" src="img/company/billboard.png" alt="Компания billboard"/>
                <img className="commpany__img-imagin" src="img/company/wired.png" alt="Компания wired"/>
                <img className="commpany__img-imagin" src="img/company/complex.png" alt="Компания complex"/>
            </div>
        </section>
    )
}