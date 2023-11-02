import React from "react";
import {
    Box,
    Container,
} from '@chakra-ui/react';
import Quiz from '../components/quizs';
import Section from '../components/Section';


export default function Exam() {
    return(
        <Box>
            <Container
                alignItems="center"
            >
                <Section>
                <Box textAlign="center">
                    <Quiz/>
                </Box>
                </Section>
            </Container>
        </Box>
)
}
