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
                <Box>
                    <QuizSection>
                        <QuizSectionTitle>
                            <Text>첫번째</Text>
                            <Text>첫번째</Text>
                            <Text>첫번째</Text>
                            <Text>첫번째</Text>
                        </QuizSectionTitle>
                    </QuizSection>
                </Box>
            </Container>
        </>
    )
}

export default quiz;
