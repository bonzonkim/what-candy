import React from 'react';
import {
    Box,
    Text
} from '@chakra-ui/react';

export default function ResultPage() {
    const results = [
        { fruit: 'shinemusket', resultText: '샤인머스켓' },
        { fruit: 'orange', resultText: '귤' },
        { fruit: 'strawberry', resultText: '딸기' },
        { fruit: 'tomato', resultText: '토마토' },
        { fruit: 'blacksapphire', resultText: '블랙사파이어' },
        { fruit: 'pineapple', resultText: '파인애플' },
    ];

    const getResultText = ({fruit}: { fruit: Object }) => {
        const result = results.find(item => item.fruit === fruit);
        return result ? result.resultText : '결과를 찾을 수 없음';
    };
    
    const selectedFruit = 'orange'; //테스트용으로 임의로 지정

    return (
        <Box
            bgImage={"url('/tanghuru.png')"}
            bgSize="cover"
            bgPosition="center"
            p={20}
        >
            <Text>{getResultText({fruit: selectedFruit})}</Text>
        </Box>
    )
}
