'use client'

import { useState, useEffect } from 'react'
import { QuizQuestion, QuizState } from '@/lib/types'
import { shuffleArray, calculatePercentage } from '@/lib/utils'
import { quizQuestions } from '@/lib/quiz-data'
import { QuestionDisplay } from './question-display'
import { QuizProgress } from './quiz-progress'
import { QuizResults } from './quiz-results'
import { QuizModeSelector, QuizMode } from './quiz-mode-selector'

export function QuizContainer() {
  const [selectedMode, setSelectedMode] = useState<QuizMode | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    isComplete: false,
    timeSpent: 0
  })
  const [startTime, setStartTime] = useState<number>(0)
  const [currentQuestionStartTime, setCurrentQuestionStartTime] = useState<number>(0)

  const initializeQuiz = (mode: QuizMode) => {
    // Group questions by drink and order them
    const grouped = [...quizQuestions].sort((a, b) => {
      if (a.drink < b.drink) return -1;
      if (a.drink > b.drink) return 1;
      return 0;
    });
    setQuestions(grouped);
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
      timeSpent: 0
    });
    const now = Date.now();
    setStartTime(now);
    setCurrentQuestionStartTime(now);
  }

  const handleModeSelect = (mode: QuizMode) => {
    setSelectedMode(mode)
    initializeQuiz(mode)
  }

  const handleAnswer = async (selectedAnswer: number) => {
    const currentQuestion = questions[quizState.currentQuestion]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const timeSpent = Date.now() - currentQuestionStartTime

    const newAnswers = [...quizState.answers, selectedAnswer]
    const newScore = isCorrect ? quizState.score + 1 : quizState.score

    if (quizState.currentQuestion + 1 >= questions.length) {
      // Quiz complete
      const finalTimeSpent = Date.now() - startTime
      const finalState = {
        ...quizState,
        answers: newAnswers,
        score: newScore,
        isComplete: true,
        timeSpent: finalTimeSpent
      }
      
      setQuizState(finalState)
      
      // Save results to database
      try {
        const answerData = questions.map((question, index) => ({
          questionId: question.id,
          selectedAnswer: newAnswers[index],
          isCorrect: newAnswers[index] === question.correctAnswer,
          timeSpent: 0 // Individual question time tracking could be added later
        }))

        await fetch('/api/quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            score: newScore,
            totalQuestions: questions.length,
            timeSpent: finalTimeSpent,
            answers: answerData
          }),
        })
      } catch (error) {
        console.error('Error saving quiz results:', error)
      }
    } else {
      // Next question
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers,
        score: newScore
      })
      setCurrentQuestionStartTime(Date.now())
    }
  }

  const resetQuiz = () => {
    if (selectedMode) {
      initializeQuiz(selectedMode)
    }
  }

  const goBackToModeSelection = () => {
    setSelectedMode(null)
    setQuestions([])
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
      timeSpent: 0
    })
  }

  // Show mode selector if no mode is selected
  if (!selectedMode) {
    return <QuizModeSelector onSelectMode={handleModeSelect} />
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (quizState.isComplete) {
    return (
      <QuizResults
        score={quizState.score}
        totalQuestions={questions.length}
        timeSpent={quizState.timeSpent}
        onRestart={resetQuiz}
        onBackToModeSelection={goBackToModeSelection}
      />
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <QuizProgress
        currentQuestion={quizState.currentQuestion + 1}
        totalQuestions={questions.length}
        score={quizState.score}
      />
      
      <QuestionDisplay
        question={questions[quizState.currentQuestion]}
        onAnswer={handleAnswer}
        selectedAnswer={quizState.answers[quizState.currentQuestion]}
      />
    </div>
  )
}