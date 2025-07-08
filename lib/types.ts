export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  drink: string // Name of the drink this question is about
}

export interface QuizState {
  currentQuestion: number
  score: number
  answers: number[]
  isComplete: boolean
  timeSpent: number
}

export interface QuizAnswer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
}

export interface QuizResult {
  score: number
  totalQuestions: number
  percentage: number
  timeSpent: number
  answers: QuizAnswer[]
}

export interface User {
  id: string
  email: string
  name?: string
}

export interface QuizAttempt {
  id: string
  userId?: string
  score: number
  totalQuestions: number
  percentage: number
  timeSpent?: number
  completedAt: Date
}