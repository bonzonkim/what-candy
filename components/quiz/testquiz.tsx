import React from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import { QuizSection, QuizSectionTitle } from "../layouts/QuizSection";

const quiz = () => {
    return (
        <>
            <Container alignItems="center">
                <Box textAlign="center">
                    <QuizSection>
                        <Text fontSize="2xl" mb={2}>
                           1. 
                        </Text>
                        <Text fontSize="1xl" mb={4}>
                            나는 휴일에 집에서 쉬는게 더 좋다.
                        </Text>
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </QuizSection>
                </Box>
            </Container>
        </>
    )
}

export default quiz;
