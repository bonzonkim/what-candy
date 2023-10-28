import React, { useState } from "react";
import {
    Text,
} from '@chakra-ui/react';
import { QuizSection, QuizSectionContent, QuizButton } from "../layouts/QuizLayout";
import Section from '../Section';
import Link from "next/link";
import Theme from '../../libs/theme';


export default function Quiz() {
  const [quizId, setQuizId] = useState(1);

  const quizData = [
    { question: '나는 휴일에 집에서 쉬는게 더 좋다.', id: 1 },
    { question: 'asdf', id: 2 },
    { question: 'this is quiz 3', id: 3 },
    { question: 'this is quiz4', id: 4 },
    { question: 'quiz 5', id: 5 },
    { question: 'quiz6', id: 6 },
    { question: 'quiz7', id: 7 },
    { question: 'quiz8', id: 8 },
    { question: 'quiz9', id: 9 },
    { question: 'quiz10', id: 10 },
    { question: 'quiz11', id: 11 },
    { question: 'quiz12', id: 12 },
    { question: 'quiz14', id: 13 },
    { question: 'END', id: 17 },
  ];

  function changeQuiz() {
    setQuizId(quizId + 1);
  }

  function renderQuiz(id:number) {
    const quiz = quizData.find((item) => item.id === id);
    if (quiz) {
      return (
        <Section>
              <QuizSection>
                <QuizSectionContent>
                  <Text fontSize="2xl" mb={4}>{quiz.question}</Text>
                  <QuizButton onClick={changeQuiz}>yes</QuizButton>
                  <QuizButton onClick={changeQuiz}>no</QuizButton>
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

