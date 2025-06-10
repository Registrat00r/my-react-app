import type React from "react"
import { Promo } from "./Main/promo/Promo"
import { Company } from "./Main/company/Company"
import { Sounds } from "./Main/sounds/Sounds"
import { Plugins } from "./Main/plugins/Plugins"
import { Studio } from "./Main/studio/Studio"
import { Creator } from "./Main/creator/Creator"
import { Customization } from "./Main/customization/Customization"
import { Jobs } from "./Main/jobs/Jobs"

export const Home = (): React.ReactElement => {
    return (
        <>
            <Promo />
            <Company />
            <Sounds />
            <Plugins />
            <Studio />
            <Creator />
            <Customization />
            <Jobs />
        </>
    )
}