'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export type QuizMode = 'short' | 'full'

interface QuizModeSelectorProps {
  onSelectMode: (mode: QuizMode) => void
}

export function QuizModeSelector({ onSelectMode }: QuizModeSelectorProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Drinks Quiz</h1>
        <p className="text-lg text-muted-foreground">
          Choose your quiz mode to get started
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Short Quiz</CardTitle>
            <CardDescription>
              Random selection of questions for a quick challenge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 25 random questions</p>
                <p>• ~10-15 minutes</p>
                <p>• Different questions each time</p>
              </div>
              <Button 
                onClick={() => onSelectMode('short')} 
                className="w-full"
                size="lg"
              >
                Start Short Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Full Quiz</CardTitle>
            <CardDescription>
              Complete quiz with all available questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• All 80 questions</p>
                <p>• ~30-40 minutes</p>
                <p>• Comprehensive coverage</p>
              </div>
              <Button 
                onClick={() => onSelectMode('full')} 
                className="w-full"
                size="lg"
                variant="secondary"
              >
                Start Full Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}