'use server'

import posthog from "posthog-js"

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')
  console.log('Joined waitlist:', email)
  posthog.capture('joined_waitlist', { email })
}