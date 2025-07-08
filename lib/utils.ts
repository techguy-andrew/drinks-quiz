import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function calculatePercentage(score: number, total: number): number {
  return Math.round((score / total) * 100)
}

export function getScoreMessage(percentage: number): string {
  if (percentage >= 90) return "Outstanding! You're a cocktail expert!"
  if (percentage >= 80) return "Great job! You know your drinks well!"
  if (percentage >= 70) return "Good work! Keep practicing!"
  if (percentage >= 60) return "Not bad! There's room for improvement."
  return "Keep studying! You'll get there with more practice."
}