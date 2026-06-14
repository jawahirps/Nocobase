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

interface ServiceBookingFormProps {
  serviceName: string;
  serviceSlug: string;
}

export function ServiceBookingForm({ serviceName, serviceSlug }: ServiceBookingFormProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    vehicleReg: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const inputClass = "w-full px-4 py-3 bg-[#18181b] border border-white/10 rounded-xl text-white placeholder:text-[#71717a] focus:border-[#7c5cfc] focus:outline-none transition-colors";

  const handleSubmit = async () => {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, service: serviceSlug }),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-white">Booking Submitted!</h3>
        <p className="mt-2 text-[#a1a1aa]">We&apos;ll confirm your {serviceName} appointment shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? 'bg-[#7c5cfc]' : 'bg-white/10'}`} />
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Vehicle Details</h3>
            <div>
              <label htmlFor="vehicleReg" className="block text-sm text-[#a1a1aa] mb-1.5">Registration Number</label>
              <input id="vehicleReg" className={inputClass} placeholder="e.g. AB12 CDE" value={form.vehicleReg} onChange={(e) => setForm({ ...form, vehicleReg: e.target.value })} />
            </div>
            <button onClick={() => setStep(2)} disabled={!form.vehicleReg} className="w-full py-3 bg-[#7c5cfc] hover:bg-[#6d4fe0] disabled:opacity-40 text-white font-medium rounded-xl transition-colors">
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Preferred Date & Time</h3>
            <div>
              <label htmlFor="date" className="block text-sm text-[#a1a1aa] mb-1.5">Date</label>
              <input id="date" type="date" className={inputClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm text-[#a1a1aa] mb-1.5">Time</label>
              <select id="time" className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                <option value="">Select a time</option>
                {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors">Back</button>
              <button onClick={() => setStep(3)} disabled={!form.date || !form.time} className="flex-1 py-3 bg-[#7c5cfc] hover:bg-[#6d4fe0] disabled:opacity-40 text-white font-medium rounded-xl transition-colors">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Your Details</h3>
            <div>
              <label htmlFor="name" className="block text-sm text-[#a1a1aa] mb-1.5">Full Name</label>
              <input id="name" className={inputClass} placeholder="John Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#a1a1aa] mb-1.5">Email</label>
              <input id="email" type="email" className={inputClass} placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-[#a1a1aa] mb-1.5">Phone</label>
              <input id="phone" type="tel" className={inputClass} placeholder="07123 456 789" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm text-[#a1a1aa] mb-1.5">Additional Notes</label>
              <textarea id="notes" className={inputClass} rows={3} placeholder="Any special requests..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors">Back</button>
              <button onClick={handleSubmit} disabled={!form.name || !form.email} className="flex-1 py-3 bg-[#7c5cfc] hover:bg-[#6d4fe0] disabled:opacity-40 text-white font-medium rounded-xl transition-colors">Submit Booking</button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
