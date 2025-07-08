'use client';

import { Calendar, Users, MapPin, Filter } from 'lucide-react';
import { EventCard } from '@/components/dashboard/event-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const eventTypes = [
  { name: 'All Events', count: 8 },
  { name: 'Masterclass', count: 3 },
  { name: 'Workshop', count: 2 },
  { name: 'Networking', count: 2 },
  { name: 'Bootcamp', count: 1 },
];

const allEvents = [
  {
    title: 'Q1 Business Planning Masterclass',
    description:
      'Strategic planning session to set your business up for success in the coming quarter with actionable frameworks.',
    date: 'Jan 3, 2025',
    time: '2:00 PM EST',
    duration: '90 min',
    type: 'masterclass' as const,
    attendees: 127,
    maxAttendees: 200,
    hasRSVP: true,
    location: 'Virtual Event',
  },
  {
    title: 'Elite Business Bootcamp 2025',
    description:
      'Intensive 3-day bootcamp covering advanced business strategies, leadership development, and scaling techniques.',
    date: 'Feb 15-17, 2025',
    time: '9:00 AM EST',
    duration: '3 days',
    type: 'bootcamp' as const,
    attendees: 45,
    maxAttendees: 50,
    hasRSVP: false,
    location: 'Miami, FL',
  },
  {
    title: 'Marketing Excellence Workshop',
    description:
      'Hands-on workshop focusing on modern marketing strategies that drive real business growth and customer acquisition.',
    date: 'Jan 20, 2025',
    time: '1:00 PM EST',
    duration: '2 hours',
    type: 'workshop' as const,
    attendees: 67,
    maxAttendees: 100,
    hasRSVP: true,
    location: 'Virtual Event',
  },
  {
    title: "Leadership Summit: Building Tomorrow's Teams",
    description:
      'Connect with fellow leaders and learn cutting-edge strategies for building and managing high-performance teams.',
    date: 'Mar 5, 2025',
    time: '10:00 AM EST',
    duration: '4 hours',
    type: 'networking' as const,
    attendees: 89,
    maxAttendees: 150,
    hasRSVP: false,
    location: 'New York, NY',
  },
  {
    title: 'Financial Mastery Workshop',
    description:
      'Deep dive into financial planning, cash flow management, and investment strategies for business owners.',
    date: 'Jan 28, 2025',
    time: '3:00 PM EST',
    duration: '2.5 hours',
    type: 'workshop' as const,
    attendees: 34,
    maxAttendees: 75,
    hasRSVP: true,
    location: 'Virtual Event',
  },
  {
    title: 'Elite Networking Mixer',
    description:
      'Exclusive networking event for our elite members to connect, share insights, and build valuable business relationships.',
    date: 'Feb 8, 2025',
    time: '6:00 PM EST',
    duration: '3 hours',
    type: 'networking' as const,
    attendees: 23,
    maxAttendees: 40,
    hasRSVP: false,
    location: 'Chicago, IL',
  },
];

export function EventsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Calendar className="h-8 w-8" />
            Events & Workshops
          </h1>
          <p className="text-muted-foreground mt-1">
            Join exclusive events, masterclasses, and networking opportunities
            designed for elite business leaders
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Event Types Filter */}
      <div className="flex flex-wrap gap-2">
        {eventTypes.map((type, index) => (
          <Badge
            key={index}
            variant={index === 0 ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary/10"
          >
            {type.name} ({type.count})
          </Badge>
        ))}
      </div>

      {/* Featured Event */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-600">Featured Event</Badge>
          </div>
          <CardTitle className="text-xl">
            Elite Business Bootcamp 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Intensive 3-day bootcamp covering advanced business strategies,
            leadership development, and scaling techniques. Limited to 50
            participants for maximum impact and personalized attention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Feb 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Miami, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">45/50 registered</span>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Register Now - $2,497
          </Button>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {allEvents
          .filter(event => event.type !== 'bootcamp')
          .map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
      </div>
    </div>
  );
}
