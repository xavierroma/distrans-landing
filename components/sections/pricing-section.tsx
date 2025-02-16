import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

/**
 * Computes the cumulative cost using tiered (income-tax style) pricing.
 * - First 50k emails: $2.00 per 1k
 * - Next 50k emails: $1.85 per 1k
 * - Next 150k emails: $1.70 per 1k
 * - Next 450k emails: $1.55 per 1k
 * - Beyond 700k emails: $1.40 per 1k
 */
function getCumulativeCost(emails: number): string {
  let remaining = emails;
  let cost = 0;

  const tiers = [
    { limit: 0, rate: 2.00 },
    { limit: 50000, rate: 2.00 },
    { limit: 100000, rate: 1.85 },
    { limit: 250000, rate: 1.70 },
    { limit: 700000, rate: 1.55 },
    { limit: Infinity, rate: 1.40 }
  ];

  for (const tier of tiers) {
    if (remaining <= 0) break;
    const emailsInTier = Math.min(remaining, tier.limit);
    cost += (emailsInTier / 1000) * tier.rate;
    remaining -= emailsInTier;
  }

  return cost.toFixed(2);
}

export function PricingSection() {
  // Define snap points along with the marginal "price per 1k" at that point.
  const snapDetails = [
    { emails: 1000, rate: 2.00 },
    { emails: 50000, rate: 2.00 },
    { emails: 100000, rate: 1.85 },
    { emails: 250000, rate: 1.70 },
    { emails: 700000, rate: 1.55 },
    { emails: 1000000, rate: 1.40 }
  ];
  // Use slider index (ranges from 0 to snapDetails.length - 1) to get the data.
  const [snapIndex, setSnapIndex] = useState(0);
  const { emails, rate } = snapDetails[snapIndex];
  const estimatedCost = getCumulativeCost(emails);

  return (
    <section id="pricing" className="w-full p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Combined Pricing Calculator Card (Slider + Labels) */}
        <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Pay per email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <label htmlFor="emailUsage" className="text-sm font-medium">
                Monthly Email Volume: {emails.toLocaleString()} emails
              </label>
              <Slider
                id="emailUsage"
                value={[snapIndex]}
                onValueChange={(value: number[]) => setSnapIndex(value[0])}
                step={1}
                min={0}
                max={snapDetails.length - 1}
                className="w-full"
              />
              {/* Snap Point Markers */}
              <div className="flex justify-between w-full text-xs font-medium text-muted-foreground">
                <span>1k</span>
                <span>50k</span>
                <span>100k</span>
                <span>250k</span>
                <span>700k</span>
                <span>1M</span>
              </div>
              <div className="text-lg font-bold">
                Estimated Cost: ${estimatedCost}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                ${rate / 1000} per email
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Included Features Card */}
        <Card className="group bg-card/50 backdrop-blur-lg drop-shadow-lg transition-all duration-300 border border-transparent hover:bg-primary/10 hover:border-primary p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Included</CardTitle>
          </CardHeader>
          <CardContent>
            <ul role="list" className="list-disc marker:text-primary pl-6 space-y-2">
              <li>Unlimited inboxes</li>
              <li>
                Free 30 days data retention{" "}
                <span className="text-sm italic text-muted-foreground">
                  then $0.79/GB/month
                </span>
              </li>
              <li>
                1 domain{" "}
                <span className="text-sm italic text-muted-foreground">
                  extra as add-on
                </span>
              </li>
              <li>
                Shared IP{" "}
                <span className="text-sm italic text-muted-foreground">
                  dedicated as add-on
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 