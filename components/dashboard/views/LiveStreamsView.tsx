'use client';

import { Radio, Clock, Users, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const liveStreams = [
  {
    title: 'Live Coaching: Scaling Your Business',
    description:
      'Interactive coaching session focused on sustainable business growth strategies and overcoming scaling challenges.',
    date: 'Today',
    time: '4:00 PM EST',
    duration: '60 min',
    attendees: 45,
    maxAttendees: 50,
    isLive: true,
    host: 'Sarah Mitchell',
  },
  {
    title: 'Q&A: Marketing Strategies That Work',
    description:
      'Live Q&A session covering the most effective marketing strategies for business growth in 2025.',
    date: 'Tomorrow',
    time: '2:00 PM EST',
    duration: '45 min',
    attendees: 32,
    maxAttendees: 100,
    isLive: false,
    host: 'Michael Chen',
  },
  {
    title: 'Leadership Workshop: Building High-Performance Teams',
    description:
      'Interactive workshop on developing leadership skills and creating teams that consistently deliver results.',
    date: 'Jan 5, 2025',
    time: '3:00 PM EST',
    duration: '90 min',
    attendees: 67,
    maxAttendees: 150,
    isLive: false,
    host: 'Jennifer Rodriguez',
  },
];

const upcomingSchedule = [
  { day: 'Monday', time: '2:00 PM EST', title: 'Business Strategy Session' },
  { day: 'Wednesday', time: '4:00 PM EST', title: 'Live Coaching Q&A' },
  { day: 'Friday', time: '1:00 PM EST', title: 'Industry Insights' },
];

export function LiveStreamsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Radio className="h-8 w-8" />
            Live Streams
          </h1>
          <p className="text-muted-foreground mt-1">
            Join live coaching sessions, workshops, and Q&A with our expert
            coaches
          </p>
        </div>
      </div>

      {/* Live Now Section */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <Badge variant="destructive">LIVE NOW</Badge>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Live Coaching: Scaling Your Business
            </h3>
            <p className="text-muted-foreground mb-4">
              Interactive coaching session focused on sustainable business
              growth strategies.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>45/50 attendees</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Started 15 min ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Play className="h-4 w-4 mr-2" />
              Join Live Stream
            </Button>
          </div>
        </div>
      </div>

      {/* Upcoming Streams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Live Streams</h2>
          {liveStreams
            .filter(stream => !stream.isLive)
            .map((stream, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{stream.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {stream.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {stream.date} at {stream.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{stream.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {stream.host
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {stream.host}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline">Register</Button>
                      <div className="text-xs text-muted-foreground mt-2 text-center">
                        {stream.attendees}/{stream.maxAttendees} registered
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Weekly Schedule</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Regular Live Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingSchedule.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{session.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {session.day}
                    </div>
                  </div>
                  <div className="text-sm font-medium">{session.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
