import React from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import Quiz from '../components/quiz/testquiz';

export default function Exam() {
    return(
        <>
            <Container>
                <Box>
                    <Quiz/>
                </Box>
            </Container>
        </>
)
}
