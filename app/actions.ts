'use server'

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')
  console.log('Joined waitlist:', email)
}