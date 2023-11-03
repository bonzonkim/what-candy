import { Button } from "@chakra-ui/react"
import React from "react"

const DynamicButtons = ({onClick, ButtonText,p}: any) => {
    return (
    <Button 
        onClick={onClick}
        p={p}
        background="red.200"
        size="lg"
        >
        {ButtonText} </Button>
    )
}

export default DynamicButtons;
