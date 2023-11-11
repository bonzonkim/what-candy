import React, { useState } from "react";
import {
    Box,
    Grid
} from '@chakra-ui/react';
import Section from './Section';
import Link from 'next/link';
import { useRouter} from 'next/router';
import  DynamicButtons  from "./DynamicButton";
import  { QuizText } from "../components/Fonts";



export default function Quiz() {
  const router = useRouter();
  const [quizId, setQuizId] = useState(1);
  const [scores, setScores] = useState<{
      [key: string]: number
    }>({
        shinemuscat: 0,
        orange: 0,
        strawberry: 0,
        tomato: 0,
        blacksapphire: 0,
    });
//샤인머스켓 - 상큼 자신감 활력 밝고 긍정
//귤 - 친근 따듯 이타적 배려 인간관계 친구 가족
//딸기 - 창의적 로맨틱 자유 예술, 감각 새로운 경험 자유
//토마토 - 결단 열정 능력 끈기 열정 해결책
//블랙사파이어 - 신비 문제 해결 탐구 새로운영역 탐구 

  const quizData = [
    { question: '어떤 상황에서도 긍정적인 마인드를 유지하려 하나요?', id: 1, type: 'shinemuscat' },
    { question: '타인의 감정에 민감하게 반응하는 편인가요?', id: 2 , type: 'orange'},
    { question: '새로운 활동이나 장소를 찾아다니시나요?', id: 3, type: 'strawberry'},
    { question: '가족과 친구들을 위해 어떤 행동을 할 때 행복함을 느끼나요?', id: 4 , type: 'orange'},
    { question: '자신감 넘치게 도전적인 상황에 맞서본 적이 있나요?', id: 5, type: 'shinemuscat' },
    { question: '처음 보는 사람에게도 거리낌없이 말을 거는 편인가요?', id: 6 , type: 'orange'},
    { question: '다른 사람들의 의견을 고려하지 않고 자신의 의견을 고수하는 편인가요?', id: 7, type: 'strawberry'},
    { question: '주변 사람들에게 어떤 방식이든 친근함을 표현하나요?', id: 8, type: 'orange'},
    { question: '예술이나 창의적인 활동에 관심이 많은 편인가요?', id: 9, type: 'strawberry'},
    { question: '사람들과 갈등 상황에서 양보하는 편인가요?', id: 10, type: 'orange'},
    { question: '새로운 경험을 즐기는 편인가요?', id: 11, type: 'strawberry'},
    { question: '하나의 일을 무조건 끝까지 끝내는 편인가요?', id: 12, type: 'tomato'},
    { question: '모르는 것에 대한 탐구하는 것을 즐기나요?', id: 13, type: 'blacksapphire'},
    { question: '사회적 활동을 좋아하시나요?', id: 14, type: 'shinemuscat' },
    { question: '새로운 도전에 대해 두려움 없이 접근하는 편인가요?', id: 15, type: 'strawberry'},
    { question: '창의적이고 특이하다는 얘기를 많이듣나요?', id: 16, type: 'blacksapphire'},
    { question: '가벼운 규칙은 무시하는 편인가요?', id: 17, type: 'shinemuscat'},
    { question: '돈을 관리하는 데 신중하신가요?', id: 18, type: 'tomato'},
    { question: '다른사람들과 어울릴때 당신은 보통 긍정적이고 활기넘친다는 얘기를 듣나요?', id: 19, type: 'shinemuscat' },
    { question: '다른 사람들과 협력하는 것을 즐기나요?', id: 20, type: 'tomato'},
    { question: '문제에 직면하면, 해결을 위해 끊임없이 해결책을 갈구하나요?', id: 21, type: 'tomato'},
    { question: '신비로운 현상에 대한 호기심이 있나요?', id: 22, type: 'blacksapphire'},
    { question: '중요한 결정을 내릴 때 참고하는 본인의 가치관이 확고한 편인가요?', id: 23, type: 'tomato'},
    { question: '공상에 자주 빠지나요?', id: 24, type: 'blacksapphire'},
    { question: '남들이라면 자주 하지 않는 행동을 할 때가 있나요?', id: 25, type: 'blacksapphire'},
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

// 질문 화면
  const renderQuiz = (id: number) => {
    const quiz = quizData.find((item) => item.id === id);

      return quiz ? (
        <Section>
            <QuizText fontSize="2xl" mb={4}>({quiz.id}/25)</QuizText>
            <Box
            bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            borderRadius="15px"
            p={4} textAlign="center" >
              <QuizText fontSize="2xl" mb={4}>{quiz.question}</QuizText>
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
      ) : <EndOfQuiz />;
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


  function navigateToResult() {
    if (highestScoringFruit === '') highestScoringFruit = 'blacksapphire';

      router.push(`/result?fruit=${highestScoringFruit}`).then((r) => {
          console.log(r);
      });
  }

//퀴즈 끝 화면
  const EndOfQuiz = () => {
    return (
      <Section>
                <Box
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                borderRadius="15px"
                p={4}
                textAlign="center"
                >
            <QuizText fontSize="2xl" mb={4}>END</QuizText>
            <Link href='/result'>
                <DynamicButtons ButtonText="결과 보기" onClick={navigateToResult}/>
            </Link>
                </Box>
      </Section>
    );
  };


  return renderQuiz(quizId);
}

