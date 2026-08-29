/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

'use client';

import { useState } from 'react';

export default function EnquiryForm({
  carTitle,
  carSlug,
}: {
  carTitle: string;
  carSlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, car: carSlug }),
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="py-6 text-center text-green-400">
        Thanks! We&apos;ll be in touch about the {carTitle}.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        aria-label="Your Name"
        className="w-full rounded-lg bg-[#09090b] px-4 py-3 text-white placeholder-[#a1a1aa] outline-none ring-1 ring-[#27272a] focus:ring-[#7c5cfc]"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        aria-label="Email Address"
        className="w-full rounded-lg bg-[#09090b] px-4 py-3 text-white placeholder-[#a1a1aa] outline-none ring-1 ring-[#27272a] focus:ring-[#7c5cfc]"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        required
        aria-label="Your Message"
        className="w-full rounded-lg bg-[#09090b] px-4 py-3 text-white placeholder-[#a1a1aa] outline-none ring-1 ring-[#27272a] focus:ring-[#7c5cfc]"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-[#7c5cfc] py-3 font-semibold text-white transition hover:bg-[#6a4ce0]"
      >
        Send Enquiry
      </button>
    </form>
  );
}
