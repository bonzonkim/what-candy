import React from 'react';
import {
    Box,
} from '@chakra-ui/react';
import RenderResult from '../components/RenderResult';
import Section from '../components/Section';

export default function ResultPage() {

    return (
        <Section>
            <Box
                bgImage={"url('/tanghuru.png')"}
                bgSize="cover"
                bgPosition="center"
                borderRadius="10px"
                p={20}
            >
                <RenderResult/>
            </Box>
        </Section>
    )
}
