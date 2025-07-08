import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  MP
                </span>
              </div>
              <span className="font-bold text-xl">MembershipPro</span>
            </div>
            <p className="text-muted-foreground">
              Build, launch, and scale your membership platform with powerful
              tools designed for creators.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="#features"
                className="block hover:text-foreground transition-colors"
              >
                Features
              </a>
              <Link
                href="/pricing"
                className="block hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Integrations
              </a>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                API
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link
                href="/about"
                className="block hover:text-foreground transition-colors"
              >
                About
              </Link>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Careers
              </a>
              <Link
                href="/contact"
                className="block hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Community
              </a>
              <a
                href="#"
                className="block hover:text-foreground transition-colors"
              >
                Status
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MembershipPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
