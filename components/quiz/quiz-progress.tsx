import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
  score: number
}

export function QuizProgress({ currentQuestion, totalQuestions, score }: QuizProgressProps) {
  const progress = ((currentQuestion - 1) / totalQuestions) * 100
  
  return (
    <Card className="mb-8 hover:shadow-lg transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            Question {currentQuestion} of {totalQuestions}
          </CardTitle>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Score: {score}/{totalQuestions}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}