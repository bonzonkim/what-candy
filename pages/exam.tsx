import React, { createElement, useState } from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import  { Quiz1, Quiz2 }  from '../components/quiz/quizs';


const [ quizNumber, setQuizNumber ] = useState(0);

function changeQuiz() {


    const increaseNumber = () => {
        setQuizNumber(quizNumber + 1);
    }
}

export default function Exam() {
    return(
        <>
            <Container alignItems="center">
                <Box textAlign="center">
                    <Quiz1/>
                    <Quiz2/>
                </Box>
            </Container>
        </>
)
}
