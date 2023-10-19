import React, { useState } from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import Quiz from '../components/quiz/quizs';
import { QuizButton } from "../components/layouts/QuizLayout";


export default function Exam() {
    return(
        <>
            <Container alignItems="center">
                <Box textAlign="center">
                    <Quiz/>
                </Box>
            </Container>
        </>
)
}
