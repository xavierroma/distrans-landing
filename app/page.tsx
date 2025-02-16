"use client"
import { FeaturesSection } from "@/components/sections/features-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { motion } from "framer-motion";
import { joinWaitlist } from "./actions";

export default function Home() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 sm:pt-24 font-[family-name:var(--font-geist-sans)] font-mono overflow-y-scroll h-auto md:h-screen snap-y md:snap-mandatory">
      <Header />

      <main className="relative flex flex-col gap-16 items-center sm:items-start p-2 max-w-6xl mx-auto">
        <motion.div
          className="snap-start md:min-h-screen flex items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          className="snap-start md:min-h-screen flex items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FeaturesSection />
        </motion.div>

        <motion.div
          className="snap-start md:min-h-screen flex items-center  w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <PricingSection />
        </motion.div>

        <motion.div
          className="snap-start md:min-h-screen flex items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WaitlistSection onSubmit={joinWaitlist} />
        </motion.div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}
