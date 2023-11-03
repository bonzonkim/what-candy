import React from 'react';
import {
    Box,
    Text
} from '@chakra-ui/react';
import {useRouter} from 'next/router';

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

    if (point === 300) {
        selectedFruit = 'blacksapphire'; //테스트 임의 지정
    } else {
        selectedFruit = 'pineapple'; //테스트 임의 지정
    }



    return (
        <Box
        >
            <Text>당신은 {getResultText({fruit: selectedFruit})}</Text>
        </Box>
    );
};
