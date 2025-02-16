import { WaitlistForm } from "../waitlist-form";

export function WaitlistSection({ onSubmit }: { onSubmit: (formData: FormData) => Promise<void> }) {
  return (
    <section
      id="waitlist"
      className="min-h-screen w-full p-8 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Join the waitlist</h2>
      <div className="w-full max-w-md">
        <WaitlistForm onSubmit={onSubmit} />
      </div>
    </section>
  );
} 