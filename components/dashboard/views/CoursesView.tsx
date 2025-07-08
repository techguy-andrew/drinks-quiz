'use client';

import { BookOpen, Clock, Star, Filter, Search, User, Target, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const courseCategories = [
  { name: "All", count: 24 },
  { name: "Leadership", count: 6 },
  { name: "Marketing", count: 5 },
  { name: "Finance", count: 4 },
  { name: "Strategy", count: 5 },
  { name: "Operations", count: 4 }
];

const difficultyLevels = [
  { value: "beginner", label: "Beginner", color: "bg-green-100 text-green-800" },
  { value: "intermediate", label: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
  { value: "advanced", label: "Advanced", color: "bg-red-100 text-red-800" }
];

const allCourses = [
  {
    title: "Advanced Sales Funnel Optimization",
    description: "Learn to optimize your sales funnels for maximum conversion rates and revenue growth. Master the psychology of customer decision-making and implement proven strategies.",
    duration: "4h 30m",
    thumbnail: "",
    status: "new" as const,
    category: "Marketing",
    instructor: "Sarah Mitchell",
    difficulty: "intermediate" as const,
    lessons: 12,
    enrolled: 847,
    rating: 4.8,
    progress: 0
  },
  {
    title: "Leadership Mindset Mastery",
    description: "Develop the mindset and skills needed to lead high-performing teams effectively. Transform your leadership approach and inspire your team to achieve exceptional results.",
    duration: "3h 15m",
    thumbnail: "",
    status: "in-progress" as const,
    progress: 65,
    category: "Leadership",
    instructor: "Michael Chen",
    difficulty: "intermediate" as const,
    lessons: 8,
    enrolled: 1234,
    rating: 4.9
  },
  {
    title: "Financial Planning for Entrepreneurs",
    description: "Essential financial strategies every business owner needs to know for long-term success. Build a solid financial foundation for your business.",
    duration: "2h 45m",
    thumbnail: "",
    status: "completed" as const,
    category: "Finance",
    instructor: "Jennifer Rodriguez",
    difficulty: "beginner" as const,
    lessons: 6,
    enrolled: 1567,
    rating: 4.7
  },
  {
    title: "Building Your Personal Brand",
    description: "Create a powerful personal brand that attracts clients and builds authority in your industry. Stand out in a crowded market and become a thought leader.",
    duration: "3h 20m",
    thumbnail: "",
    status: "new" as const,
    category: "Marketing",
    instructor: "David Kim",
    difficulty: "beginner" as const,
    lessons: 10,
    enrolled: 923,
    rating: 4.6
  },
  {
    title: "Strategic Planning Workshop",
    description: "Comprehensive guide to creating and executing strategic plans that drive business growth. Learn to think strategically and make better business decisions.",
    duration: "5h 15m",
    thumbnail: "",
    status: "new" as const,
    category: "Strategy",
    instructor: "Lisa Thompson",
    difficulty: "advanced" as const,
    lessons: 15,
    enrolled: 456,
    rating: 4.9
  },
  {
    title: "Team Management Excellence",
    description: "Master the art of managing and motivating teams to achieve exceptional results. Build high-performing teams and create a positive work culture.",
    duration: "3h 45m",
    thumbnail: "",
    status: "in-progress" as const,
    progress: 23,
    category: "Leadership",
    instructor: "Mark Stevens",
    difficulty: "intermediate" as const,
    lessons: 9,
    enrolled: 678,
    rating: 4.8
  },
  {
    title: "Operations Optimization",
    description: "Streamline your business operations for maximum efficiency and profitability. Identify bottlenecks and implement process improvements.",
    duration: "2h 30m",
    thumbnail: "",
    status: "new" as const,
    category: "Operations",
    instructor: "Alex Johnson",
    difficulty: "intermediate" as const,
    lessons: 7,
    enrolled: 345,
    rating: 4.5
  },
  {
    title: "Digital Marketing Mastery",
    description: "Master digital marketing strategies to grow your business online. Learn SEO, social media, content marketing, and paid advertising.",
    duration: "4h 10m",
    thumbnail: "",
    status: "new" as const,
    category: "Marketing",
    instructor: "Emma Wilson",
    difficulty: "intermediate" as const,
    lessons: 14,
    enrolled: 1123,
    rating: 4.7
  }
];

export function CoursesView() {
  const getDifficultyColor = (difficulty: string) => {
    const level = difficultyLevels.find(d => d.value === difficulty);
    return level?.color || "bg-gray-100 text-gray-800";
  };

  const getDifficultyLabel = (difficulty: string) => {
    const level = difficultyLevels.find(d => d.value === difficulty);
    return level?.label || difficulty;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-8 w-8" />
            Course Library
          </h1>
          <p className="text-muted-foreground mt-1">
            Discover and enroll in courses to accelerate your business growth
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter Courses
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-10"
          />
        </div>
        <Select defaultValue="newest">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {courseCategories.map((category, index) => (
          <Badge 
            key={index} 
            variant={index === 0 ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/10"
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Play className="h-6 w-6 text-white ml-1" />
                </Button>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant={course.status === "new" ? "destructive" : course.status === "in-progress" ? "secondary" : "outline"}>
                  {course.status === "new" ? "New" : course.status === "in-progress" ? "In Progress" : "Completed"}
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge className={getDifficultyColor(course.difficulty)}>
                  {getDifficultyLabel(course.difficulty)}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2">{course.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                  <span>({course.enrolled} enrolled)</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {course.category}
                </Badge>
              </div>

              {course.status === "in-progress" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <Button 
                className="w-full" 
                variant={course.status === "completed" ? "outline" : "default"}
              >
                {course.status === "completed" ? "Review Course" : 
                 course.status === "in-progress" ? "Continue Learning" : "Enroll Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}