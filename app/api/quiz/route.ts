import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { prisma } from '@/lib/prisma'

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'your-secret-key')

async function getUserFromToken(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  
  if (!token) {
    return null
  }

  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (error) {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const { score, totalQuestions, timeSpent, answers } = await request.json()
    
    if (typeof score !== 'number' || typeof totalQuestions !== 'number') {
      return NextResponse.json(
        { message: 'Invalid score data' },
        { status: 400 }
      )
    }

    const user = await getUserFromToken(request)
    const percentage = Math.round((score / totalQuestions) * 100)

    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId: user?.userId as string || null,
        score,
        totalQuestions,
        percentage,
        timeSpent: timeSpent || null,
        answers: {
          create: answers?.map((answer: any) => ({
            questionId: answer.questionId,
            selectedAnswer: answer.selectedAnswer,
            isCorrect: answer.isCorrect,
            timeSpent: answer.timeSpent || null,
          })) || [],
        },
      },
      include: {
        answers: true,
      },
    })

    return NextResponse.json({
      id: quizAttempt.id,
      message: 'Quiz results saved successfully',
    })
  } catch (error) {
    console.error('Save quiz error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromToken(request)
    
    if (!user) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      )
    }

    const quizAttempts = await prisma.quizAttempt.findMany({
      where: { userId: user.userId as string },
      orderBy: { completedAt: 'desc' },
      take: 10,
    })

    const stats = await prisma.quizAttempt.aggregate({
      where: { userId: user.userId as string },
      _avg: { percentage: true },
      _max: { percentage: true },
      _count: { id: true },
    })

    return NextResponse.json({
      attempts: quizAttempts,
      stats: {
        averageScore: stats._avg.percentage || 0,
        bestScore: stats._max.percentage || 0,
        totalAttempts: stats._count.id || 0,
      },
    })
  } catch (error) {
    console.error('Get quiz history error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}