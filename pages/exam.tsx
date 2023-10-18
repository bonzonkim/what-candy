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

const [ quizNumber, setQuizNumber ] = useState(1);

function changeQuiz() {
        setQuizNumber(quizNumber + 1);
}
    return(
        <>
            <Container alignItems="center">
                <Box textAlign="center">
                    <Quiz
                        quizNum={quizNumber}
                    />
                        <QuizButton>
                        <Button onClick={changeQuiz}>Yes</Button>
                        <Text fontSize="2xl">OR</Text>
                        <Button onClick={changeQuiz}>No</Button>
                        </QuizButton>
                </Box>
            </Container>
        </>
)
}
