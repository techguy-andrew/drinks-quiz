'use client';

import { BookOpen, Star, CheckCircle } from 'lucide-react';
import { VideoCard } from '@/components/dashboard/video-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const membershipInfo = {
  tier: 'Growth Member',
  since: 'Jan 2024',
  nextTier: 'Elite Member',
  progressToNext: 65,
  benefits: [
    '1-on-1 coaching',
    'Group masterminds',
    'Premium content',
    'Priority support',
  ],
};

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Ready to accelerate your business growth? Here&apos;s your
          personalized learning journey.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <Badge variant="secondary" className="text-xs md:text-sm">
            {membershipInfo.tier} since {membershipInfo.since}
          </Badge>
          <span className="text-xs md:text-sm text-muted-foreground">
            • {membershipInfo.progressToNext}% to {membershipInfo.nextTier}
          </span>
        </div>
      </div>

      {/* Your Benefits Section - Top Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Your Benefits - Prominently positioned */}
        <div className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
                Your Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {membershipInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs md:text-sm"
                >
                  View All Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended for You Section */}
        <div className="lg:col-span-3">
          <section>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              <h2 className="text-lg md:text-xl font-semibold">
                Recommended for You
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <VideoCard
                title="Leadership Mindset Mastery"
                description="Develop the mindset and skills needed to lead high-performing teams effectively."
                duration="32 min"
                thumbnail=""
                status="new"
                category="Leadership"
              />
              <VideoCard
                title="Financial Planning for Entrepreneurs"
                description="Essential financial strategies every business owner needs to know for long-term success."
                duration="28 min"
                thumbnail=""
                status="recommended"
                category="Finance"
              />
              <VideoCard
                title="Sales Funnel Optimization"
                description="Learn to optimize your sales funnels for maximum conversion rates and revenue growth."
                duration="45 min"
                thumbnail=""
                status="recommended"
                category="Marketing"
              />
              <VideoCard
                title="Team Building Strategies"
                description="Build and manage high-performing teams that drive business success."
                duration="38 min"
                thumbnail=""
                status="new"
                category="Management"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
