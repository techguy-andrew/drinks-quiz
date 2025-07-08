import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

interface ContentCardProps {
  type: 'video' | 'blog' | 'event' | 'resource' | 'stream';
  title: string;
  description?: string;
  author?: string;
  authorAvatar?: string;
  date?: string;
  duration?: string;
  thumbnail?: string;
  status?: 'live' | 'upcoming' | 'completed' | 'exclusive' | string;
  category?: string;
  progress?: number;
  downloadUrl?: string;
  href?: string;
  featured?: boolean;
  exclusive?: boolean;
}

export function ContentCard({
  title,
  description,
  author,
  authorAvatar,
  date,
  duration,
  thumbnail,
  status,
  category,
  progress,
  downloadUrl,
  href,
  featured,
  exclusive,
}: ContentCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      {thumbnail && (
        <div className="relative h-40 w-full overflow-hidden rounded-t-md">
          <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
          {status && (
            <Badge className="absolute top-2 left-2 text-xs bg-red-500 text-white">{status}</Badge>
          )}
          {exclusive && (
            <Badge className="absolute top-2 right-2 text-xs bg-yellow-500 text-white">Exclusive</Badge>
          )}
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
            {category && (
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            )}
          </div>
          {date && (
            <span className="text-xs text-muted-foreground">{date}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {description && <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{description}</p>}
        {author && (
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              {authorAvatar ? <AvatarImage src={authorAvatar} alt={author} /> : <AvatarFallback>{author[0]}</AvatarFallback>}
            </Avatar>
            <span className="text-xs text-muted-foreground">{author}</span>
          </div>
        )}
        {duration && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            <span>Duration:</span>
            <span>{duration}</span>
          </div>
        )}
        {progress !== undefined && (
          <div className="mb-2">
            <Progress value={progress} className="h-2" />
            <span className="text-xs text-muted-foreground">{progress}% complete</span>
          </div>
        )}
        {downloadUrl && (
          <a href={downloadUrl} download className="block mt-2 text-primary hover:underline text-sm font-medium">
            Download Resource
          </a>
        )}
        {href && (
          <Link href={href} className="block mt-2 text-primary hover:underline text-sm font-medium">
            View Details
          </Link>
        )}
      </CardContent>
    </Card>
  );
} 