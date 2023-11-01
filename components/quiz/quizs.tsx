import React, { useState } from "react";
import {
  Text,
  Grid, Button
} from '@chakra-ui/react';
import { QuizSection, QuizSectionContent, QuizButton } from "../layouts/QuizLayout";
import Section from '../Section';
import Link from "next/link";
import { YesButton, NoButton } from "../QuizButtons";


export default function Quiz() {
  const [quizId, setQuizId] = useState(1);
  const [point, setPoint] = useState(0);

  const quizData = [
    { question: '휴일에 집에서 쉬는걸 더 좋아하나요?', id: 1, points: 10 },
    { question: '새로운 경험을 추구하고 모험을 즐기는 편인가요?', id: 2, points: 20},
    { question: '가벼운 규칙을 어길 때가 자주 있나요?', id: 3, points: 30 },
    { question: '계획을 세우는 것을 좋아하나요?', id: 4, points: 20 },
    { question: '어려운 결정을 내릴 때 분석적인 방식으로 생각하나요?', id: 5, points: 20 },
    { question: '스트레스가 심한 상황에서 감정을 잘 통제할 수 있나요?', id: 6, points: 10 },
    { question: '새로운 사람들을 만나는 것을 피하는 편인가요?', id: 7, points: 10 },
    { question: '현재의 순간을 즐기는 편인가요?', id: 8, points: 30 },
    { question: '꾸준한 학습과 자기계발을 중요하게 생각하나요?', id: 9, points:30 },
    { question: '독립적인 결정을 내릴 때 다른 사람의 의견을 따르기 힘들어하나요?', id: 10, points:30 },
    { question: '계획적으로 일을 처리하려고 노력하나요?', id: 11, points:30 },
    { question: '다른 사람들의 의견을 고려하지 않고 자신의 의견을 고수하는 편인가요?', id: 12, points:30 },
    { question: '새로운 도전에 대해 두려움 없이 접근하는 편인가요?', id: 13, points:30 },
    { question: 'END', id: 17, points:30 },
  ];

  function changeQuiz(answer: "yes" | "no") {
    const quiz = quizData.find((item) => item.id === quizId);
    if (quiz) {
      if (answer === "yes") {
        setPoint(point + quiz.points);          
      }  else if (answer === "no") {
        setPoint(point - quiz.points); 
      }
    setQuizId(quizId + 1);
    console.log(`quiz points: ${point}`);
    }
  }

  function renderQuiz(id:number) {
    const quiz = quizData.find((item) => item.id === id);
    if (quiz) {
      return (
        <Section>
              <QuizSection>
                <QuizSectionContent>
                  <Text fontSize="2xl" mb={4}>{quiz.question}</Text>
                    <YesButton onClick={() => changeQuiz("yes")} />
                    <NoButton onClick={() => changeQuiz("no")} />
                </QuizSectionContent>
              </QuizSection>
        </Section>
      );
    } else {
      return <EndOfQuiz />;
    }
  }

  const EndOfQuiz = () => {
    return (
      <Section>
        <QuizSection>
          <QuizSectionContent>
            <Text fontSize="2xl" mb={4}>END</Text>
            <Link href='/'>
              <QuizButton>HOME</QuizButton>
            </Link>
          </QuizSectionContent>
        </QuizSection>
      </Section>
    );
  };

  console.log(quizId);

  return renderQuiz(quizId);
}

