import React, { useState } from "react";
import {
    Text,
    Box,
    Grid
} from '@chakra-ui/react';
import Section from './Section';
import Link from 'next/link';
import { useRouter} from 'next/router';
import  DynamicButtons  from "./DynamicButton";



export default function Quiz() {
  const router = useRouter();
  const [quizId, setQuizId] = useState(1);
  const [point, setPoint] = useState(0);
  const [scores, setScores] = useState({
    'shinemusket': 0,
    'orange': 0,
    'strawberry': 0,
    'tomato': 0,
    'blacksapphire': 0,
    'pineapple': 0,
  });

  const quizData = [
    { question: '휴일에 집에서 쉬는걸 더 좋아하나요?', id: 1, type: 'strawberry' },
    { question: '새로운 경험을 추구하고 모험을 즐기는 편인가요?', id: 2, type: 'blacksapphire'},
    { question: '가벼운 규칙을 어길 때가 자주 있나요?', id: 3, type: 'shinemuscat' },
    { question: '어떤 일을 시작하기전 계획을 먼저 세우는 편인가요?', id: 4, type: 'tomato'},
    { question: '어려운 결정을 내릴 때 분석적인 방식으로 생각하나요?', id: 5, type: 'tomato' },
    { question: '스트레스가 심한 상황에서 감정을 잘 통제할 수 있나요?', id: 6 , type: 'tomato'},
    { question: '새로운 사람들을 만나는 것을 피하는 편인가요?', id: 7 , type: 'tomato'},
    { question: '현재의 순간을 즐기는 편인가요?', id: 8 , type: 'tomato'},
    { question: '꾸준한 학습과 자기계발을 중요하게 생각하나요?', id: 9, type: 'tomato'},
    { question: '결정을 내릴 때 다른 사람의 의견을 따르기 힘들어하나요?', id: 10, type: 'tomato'},
    { question: '계획적으로 일을 처리하려고 노력하나요?', id: 11, type: 'tomato'},
    { question: '다른 사람들의 의견을 고려하지 않고 자신의 의견을 고수하는 편인가요?', id: 12, type: 'tomato'},
    { question: '새로운 도전에 대해 두려움 없이 접근하는 편인가요?', id: 13, type: 'tomato'},
    { question: '주변 환경에 따라 감정이 자주 변하는 편인가요?', id: 14, type: 'tomato'},
    { question: '예상치 못한 상황에 대처하는데 능숙한 편인가요?', id: 15, type: 'tomato'},
    { question: '다른 사람의 기대에 부응하는 것보다 자신의 가치와 원칙에 더 중점을 두는 편인가요?', id: 16, type: 'tomato'}
  ];

   
    // 질문 대답 처리하는 함수
    const changeQuiz = (response: "yes" | "no") => {

    const quiz = quizData.find((item) => item.id === quizId);

    if (quiz) {
      // 응답이 yes면 해당 과일에 점수 누적
      if (response === "yes") {
        setScores((prevScores: any) => ({
          ...prevScores,
          [quiz.type]: prevScores[quiz.type] + 1,
        }));
      }
      setQuizId(quizId + 1);
    }
  };

  function renderQuiz(id: number) {
    const quiz = quizData.find((item) => item.id === id);
    if (quiz) {
      return (
        <Section>
            <Box
            bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            borderRadius="15px"
            p={4} textAlign="center" >
              <Text fontSize="2xl" mb={4}>{quiz.question}</Text>
                <Grid templateColumns='repeat(2,1fr)'>
                    <Box>
                        <DynamicButtons onClick={() => changeQuiz("yes")} ButtonText="YES" />
                    </Box>
                    <Box>
                        <DynamicButtons onClick={() => changeQuiz("no")} ButtonText="NO"  />
                    </Box>
                </Grid>
            </Box>
        </Section>
      );
    } else {
      return <EndOfQuiz />;
    }
  }

let highestScore = 0;
let highestScoringFruit = '';

//scores 객체 순회
for (const fruit in scores) {
    if (scores[fruit] > highestScore) {
      highestScore = scores[fruit];
      highestScoringFruit = fruit;
    }
}

    console.log(`highestScoringFruit ${highestScoringFruit}`)
    console.log(`highestScore ${highestScore}`)

  function navigateToResult() {
      router.push(`/result?fruit=${highestScoringFruit}`).then((r) => {
          console.log(r);
      });
  }

  const EndOfQuiz = () => {
    return (
      <Section>
                <Box
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                borderRadius="15px"
                p={4}
                textAlign="center"
                >
            <Text fontSize="2xl" mb={4}>END</Text>
            <Link href='/result'>
                <DynamicButtons ButtonText="결과 보기" onClick={navigateToResult}/>
            </Link>
                </Box>
      </Section>
    );
  };

  console.log(quizId);
  //console.log(`shine scores ${scores['shinemusket']}`)
  //console.log(`orange scores ${scores['orange']}`)
  //console.log(`tomato scores ${scores['tomato']}`)
  //console.log(`strawberry scores ${scores['strawberry']}`)
  //console.log(`blacksapphire scores ${scores['blacksapphire']}`)
  //console.log(`pineapple scores ${scores['pineapple']}`)

  return renderQuiz(quizId);
}

