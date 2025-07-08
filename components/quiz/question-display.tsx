'use client'

import { useState } from 'react'
import { QuizQuestion } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { cn } from '@/lib/utils'
import { CheckCircle, XCircle } from 'lucide-react'

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
        ? 'bg-primary text-primary-foreground border-primary' 
        : 'bg-background hover:bg-accent hover:border-accent-foreground/20'
    }

    if (optionIndex === question.correctAnswer) {
      return 'bg-green-50 border-green-500 text-green-800 hover:bg-green-50'
    }

    if (currentSelection === optionIndex && optionIndex !== question.correctAnswer) {
      return 'bg-red-50 border-red-500 text-red-800 hover:bg-red-50'
    }

    return 'bg-background opacity-60 hover:bg-background'
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="mb-2 text-primary font-semibold text-lg italic">{question.drink}</div>
        <CardTitle className="text-xl md:text-2xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={cn(
                'h-auto p-6 text-left justify-start whitespace-normal transition-all duration-200 hover:scale-[1.02]',
                getOptionClassName(index)
              )}
              onClick={() => handleOptionClick(index)}
              disabled={showFeedback}
            >
              <span className="font-semibold mr-3 text-lg">{String.fromCharCode(65 + index)}.</span>
              <span className="text-base">{option}</span>
            </Button>
          ))}
        </div>

        {showFeedback && (
          <Alert variant={currentSelection === question.correctAnswer ? "success" : "destructive"}>
            <div className="flex items-start gap-3">
              {currentSelection === question.correctAnswer ? (
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1">
                <AlertDescription className="text-sm mb-4">
                  <strong>Explanation:</strong> {question.explanation}
                </AlertDescription>
                <div className="flex justify-end">
                  <Button onClick={handleContinue} size="lg" className="px-8">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}