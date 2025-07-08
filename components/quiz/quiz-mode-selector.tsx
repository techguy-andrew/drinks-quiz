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
          Test your knowledge of all our signature drinks
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Full Quiz</CardTitle>
            <CardDescription>
              Complete quiz with all available questions, grouped by drink
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• All questions, grouped by drink</p>
                <p>• Comprehensive coverage</p>
              </div>
              <Button 
                onClick={() => onSelectMode('full')} 
                className="w-full"
                size="lg"
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