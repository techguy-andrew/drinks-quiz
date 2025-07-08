import { Header } from './header';
import { Footer } from './footer';
import { features } from '@/config/features';

interface RootLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export function RootLayout({
  children,
  showSidebar = false,
  showHeader = features.marketing.enabled,
  showFooter = features.marketing.enabled,
  className = '',
}: RootLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {showHeader && <Header />}
      <div className="flex">
        {showSidebar && (
          <div className="w-64 bg-muted">Sidebar Placeholder</div>
        )}
        <main className="flex-1">{children}</main>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
