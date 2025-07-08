import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'live' | 'upcoming' | 'completed' | 'exclusive' | string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  let color = 'bg-gray-500 text-white';
  switch (status) {
    case 'live':
      color = 'bg-red-500 text-white';
      break;
    case 'upcoming':
      color = 'bg-blue-500 text-white';
      break;
    case 'completed':
      color = 'bg-green-500 text-white';
      break;
    case 'exclusive':
      color = 'bg-yellow-500 text-white';
      break;
    default:
      color = 'bg-gray-500 text-white';
  }

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  return (
    <Badge className={cn(
      sizeClasses[size],
      'font-medium',
      color
    )}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
} 