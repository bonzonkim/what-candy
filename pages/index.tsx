import React from "react";
import { Box, Button, Container,Text } from '@chakra-ui/react';




export default function Home() {
    return(
        <div>
                <Container alignItems="center">
                    <Box backgroundColor="brand.600"
                            borderRadius="lg"
                            p={4}
                            mb={4}
                            textAlign="center">
                                <Text fontSize="3xl">나와 닮은 탕후루는?!</Text>
                                <Button colorScheme="blue" size="lg"
                                >시작하기</Button>
                    </Box>
                </Container>

        </div>
    )
}
