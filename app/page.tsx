import { GradientCanvas } from "@/components/gradient-canvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WaitlistForm } from "@/components/waitlist-form";
import { BarChart2, Code, MoveRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function joinWaitlist(formData: FormData) {
  'use server'

  const email = formData.get('email')
  console.log('Joined waitlist:', email)
}

export default function Home() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 sm:pt-24 font-[family-name:var(--font-geist-sans)] font-mono snap-y ">
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
            <a href="#features" className=" text-sm hover:text-primary transition-colors">  FEATURES </a>
            <a href="#pricing" className=" text-sm hover:text-primary transition-colors">
              PRICING
            </a>
            <a href="/docs" className="text-sm hover:text-primary transition-colors">
              DOCS
            </a>
          </div>
          <Button className="group flex items-center justify-center gap-1" asChild>
            <Link href="#waitlist">
              <span className="transition-all duration-300">Join Waitlist</span>
              <div className="overflow-hidden inline-block transition-all duration-300 w-0 group-hover:w-4">
                <MoveRight className="h-4 w-4 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          </Button>
        </nav>
      </header>

      <main className="relative flex flex-col gap-16 items-center sm:items-start p-2 rounded-lg backdrop-blur-sm max-w-6xl mx-auto">
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
            <p
              className="text-lg"
            >
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

        <section id="features" className="relative w-full overflow-hidden rounded-3xl bg-background/50 p-8 scroll-mt-64 snap-start">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          {/* <div className="absolute inset-0">
              <GradientCanvas colors={
                [
                  "hsl(220 70% 50%)",
                  "hsl(160 60% 45%)",
                ]
              } />
            </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 hover:bg-card/70 focus:bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap size={24} />
                  Easy Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                  <li>Setup in under 10 minutes.</li>
                  <li>Provision new agent's email inbox in 1 API call.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 hover:bg-card/70 focus:bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={24} />
                  Developer-First API & Tooling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                  <li>RESTful API with comprehensive documentation.</li>
                  <li>Real-time webhooks.</li>
                  <li>Langchain-compatible toolkit.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 hover:bg-card/70 focus:bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 size={24} />
                  Transparent, Cost-Effective Scaling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                  <li>Integrated per-transaction pricing with no hidden fees.</li>
                  <li>Scale seamlessly as your usage grows.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="relative w-full overflow-hidden rounded-3xl bg-background/50 p-8 scroll-mt-64 snap-start">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 hover:bg-card/70 focus:bg-card/70 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul role="list" className="list-disc marker:text-primary">
                  <li>Unlimited inboxes</li>
                  <li>
                    Free 30 days data retention <span className="text-sm italic">then $0.79/GB/month</span>
                  </li>
                  <li>
                    Shared IP <span className="text-sm italic">dedicated as add-on</span>
                  </li>
                  <li>1 domain <span className="text-sm italic">extra as add-on</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 hover:bg-card/70 focus:bg-card/70 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Pay per email</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Monthly Emails</TableHead>
                      <TableHead className="text-right">Price per 1k</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>First 50k</TableCell>
                      <TableCell className="text-right">$2.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>From 50k</TableCell>
                      <TableCell className="text-right">$1.85</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>From 100k</TableCell>
                      <TableCell className="text-right">$1.70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>From 250k</TableCell>
                      <TableCell className="text-right">$1.55</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>700k+</TableCell>
                      <TableCell className="text-right">$1.40</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="waitlist" className="relative w-full overflow-hidden rounded-3xl bg-background/50 p-8 scroll-mt-64 snap-start">
          <h2 className="text-3xl font-bold mb-8 text-center">Join the Waitlist</h2>
          <WaitlistForm onSubmit={joinWaitlist} />
        </section>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
