import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50">
      <nav className="mx-4 px-6 py-3 flex items-center justify-between rounded-full bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/5">
        <div className="flex items-center gap-2">
          <Link href="#hero">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="font-bold text-xl flex items-center gap-2">
                <div className="w-10 h-10 rounded flex items-center justify-center">
                  <Image src="/distrans.png" alt="Distrans" width={64} height={64} />
                </div>
                <span className="text-lg font-mono font-bold tracking-tighter">DISTRANS</span>
              </div>
            </div>
          </Link>
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