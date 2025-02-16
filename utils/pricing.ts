/**
 * Calculates the cost-per-email based on the total email count, using a quadratic interpolation.
 *
 * Our pricing algorithm is designed to be startup-friendly:
 *   - For email volumes up to 50,000, the cost is fixed at 0.002 USD per email.
 *   - For volumes between 50,000 and 2,000,000, we apply a quadratic interpolation that
 *     decreases the cost more rapidly initially, then levels off as it approaches the minimum.
 *   - For email volumes above 2,000,000, the cost remains constant at 0.0005 USD per email.
 *
 * This formulation provides a more aggressive initial price reduction to benefit growing startups,
 * while maintaining a smooth transition to the minimum price point.
 *
 * @param {number} emailCount - The total number of emails processed.
 * @returns {number} - The computed cost per email in USD.
 */
export function calculateEmailCost(emailCount: number): number {
  const baseVolume = 50000;         // Constant region threshold: first 50k emails
  const maxVolume = 2000000;        // Upper threshold where the minimum price is reached
  const baseCost = 0.002;           // Initial cost per email (USD) up to baseVolume
  const minCost = 0.0005;           // Minimum cost per email (USD) beyond maxVolume

  if (emailCount <= baseVolume) {
    // For email volumes up to 50k, the cost remains at the initial fixed price.
    return baseCost;
  }
  if (emailCount >= maxVolume) {
    // For email volumes at or above 2M, we cap the cost at the minimum price.
    return minCost;
  }

  // For email counts between 50k and 2M, we apply a quadratic reduction:
  // This provides a steeper initial decrease in price, benefiting smaller volumes more
  const fraction = (emailCount - baseVolume) / (maxVolume - baseVolume);
  const quadraticFraction = fraction * fraction;
  return baseCost - (baseCost - minCost) * (2 * fraction - quadraticFraction);
} 