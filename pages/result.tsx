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
                //backgroundColor='orange.200'
                borderRadius='3xl'
                p={20}
            >
                <RenderResult/>
            </Box>
        </Section>
    )
}
