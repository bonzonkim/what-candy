import React from "react";
import {
        Box,
        Button,
        Container,
        Text } from '@chakra-ui/react';
import Link from 'next/link';
import Section from '../components/Section';




export default function Home() {
    return(
        <Box pt={14}>
                <Container alignItems="center">
                <Section>
                    <Box backgroundColor="#ADEEE2"
                            borderRadius="15px"
                            p={4}
                            textAlign="center">
                                <Text fontSize="3xl"
                                      mb={4}
                                      color="black"   
                                >
                            나와 닮은 탕후루는?!</Text>
                            <Link href="/exam">
                                <Button
                                background="#A2DCEE"
                                size="lg">
                                시작하기</Button>
                            </Link>
                    </Box>
                </Section>
                </Container>
        </Box>
    )
}
