import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GradientCanvas } from "../gradient-canvas";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-background/50 p-8">
      <div className="absolute inset-0">
        <GradientCanvas />
      </div>

      <div className="relative flex flex-col gap-8 items-center sm:items-start min-h-[calc(100vh-300px)]">
        <Badge variant="secondary" className="flex items-center gap-2 -mb-4 h-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Early access
        </Badge>
        <h1
          className="font-sans text-[clamp(3.2rem,_1.4rem_+_7vw,_7.5rem)]
          font-semibold leading-[clamp(3.8rem,_2.5rem_+_4.5vw,_7rem)] 
          -tracking-4 text-balance !text-[clamp(3.2rem,_1.4rem_+_7vw,_7.5rem)] 
          !leading-[0.85] md:!leading-[clamp(3.8rem,_2.5rem_+_4.5vw,_7rem)]"
        >Email Inbox For AI Agents</h1>
        <p className="text-lg">
          Distrans is a no-nonsense email inbox built for AI agents in mind.
          <br />
          Ease of setup, simple and predictable usage-based pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button type="submit" className="w-full group flex items-center justify-center gap-1" asChild>
            <Link href="#waitlist">
              <span className="transition-all duration-300">Start now</span>
              <div className="overflow-hidden inline-block transition-all duration-300 w-0 group-hover:w-4">
                <MoveRight className="h-4 w-4 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          </Button>
          <Button type="submit" variant="secondary" className="w-full group flex items-center justify-center gap-1" asChild>
            <Link href="/docs">
              <span className="transition-all duration-300">View Docs</span>
              <div className="overflow-hidden inline-block transition-all duration-300 w-0 group-hover:w-4">
                <MoveRight className="h-4 w-4 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          </Button>
        </div>
        <div className="w-full mt-12">
          <p className="text-sm text-muted-foreground text-center mb-6">Works with</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex flex-row w-full justify-center items-center gap-8 md:gap-12 overflow-x-auto whitespace-nowrap">
              <Image
                src="/gmail.png"
                alt="Gmail"
                width={64}
                height={64}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <Image
                src="/apple-mail.png"
                alt="Apple Mail"
                width={64}
                height={64}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <Image
                src="/outlook.png"
                alt="Outlook"
                width={64}
                height={64}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <Image
                src="/langchain.svg"
                alt="Langchain"
                width={96}
                height={64}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <Image
                src="/zoho.svg"
                alt="Zoho"
                width={96}
                height={64}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 