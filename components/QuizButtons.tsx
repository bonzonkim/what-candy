import { Button } from "@chakra-ui/react"
import React from "react"

const DynamicButtons = ({onClick, ButtonText}: any) => {
    return (
    <Button 
        onClick={onClick}
        colorScheme="blue"
        size="lg"
        >
        {ButtonText} </Button>
    )
}

export default DynamicButtons;
