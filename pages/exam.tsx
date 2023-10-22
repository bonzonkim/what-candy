import React, { useState } from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import Quiz from '../components/quiz/quizs';
import { QuizButton } from "../components/layouts/QuizLayout";
import Section from '../components/Section';


export default function Exam() {
    return(
        <>
            <Container alignItems="center">
                <Section>
                <Box textAlign="center">
                    <Quiz/>
                </Box>
                </Section>
            </Container>
        </>
)
}
