/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer, ServiceBookingForm, FadeIn, SlideUp } from '@ui/components';

const availableServices = [
  { slug: 'mot', name: 'MOT Testing', icon: '🔧', price: 'From £45' },
  { slug: 'full-service', name: 'Full Service', icon: '🛠️', price: 'From £149' },
  { slug: 'diagnostics', name: 'Diagnostics', icon: '📊', price: 'From £59' },
  { slug: 'repairs', name: 'Repairs', icon: '⚙️', price: 'From £80/hr' },
  { slug: 'tyres', name: 'Tyre Fitting', icon: '🚗', price: 'From £60/tyre' },
  { slug: 'bodywork', name: 'Bodywork', icon: '🎨', price: 'From £200' },
];

export default function BookPage() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get('service');
  const service = availableServices.find((s) => s.slug === serviceSlug);

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-2xl px-4 pt-24 pb-16 sm:px-6">
        <SlideUp>
          <h1 className="mb-2 text-4xl font-bold">Book a Service</h1>
          <p className="mb-10 text-lg text-[#a1a1aa]">
            {service
              ? `Booking: ${service.name}`
              : 'Select a service to get started'}
          </p>
        </SlideUp>

        {service ? (
          <FadeIn>
            <div className="rounded-xl bg-[#18181b] p-6">
              <ServiceBookingForm
                serviceName={service.name}
                serviceSlug={service.slug}
              />
            </div>
          </FadeIn>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {availableServices.map((s) => (
              <FadeIn key={s.slug}>
                <Link
                  href={`/book?service=${s.slug}`}
                  className="flex items-center gap-4 rounded-xl bg-[#18181b] p-5 transition hover:ring-2 hover:ring-[#7c5cfc]"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-[#a1a1aa]">{s.price}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
