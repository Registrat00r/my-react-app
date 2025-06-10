import React from "react";

export const Jobs = (): React.ReactElement => {
    return (
         <section className="section jobs">
            <div className="jobs__content">
                <h2 className="jobs__title">Приди и измени то,<br/>
                    как люди создают музыку</h2>
                <button className="jobs__button button-sign" type="button"> РАБОТЫ В Splice</button>
            </div>
        </section>
    )
}