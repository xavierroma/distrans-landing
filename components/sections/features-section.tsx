import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Globe, Mail, MessageSquare, FileCode } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  // Subtle animation variants for a gentle fade and slight upward movement.
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden rounded-3xl bg-background/50 p-8 scroll-mt-64 snap-start"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Card 1 – Quick Setup */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Quick Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Set up in 10 min</li>
                <li>Instant toolkit integration</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2 – Dedicated Inboxes */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Dedicated Inboxes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Independent inbox per agent</li>
                <li>Unlimited addresses</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 3 – Developer API */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Developer API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Seamless REST endpoints</li>
                <li>Real-time webhooks</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 4 – Langchain Ready */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Langchain Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Built-in toolkit</li>
                <li>Langraph support</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 5 – Native Email */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Native Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Threads & attachments</li>
                <li>HTML/text via AWS SES</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 6 – Bring Your Domains */}
        <motion.div variants={cardVariants}>
          <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                Bring Your Domains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground marker:text-primary">
                <li>Custom domain integration</li>
                <li>Build brand trust</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
} 