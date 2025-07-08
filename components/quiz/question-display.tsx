'use client'

import { useState } from 'react'
import { QuizQuestion } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface QuestionDisplayProps {
  question: QuizQuestion
  onAnswer: (selectedAnswer: number) => void
  selectedAnswer?: number
}

export function QuestionDisplay({ question, onAnswer, selectedAnswer }: QuestionDisplayProps) {
  const [currentSelection, setCurrentSelection] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleOptionClick = (optionIndex: number) => {
    if (showFeedback) return // Prevent clicking after answer is shown
    
    setCurrentSelection(optionIndex)
    setShowFeedback(true)
  }

  const handleContinue = () => {
    if (currentSelection !== null) {
      onAnswer(currentSelection)
      setCurrentSelection(null)
      setShowFeedback(false)
    }
  }

  const getOptionClassName = (optionIndex: number) => {
    if (!showFeedback) {
      return currentSelection === optionIndex 
        ? 'bg-primary text-primary-foreground' 
        : 'bg-background hover:bg-accent'
    }

    if (optionIndex === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800'
    }

    if (currentSelection === optionIndex && optionIndex !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-800'
    }

    return 'bg-background opacity-50'
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <div className="mb-2 text-primary font-semibold text-lg">{question.drink}</div>
        <CardTitle className="text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={cn(
                'h-auto p-4 text-left justify-start whitespace-normal',
                getOptionClassName(index)
              )}
              onClick={() => handleOptionClick(index)}
              disabled={showFeedback}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>

        {showFeedback && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Explanation:</strong> {question.explanation}
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleContinue} className="bg-primary hover:bg-primary/90">
                Continue
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}