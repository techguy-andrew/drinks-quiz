'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quiz', href: '/quiz' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Recipes', href: '/recipes' },
];

export function Header() {
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      setUser(userData ? JSON.parse(userData) : null);
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsMobileMenuOpen(false);
    // Optionally, refresh the page or redirect
    window.location.href = '/';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
            Privateer Menu
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col md:hidden gap-2 mt-2 pb-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded text-muted-foreground hover:text-primary hover:bg-accent transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {user ? (
                <Button variant="destructive" className="flex-1" onClick={handleSignOut}>Sign Out</Button>
              ) : (
                <Button variant="ghost" asChild className="flex-1" onClick={closeMobileMenu}>
                  <Link href="/auth/login">Login</Link>
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
