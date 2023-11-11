import React from "react";
import {
        Box,
        Container,
        } from '@chakra-ui/react';
import Link from 'next/link';
import Section from '../components/Section';
import { DynamicButton, QuizText } from '../components/Fonts';




export default function Home() {
    return(
        <Box>
                <Container alignItems="center">
                <Section>
                    <Box    bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)" 
                            borderRadius="15px"
                            p={4}
                            textAlign="center">
                                <QuizText fontSize="3xl"
                                      mb={4}
                                      color="black"   
                                >
                            나와 닮은 탕후루는?!</QuizText>
                            <Link href="/exam">
                                <DynamicButton
                                background="red.200"
                                size="lg">
                                시작하기</DynamicButton>
                            </Link>
                    </Box>
                </Section>
                </Container>
        </Box>
    )
}
