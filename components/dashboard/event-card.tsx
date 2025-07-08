import { Calendar, Clock, Users, MapPin, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EventCardProps {
  title: string
  description: string
  date: string
  time: string
  duration: string
  type: "live-session" | "masterclass" | "networking" | "workshop" | "coaching" | "mastermind"
  attendees?: number
  maxAttendees?: number
  coach?: string
  status?: string
  isLive?: boolean
  hasRSVP?: boolean
}

export function EventCard({
  title,
  description,
  date,
  time,
  duration,
  type,
  attendees,
  maxAttendees,
  coach,
  status,
  isLive = false,
  hasRSVP = false
}: EventCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "live-session":
        return "bg-red-600 hover:bg-red-700"
      case "masterclass":
        return "bg-purple-600 hover:bg-purple-700"
      case "networking":
        return "bg-blue-600 hover:bg-blue-700"
      case "workshop":
        return "bg-green-600 hover:bg-green-700"
      case "coaching":
        return "bg-indigo-600 hover:bg-indigo-700"
      case "mastermind":
        return "bg-orange-600 hover:bg-orange-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "live-session":
        return "Live Session"
      case "masterclass":
        return "Masterclass"
      case "networking":
        return "Networking"
      case "workshop":
        return "Workshop"
      case "coaching":
        return "1-on-1 Coaching"
      case "mastermind":
        return "Mastermind"
      default:
        return type
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-600 hover:bg-green-700"
      case "registered":
        return "bg-blue-600 hover:bg-blue-700"
      case "pending":
        return "bg-yellow-600 hover:bg-yellow-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight line-clamp-2">{title}</h3>
          <div className="flex gap-1 shrink-0">
            {isLive && (
              <Badge className="bg-red-600 hover:bg-red-700">
                🔴 Live
              </Badge>
            )}
            <Badge className={getTypeColor(type)}>
              {getTypeLabel(type)}
            </Badge>
            {status && (
              <Badge className={getStatusColor(status)}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        {coach && (
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Coach:</span>
            <span className="font-medium">{coach}</span>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          {attendees !== undefined && maxAttendees !== undefined && (
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{attendees}/{maxAttendees}</span>
            </div>
          )}
        </div>

        {attendees !== undefined && maxAttendees !== undefined && attendees >= maxAttendees ? (
          <Button className="w-full" variant="outline" disabled>
            Event Full
          </Button>
        ) : hasRSVP ? (
          <Button className="w-full" variant="secondary">
            RSVP Confirmed
          </Button>
        ) : isLive ? (
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Join Live
          </Button>
        ) : status === "confirmed" ? (
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Join Session
          </Button>
        ) : (
          <Button className="w-full">
            RSVP Now
          </Button>
        )}
      </CardContent>
    </Card>
  )
}