import type React from "react"
import { Promo } from "./promo"
import { Company } from "./Company"

export type MainProps = {
    children?: React.ReactNode;
}

export const Layout = ({children}: MainProps): React.ReactElement => {
    return (
            <Promo />
            <Company />
    )
}