import React from 'react';
import {
    Box,
    Container,
    Grid,
    Heading,
    Text
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import DynamicButton from '../components/DynamicButton';
import Link from 'next/link';
import {
    FacebookShareButton,
    RedditShareButton,
    InstagramIcon,
    FacebookIcon,
    RedditIcon
} from 'next-share'

const results = [
    {fruit: 'shinemusket', resultText: '샤인머스켓'},
    {fruit: 'orange', resultText: '귤'},
    {fruit: 'strawberry', resultText: '딸기'},
    {fruit: 'tomato', resultText: '토마토'},
    {fruit: 'blacksapphire', resultText: '블랙사파이어'},
    {fruit: 'pineapple', resultText: '파인애플'},
];

const getResultText = ({fruit}: { fruit: Object }) => {
    const result = results.find(item => item.fruit === fruit);
    return result ? result.resultText : '결과를 찾을 수 없음';
};

export default function ResultPage() {

    const router = useRouter();
    const point = Number(router.query.point);
    console.log(`quiz point from the result page ${point}`);

    let selectedFruit = '';


    switch (point) {
        case 300:
            selectedFruit = 'blacksapphire';
            break;
        case 200:
            selectedFruit = 'tomato';
            break;
        default:
            selectedFruit = 'orange';
    }



    return (
        <Box>
            <Container
                alignItems="center"
                backgroundColor="whitesmoke"
                textAlign="center"
                borderRadius="10px"
            >
                <Heading
                    as='h1'
                    letterSpacing={'tight'}
                >
                당신은 {getResultText({fruit: selectedFruit})}
                </Heading>
                <Text>당신은 밝고 어쩌고</Text>
                <Grid templateColumns='repeat(2,1fr)'>
                    <Link href='/'>
                        <DynamicButton ButtonText="홈으로"/>
                    </Link>
                    <Link href='/exam'>
                        <DynamicButton ButtonText="다시하기"/>
                    </Link>
                </Grid>
                <Grid templateColumns='repeat(3,1fr)'>
                    <Box>
                        <FacebookShareButton
                            url={'https://localhost:3000'}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <RedditShareButton
                            url={'https://localhost:3000'}
                        >
                            <RedditIcon size={32} round />
                        </RedditShareButton>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};
