import { Calendar, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  author: {
    name: string
    avatar?: string
  }
  publishDate: string
  readTime: string
  category: string
  isNew?: boolean
}

export function BlogPostCard({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  category,
  isNew = false
}: BlogPostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight line-clamp-2">{title}</h3>
          {isNew && (
            <Badge variant="default" className="bg-green-600 hover:bg-green-700 shrink-0">
              New
            </Badge>
          )}
        </div>
        <Badge variant="secondary" className="w-fit text-xs">
          {category}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Avatar className="h-5 w-5">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="text-xs">
                {author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>

        <Button className="w-full" variant="outline">
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}