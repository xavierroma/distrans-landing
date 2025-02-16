import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50">
      <nav className="mx-4 px-6 py-3 flex items-center justify-between rounded-full bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/5">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/90 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 36 C18 20, 44 20, 52 36 C46 32, 38 36, 32 40 C26 44, 16 42, 12 36 Z" fill="white" />
              </svg>
            </div>
            <span className="text-lg font-mono font-bold tracking-tighter">DISTRANS</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">FEATURES</a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">PRICING</a>
          <a href="/docs" className="text-sm hover:text-primary transition-colors">DOCS</a>
        </div>
        <Button className="group flex items-center justify-center gap-1" asChild>
          <Link href="#waitlist">
            <span className="transition-all duration-300">Request Access</span>
            <div className="overflow-hidden inline-block transition-all duration-300 w-0 group-hover:w-4">
              <MoveRight className="h-4 w-4 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Link>
        </Button>
      </nav>
    </header>
  );
} 