'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoveRight, Check } from "lucide-react"

export function WaitlistForm({
  onSubmit
}: {
  onSubmit: (formData: FormData) => Promise<void>
}) {
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    await onSubmit(formData)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 10000)
  }

  return (
    <div className="max-w-md mx-auto">
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        {!isSuccess ? (
          <>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1"
            />
            <Button type="submit" className="group">
              <span className="transition-all duration-300">Join Waitlist</span>
              <div className="overflow-hidden inline-block transition-all duration-300 w-0 group-hover:w-4">
                <MoveRight className="h-4 w-4 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Button>
          </>
        ) : (
          <div className="flex-1 h-10 bg-green-500/10 text-green-500 rounded-md flex items-center justify-center gap-2">
            <Check className="h-4 w-4" />
            <span>Thanks for joining!</span>
          </div>
        )}
      </form>
    </div>
  )
} 