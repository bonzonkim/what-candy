import { Button } from "@chakra-ui/react"
import React from "react"

export const YesButton = ({onClick}:any) => {
    return (
        <Button 
            size="lg"
            color-scheme="blue"
            onClick={onClick}
        >Yes</Button>
    )
}

export const NoButton = ({onClick}:any) => {
    return (
        <Button 
            size="lg"
            color-scheme="blue"
            onClick={onClick} 
        >No</Button>
    )
}
