'use client';

import { Folder, FileText, Download, Star, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const resourceCategories = [
  { name: 'All Resources', count: 127 },
  { name: 'Templates', count: 45 },
  { name: 'Guides', count: 32 },
  { name: 'Worksheets', count: 28 },
  { name: 'Checklists', count: 22 },
];

const featuredResources = [
  {
    title: 'Complete Business Plan Template',
    description:
      'Comprehensive business plan template with financial projections, market analysis, and strategic planning sections.',
    type: 'Template',
    format: 'PDF + Excel',
    pages: 25,
    downloads: 1243,
    rating: 4.9,
    author: 'Sarah Mitchell',
    dateAdded: 'Dec 15, 2024',
    isNew: true,
  },
  {
    title: 'Sales Funnel Optimization Guide',
    description:
      'Step-by-step guide to optimizing your sales funnel for maximum conversion rates and revenue growth.',
    type: 'Guide',
    format: 'PDF',
    pages: 18,
    downloads: 987,
    rating: 4.8,
    author: 'Michael Chen',
    dateAdded: 'Dec 12, 2024',
    isNew: false,
  },
  {
    title: 'Team Performance Evaluation Worksheet',
    description:
      'Structured worksheet for evaluating team performance, setting goals, and tracking progress over time.',
    type: 'Worksheet',
    format: 'Excel + PDF',
    pages: 8,
    downloads: 756,
    rating: 4.7,
    author: 'Jennifer Rodriguez',
    dateAdded: 'Dec 10, 2024',
    isNew: false,
  },
  {
    title: 'Financial Health Checklist',
    description:
      "Essential checklist to assess and improve your business's financial health and cash flow management.",
    type: 'Checklist',
    format: 'PDF',
    pages: 6,
    downloads: 634,
    rating: 4.9,
    author: 'David Kim',
    dateAdded: 'Dec 8, 2024',
    isNew: false,
  },
  {
    title: 'Marketing Strategy Canvas',
    description:
      'Visual canvas template for developing comprehensive marketing strategies and campaigns.',
    type: 'Template',
    format: 'PDF + PowerPoint',
    pages: 12,
    downloads: 892,
    rating: 4.8,
    author: 'Lisa Thompson',
    dateAdded: 'Dec 5, 2024',
    isNew: false,
  },
  {
    title: 'Leadership Development Framework',
    description:
      'Complete framework for developing leadership skills with exercises, assessments, and action plans.',
    type: 'Guide',
    format: 'PDF + Worksheets',
    pages: 32,
    downloads: 1156,
    rating: 4.9,
    author: 'Mark Stevens',
    dateAdded: 'Dec 1, 2024',
    isNew: false,
  },
];

const recentlyAdded = [
  {
    title: 'Social Media Content Calendar',
    type: 'Template',
    author: 'Emma Wilson',
    dateAdded: 'Dec 20, 2024',
  },
  {
    title: 'Customer Journey Mapping Guide',
    type: 'Guide',
    author: 'Ryan Foster',
    dateAdded: 'Dec 18, 2024',
  },
  {
    title: 'Productivity Optimization Checklist',
    type: 'Checklist',
    author: 'Alex Johnson',
    dateAdded: 'Dec 16, 2024',
  },
];

export function ResourcesView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Folder className="h-8 w-8" />
            Resource Library
          </h1>
          <p className="text-muted-foreground mt-1">
            Download templates, guides, worksheets, and tools to accelerate your
            business growth
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="flex flex-wrap gap-2">
        {resourceCategories.map((category, index) => (
          <Badge
            key={index}
            variant={index === 0 ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary/10"
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Resources Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        {resource.isNew && (
                          <Badge className="bg-green-600">New</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {resource.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{resource.format}</span>
                      <span>{resource.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {resource.author
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {resource.author}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {resource.dateAdded}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      {resource.downloads.toLocaleString()} downloads
                    </span>
                    <Button size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recently Added */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recently Added</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentlyAdded.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer"
                >
                  <FileText className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm leading-tight">
                      {resource.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {resource.type} • {resource.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {resource.dateAdded}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download All Templates
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                View My Favorites
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Request New Resource
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
