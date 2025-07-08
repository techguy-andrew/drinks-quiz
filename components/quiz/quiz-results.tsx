import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { calculatePercentage, getScoreMessage } from '@/lib/utils'

interface QuizResultsProps {
  score: number
  totalQuestions: number
  timeSpent: number
  onRestart: () => void
}

export function QuizResults({ score, totalQuestions, timeSpent, onRestart }: QuizResultsProps) {
  const percentage = calculatePercentage(score, totalQuestions)
  const message = getScoreMessage(percentage)
  const timeMinutes = Math.floor(timeSpent / 60000)
  const timeSeconds = Math.floor((timeSpent % 60000) / 1000)

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 80) return 'text-blue-600'
    if (percentage >= 70) return 'text-yellow-600'
    if (percentage >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            
            <div className="text-lg">
              You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong> questions correctly
            </div>
            
            <div className="text-muted-foreground">
              Completed in {timeMinutes}m {timeSeconds}s
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-medium">{message}</p>
          </div>

          <div className="space-y-2">
            <Button onClick={onRestart} className="w-full">
              Take Quiz Again
            </Button>
            <Button variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}