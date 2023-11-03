import React from 'react';
import {
    Box,
} from '@chakra-ui/react';
import RenderResult from '../components/RenderResult';

export default function ResultPage() {

    return (
        <Box
            bgImage={"url('/tanghuru.png')"}
            bgSize="cover"
            bgPosition="center"
            p={20}
        >
            <RenderResult/>
        </Box>
    )
}
