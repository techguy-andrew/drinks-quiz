import { Play, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface VideoCardProps {
  title: string
  description: string
  duration: string
  thumbnail: string
  status: "new" | "in-progress" | "completed" | "recommended"
  progress?: number
  category: string
}

export function VideoCard({
  title,
  description,
  duration,
  status,
  progress = 0,
  category
}: VideoCardProps) {
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new":
        return "default"
      case "in-progress":
        return "secondary"
      case "completed":
        return "outline"
      case "recommended":
        return "destructive"
      default:
        return "default"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "new":
        return "New"
      case "in-progress":
        return "In Progress"
      case "completed":
        return "Completed"
      case "recommended":
        return "Recommended"
      default:
        return status
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
          <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
            <Play className="h-6 w-6 text-white ml-1" />
          </Button>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant={getStatusBadgeVariant(status)}>
            {getStatusText(status)}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-black/50 text-white border-white/20">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">{title}</h3>
        </div>
        <Badge variant="secondary" className="w-fit text-xs">
          {category}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        {status === "in-progress" && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        <Button className="w-full mt-3" variant={status === "completed" ? "outline" : "default"}>
          {status === "completed" ? "Watch Again" : status === "in-progress" ? "Continue" : "Watch Now"}
        </Button>
      </CardContent>
    </Card>
  )
}