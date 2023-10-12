import React from "react";
import { Box, Button, Container,Text } from '@chakra-ui/react';
import Link from 'next/link';




export default function Home() {
    return(
        <div>
                <Container alignItems="center">
                    <Box backgroundColor="brand.600"
                            borderRadius="lg"
                            p={4}
                            mb={4}
                            textAlign="center">
                                <Text fontSize="3xl" mb={4}>나와 닮은 탕후루는?!</Text>
                            <Link href="/exam">
                                <Button
                                colorScheme="blue"
                                size="lg">
                                시작하기</Button>
                            </Link>
                    </Box>
                </Container>

        </div>
    )
}
