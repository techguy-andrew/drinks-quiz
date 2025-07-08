import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { calculatePercentage, getScoreMessage } from '@/lib/utils'

interface QuizResultsProps {
  score: number
  totalQuestions: number
  timeSpent: number
  onRestart: () => void
  onBackToModeSelection?: () => void
}

export function QuizResults({ score, totalQuestions, timeSpent, onRestart, onBackToModeSelection }: QuizResultsProps) {
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
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-8">
          <div className="space-y-6">
            <div className={`text-8xl md:text-9xl font-extrabold ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            
            <div className="text-xl md:text-2xl">
              You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong> questions correctly
            </div>
            
            <div className="text-lg text-muted-foreground">
              Completed in {timeMinutes}m {timeSeconds}s
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <p className="text-xl font-semibold">{message}</p>
          </div>

          <div className="space-y-3">
            <Button onClick={onRestart} size="lg" className="w-full text-lg px-8 py-6 h-auto">
              Take Same Quiz Again
            </Button>
            {onBackToModeSelection && (
              <Button variant="outline" size="lg" className="w-full text-lg px-8 py-6 h-auto" onClick={onBackToModeSelection}>
                Try Different Quiz Mode
              </Button>
            )}
            <Button variant="outline" size="lg" className="w-full text-lg px-8 py-6 h-auto" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}