import { DynamicButton } from "../components/Fonts"
import React from "react"

const DynamicButtons = ({onClick, ButtonText, p}: any) => {
    return (
    <DynamicButton 
        onClick={onClick}
        p={p}
        background="red.200"
        size="lg"
        >
        {ButtonText} </DynamicButton>
    )
}

export default DynamicButtons;
