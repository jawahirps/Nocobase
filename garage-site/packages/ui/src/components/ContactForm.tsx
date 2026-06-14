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
import { motion } from 'framer-motion';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const inputClass = "w-full px-4 py-3 bg-[#18181b] border border-white/10 rounded-xl text-white placeholder:text-[#71717a] focus:border-[#7c5cfc] focus:outline-none transition-colors";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, source: 'contact-page' }),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="text-4xl mb-4">📨</div>
        <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
        <p className="mt-2 text-[#a1a1aa]">We&apos;ll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm text-[#a1a1aa] mb-1.5">Name</label>
        <input id="contact-name" className={inputClass} required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm text-[#a1a1aa] mb-1.5">Email</label>
        <input id="contact-email" type="email" className={inputClass} required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm text-[#a1a1aa] mb-1.5">Phone (optional)</label>
        <input id="contact-phone" type="tel" className={inputClass} placeholder="07123 456 789" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm text-[#a1a1aa] mb-1.5">Message</label>
        <textarea id="contact-message" className={inputClass} required rows={4} placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" className="w-full py-3 bg-[#7c5cfc] hover:bg-[#6d4fe0] text-white font-medium rounded-xl transition-colors">
        Send Message
      </button>
    </form>
  );
}
