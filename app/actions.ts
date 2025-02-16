'use server'

import { PostHog } from "posthog-node";

const posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
})

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')
  console.log('Joined waitlist:', email)
  posthog.capture({
    distinctId: email as string,
    event: 'joined_waitlist',
    properties: { email },
  });
  await posthog.flush()
}