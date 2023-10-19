import React from "react";
import {
    Text,
    Button
} from '@chakra-ui/react';
import { QuizSection, QuizSectionContent, QuizButton } from "../layouts/QuizLayout";

    const Quiz1 = () => {
        return (
            <>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>나는 휴일에 집에서 쉬는게 더 좋다.</Text>
                        </QuizSectionContent>
                    </QuizSection>
            </>
        )
    }

    const Quiz2 = () => {
        return (
            <>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>asdf</Text>
                        </QuizSectionContent>
                    </QuizSection>
            </>
        )
    }

    const Quiz3 = () => {
        return (
            <>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>this is quiz 3</Text>
                        </QuizSectionContent>
                    </QuizSection>
            </>
        )
    }
    const EndOfQuiz = () => {
        return (
            <>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>END</Text>
                        </QuizSectionContent>
                    </QuizSection>
            </>
        )
    }
function Quiz (props:any) {
    let quizNum = props.quizNum

    switch(quizNum) {
        case 1: {
            console.log(quizNum)
            return <Quiz1/>
        }

        case 2: {
            console.log(quizNum)
            return <Quiz2/>
        }
        case 3: {
            console.log(quizNum)
            return <Quiz3/>
        }
        default: {
            console.log('end of quiz!')
            return <EndOfQuiz />
        }
    }

    //if (quizNum === 1)  {
    //    return <Quiz1/>
    //}
    //if (quizNum === 2) {
    //    return <Quiz2/>
    //}
    //if (quizNum === 3) {
    //    return <Quiz3/>
    //}
    //else {
    //    return <EndOfQuiz />
    //}


}

export default Quiz;
