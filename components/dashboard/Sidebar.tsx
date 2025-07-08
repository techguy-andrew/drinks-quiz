'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  PlayCircle,
  BookOpen,
  Calendar,
  Settings,
  Folder,
  LayoutDashboard,
} from 'lucide-react';
import { MembershipView } from '@/app/(dashboard)/membership/page';

const navLinks = [
  {
    label: 'Dashboard',
    view: 'membership' as MembershipView,
    icon: LayoutDashboard,
  },
  { label: 'Courses', view: 'videos' as MembershipView, icon: BookOpen },
  { label: 'My Sessions', view: 'live' as MembershipView, icon: PlayCircle },
  { label: 'Events', view: 'events' as MembershipView, icon: Calendar },
  { label: 'Resources', view: 'resources' as MembershipView, icon: Folder },
  { label: 'Profile', view: 'profile' as MembershipView, icon: Settings },
];

interface SidebarProps {
  activeView: MembershipView;
  onViewChange: (view: MembershipView) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-background border-r min-h-screen flex flex-col">
      <div className="flex items-center gap-3 p-6 border-b">
        <Avatar className="h-10 w-10">
          <AvatarFallback>EB</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-lg">Elite Business Coaching</div>
          <div className="text-xs text-muted-foreground">Member Portal</div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map(({ label, view, icon: Icon }) => {
          const isActive = activeView === view;

          return (
            <Button
              key={view}
              variant={isActive ? 'secondary' : 'ghost'}
              className="w-full justify-start flex items-center gap-3"
              onClick={() => onViewChange(view)}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}
