import React, { useEffect } from 'react';
import {
    Box,
    Container,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import DynamicButton from '../components/DynamicButton';
import { QuizText, ResultHeading } from '../components/Fonts';
import { getResult } from '../data/resultData';    
import Link from 'next/link';


export default function ResultPage() {

    const router = useRouter();
    const resultFruit = router.query.fruit;

    let selectedFruit = '';

    switch (resultFruit) {
        case 'shinemuscat':
            selectedFruit = 'shinemuscat';
            break;
        case 'orange':
            selectedFruit = 'orange';
            break;
        case 'strawberry':
            selectedFruit = 'strawberry';
            break;
        case 'tomato':
            selectedFruit = 'tomato';
            break;
        case 'blacksapphire':
            selectedFruit = 'blacksapphire';
            break;
        default: selectedFruit = 'error';
    }

    return (
        <Box>
            <Container
                alignItems="center"
                backgroundColor="whitesmoke"
                textAlign="center"
                borderRadius="10px"
                p={5}
            >
                <ResultHeading>
                {getResult({fruit: selectedFruit}, {type: 'name'})}
                </ResultHeading>
                    <Box
                    borderWidth={2}
                    borderStyle="solid"
                    w="130px"
                    h="130px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                >
                <Image 
                    src={`/resultFruits/${selectedFruit}.png`}
                    alt="Result Image"
                    width={200}
                    height={200}
                />
                </Box>
                <Box
                    p={5}
                >
                    <QuizText
                    >
                        {getResult({fruit: selectedFruit}, {type: 'explanation'})}
                    </QuizText>
                </Box>
                    <Link href="/">
                        <DynamicButton ButtonText="홈으로"/>
                    </Link>
            </Container>
        </Box>
    );
};
