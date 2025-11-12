"use client";
import { useState, useTransition } from "react";

async function sendContact(data: FormData) {
  "use server";
  // In real deployment, send email or store in DB.
  const payload = Object.fromEntries(data.entries());
  console.log("Contact submission", payload);
  return { ok: true };
}

export const metadata = {
  title: "Contact",
  description: "Collaborations, licensing, placements.",
};

export default function ContactPage() {
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="font-display text-4xl mb-6">Contact</h1>
      <form
        action={(fd) =>
          startTransition(async () => {
            await sendContact(fd);
            setSent(true);
          })
        }
        className="space-y-4 glass p-6 rounded-xl border border-teal/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-cloud/70">Name</label>
            <input name="name" required className="w-full mt-1 px-3 py-2 rounded-md bg-night border border-teal/20" />
          </div>
          <div>
            <label className="text-sm text-cloud/70">Email</label>
            <input type="email" name="email" required className="w-full mt-1 px-3 py-2 rounded-md bg-night border border-teal/20" />
          </div>
        </div>
        <div>
          <label className="text-sm text-cloud/70">Purpose</label>
          <select name="purpose" className="w-full mt-1 px-3 py-2 rounded-md bg-night border border-teal/20">
            <option>Collaboration</option>
            <option>Licensing</option>
            <option>Placement</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-cloud/70">Message</label>
          <textarea name="message" rows={5} className="w-full mt-1 px-3 py-2 rounded-md bg-night border border-teal/20" />
        </div>
        <button disabled={pending} className="px-4 py-2 rounded-md bg-teal/20 border border-teal/40">
          {pending ? "Sending..." : "Send"}
        </button>
        {sent && <div className="text-teal text-sm">Sent. We’ll be in touch.</div>}
      </form>
    </div>
  );
}
