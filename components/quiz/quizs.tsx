import React from "react";
import {
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import { QuizSection, QuizSectionContent, QuizButton } from "../layouts/QuizLayout";

const Quiz1 = () => {
    return (
        <>
                    <QuizSection>
                        <QuizSectionContent>
                        <Text fontSize="2xl" mb={4}>
                            나는 휴일에 집에서 쉬는게 더 좋다.
                        </Text>
                       <QuizButton>
                        <Button>Yes</Button>
                        <Text fontSize="2xl">OR</Text>
                        <Button>No</Button>
                        </QuizButton>
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
                        <Text fontSize="2xl" mb={4}>
                        asdfadsf
                    </Text>
                       <QuizButton>
                        <Button>Yes</Button>
                        <Text fontSize="2xl">OR</Text>
                        <Button>No</Button>
                        </QuizButton>
                        </QuizSectionContent>
                    </QuizSection>
        </>
    )
}
export { Quiz1, Quiz2 };
