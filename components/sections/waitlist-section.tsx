import { WaitlistForm } from "../waitlist-form";

export function WaitlistSection({ onSubmit }: { onSubmit: (formData: FormData) => Promise<void> }) {
  return (
    <section
      id="waitlist"
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Request Access</h2>
      <div className="w-full max-w-md">
        <WaitlistForm onSubmit={onSubmit} />
      </div>
    </section>
  );
} 