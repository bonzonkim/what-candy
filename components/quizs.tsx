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
import { quizData } from "../data/quizData";



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

