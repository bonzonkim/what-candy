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
        <>
                <Container alignItems="center">
                <Section>
                    <Box backgroundColor="brand.600"
                            borderRadius="15px"
                            mt={50}
                            p={4}
                            textAlign="center">
                                <Text fontSize="3xl" mb={4}>나와 닮은 탕후루는?!</Text>
                            <Link href="/exam">
                                <Button
                                colorScheme="blue"
                                size="lg">
                                시작하기</Button>
                            </Link>
                    </Box>
                </Section>
                </Container>
        </>
    )
}
