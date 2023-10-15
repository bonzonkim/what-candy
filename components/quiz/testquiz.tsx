import React from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';

const quiz = () => {
    return (
        <>
            <Container alignItems="center">
                <Box>
                    <Text>나는 사과가 좋다!!!</Text>
                    <Button>yes</Button>
                    <Button>no</Button>
                </Box>
            </Container>
        </>
    )
}

export default quiz;
