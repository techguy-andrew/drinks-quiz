import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'

interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
  score: number
}

export function QuizProgress({ currentQuestion, totalQuestions, score }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium">
            Question {currentQuestion} of {totalQuestions}
          </div>
          <div className="text-sm font-medium">
            Score: {score}/{totalQuestions}
          </div>
        </div>
        
        <Progress value={progress} className="h-2" />
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </CardContent>
    </Card>
  )
}