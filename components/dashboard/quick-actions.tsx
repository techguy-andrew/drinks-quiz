import { Calendar, Download, MessageCircle, PlayCircle, BookOpen, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickAction {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  variant: "default" | "secondary" | "outline"
  isLive?: boolean
  isPrimary?: boolean
}

const quickActions: QuickAction[] = [
  {
    title: "Continue Current Course",
    description: "Pick up where you left off",
    icon: PlayCircle,
    variant: "default",
    isPrimary: true
  },
  {
    title: "Book 1-on-1 Session",
    description: "Schedule personal coaching",
    icon: Calendar,
    variant: "default"
  },
  {
    title: "Join Community Discussion",
    description: "Connect with other members",
    icon: MessageCircle,
    variant: "outline"
  },
  {
    title: "Download This Week's Resources",
    description: "Templates, guides & tools",
    icon: Download,
    variant: "outline"
  },
  {
    title: "Set Learning Goals",
    description: "Track your progress",
    icon: Target,
    variant: "secondary"
  },
  {
    title: "Browse Course Catalog",
    description: "Explore all available courses",
    icon: BookOpen,
    variant: "secondary"
  }
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon
          return (
            <Button
              key={index}
              variant={action.variant}
              className={`h-auto p-4 flex flex-col items-start gap-2 ${
                action.isPrimary 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className="h-5 w-5" />
                <span className="font-medium text-sm">{action.title}</span>
                {action.isPrimary && (
                  <ArrowRight className="h-4 w-4 ml-auto" />
                )}
              </div>
              <span className="text-xs text-left opacity-80">
                {action.description}
              </span>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}