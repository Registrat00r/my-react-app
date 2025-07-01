import React from "react"
import { Promo } from "./Main/promo/Promo"
import { Company } from "./Main/company/Company"
import { Stylist } from "./Main/Stylist/Stylist"
import { Masculine } from "./Main/Masculine/Masculine"
import { Barbershop } from "./Main/Barbershop/Barbershop"
import { Creator } from "./Main/creator/Creator"
import { Customization } from "./Main/customization/Customization"
import { Jobs } from "./Main/jobs/Jobs"


export const Home = (): React.ReactElement => {
    return (
        <>
            <Promo />
            <Company />
            <Stylist />
            <Masculine />
            <Barbershop />
            <Creator />
            <Customization />
            <Jobs />
        </>
    )
}