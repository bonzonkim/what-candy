import React, { useState } from "react";
import {
    Text,
    Button
} from '@chakra-ui/react';
import { QuizSection, QuizSectionContent, QuizButton } from "../layouts/QuizLayout";
import Section from '../Section';

export default function Quiz () {

const [ quizNumber, setQuizNumber ] = useState(1);

function changeQuiz() {
        setQuizNumber(quizNumber + 1);
}
    const Quiz1 = () => {
        return (
            <>
                <Section>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>나는 휴일에 집에서 쉬는게 더 좋다.</Text>
                        <QuizButton onClick={changeQuiz}>yes</QuizButton>
                        <QuizButton onClick={changeQuiz}>no</QuizButton>
                        </QuizSectionContent>
                    </QuizSection>
                </Section>
            </>
        )
    }

    const Quiz2 = () => {
        return (
            <>
                <Section>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>asdf</Text>
                        <QuizButton onClick={changeQuiz}>yes</QuizButton>
                        <QuizButton onClick={changeQuiz}>no</QuizButton>
                        </QuizSectionContent>
                    </QuizSection>
                </Section>
            </>
        )
    }

    const Quiz3 = () => {
        return (
            <>
                <Section>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>this is quiz 3</Text>
                        <QuizButton onClick={changeQuiz}>yes</QuizButton>
                        <QuizButton onClick={changeQuiz}>no</QuizButton>
                        </QuizSectionContent>
                    </QuizSection>
                </Section>
            </>
        )
    }
    const EndOfQuiz = () => {
        return (
            <>
                <Section>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>END</Text>
                        </QuizSectionContent>
                    </QuizSection>
                </Section>
            </>
        )
    }

    switch(quizNumber) {
        case 1: {
            console.log(quizNumber)
            return <Quiz1/>
        }

        case 2: {
            console.log(quizNumber)
            return <Quiz2/>
        }
        case 3: {
            console.log(quizNumber)
            return <Quiz3/>
        }
        default: {
            console.log('end of quiz!')
            return <EndOfQuiz />
        }
    }

}

