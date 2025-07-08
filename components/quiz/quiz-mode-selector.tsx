'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export type QuizMode = 'short' | 'full'

interface QuizModeSelectorProps {
  onSelectMode: (mode: QuizMode) => void
}

export function QuizModeSelector({ onSelectMode }: QuizModeSelectorProps) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Quiz</h1>
        <p className="text-lg text-muted-foreground">
          Ready to test your drink knowledge?
        </p>
      </div>
      <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105">
        <CardHeader>
          <CardTitle className="text-xl">Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => onSelectMode('full')}
            className="w-full text-lg px-8 py-6 h-auto"
            size="lg"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}