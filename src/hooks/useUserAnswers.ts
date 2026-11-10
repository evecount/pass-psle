'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

type AnswerHistory = {
  [questionId: string]: {
    lastResult: 'correct' | 'incorrect';
    timestamp: number;
  };
};

const STORAGE_KEY = 'userAnswerHistory';

export function useUserAnswers() {
  const [answers, setAnswers] = useState<AnswerHistory>({});
  const answersRef = useRef(answers);
  answersRef.current = answers;

  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEY);
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    } catch (error) {
      console.error("Failed to load answer history from localStorage", error);
    }
  }, []);

  const saveAnswer = useCallback((questionId: number | string, isCorrect: boolean) => {
    const newAnswer = {
      lastResult: isCorrect ? 'correct' : 'incorrect',
      timestamp: Date.now(),
    };
    
    setAnswers(prevAnswers => {
      const updatedAnswers = {
        ...prevAnswers,
        [questionId.toString()]: newAnswer
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswers));
      } catch (error) {
        console.error("Failed to save answer history to localStorage", error);
      }
      return updatedAnswers;
    });
  }, []);

  const getAnswerHistory = useCallback((questionId: number | string) => {
    return answersRef.current[questionId.toString()];
  }, []);

  return { saveAnswer, getAnswerHistory, answers };
}
