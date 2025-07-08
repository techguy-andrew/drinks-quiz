import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, BarChart3, LogIn } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Drinks Quiz
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Test your knowledge of our signature cocktails and drink recipes.
        </p>
        
        {/* Primary CTA */}
        <div className="mb-20">
          <Link href="/quiz">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Quiz
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Secondary Action Cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">View Recipes</CardTitle>
              <CardDescription className="text-sm">
                Browse our collection of signature cocktail recipes and learn how to make them.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link href="/recipes">
                <Button variant="outline" className="w-full" size="lg">
                  View Recipes
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">View Dashboard</CardTitle>
              <CardDescription className="text-sm">
                Track your quiz progress and see detailed analytics of your performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full" size="lg">
                  View Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 h-full md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Sign In</CardTitle>
              <CardDescription className="text-sm">
                Access your account to save progress and compete with other users.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link href="/auth/login">
                <Button variant="outline" className="w-full" size="lg">
                  Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}