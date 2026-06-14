/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { notFound } from 'next/navigation';
import { Header, Footer, ServiceBookingForm, FadeIn } from '@ui/components';

interface ServiceDetail {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

const servicesMap: Record<string, ServiceDetail> = {
  mot: {
    name: 'MOT Testing',
    description: 'Our MOT testing station is equipped with the latest diagnostic equipment to carry out thorough inspections. We provide a detailed advisory report highlighting any current or future issues. If your vehicle fails, we offer competitive repair rates to get you back on the road quickly. Free re-test within 10 working days.',
    price: 'From £45',
    duration: '45-60 minutes',
    icon: '🔧',
  },
  'full-service': {
    name: 'Full Service',
    description: 'Our comprehensive full service covers all major vehicle systems including engine oil and filter change, air filter, fuel filter, spark plugs, brake inspection, fluid top-ups, and a multi-point safety check. We service all makes and models to manufacturer specifications, helping to maintain your warranty and keep your car running at its best.',
    price: 'From £149',
    duration: '2-3 hours',
    icon: '🛠️',
  },
  diagnostics: {
    name: 'Diagnostics',
    description: 'Using manufacturer-level diagnostic equipment, we can read and clear fault codes, perform live data analysis, and pinpoint issues with engine management, ABS, airbag systems, and more. Our experienced technicians interpret the data to provide accurate diagnoses and cost-effective repair solutions.',
    price: 'From £59',
    duration: '30-60 minutes',
    icon: '📊',
  },
  repairs: {
    name: 'Repairs',
    description: 'From routine brake pad replacements to complex engine work, our skilled mechanics handle repairs of all sizes. We use quality OEM and aftermarket parts, and all work comes with a 12-month warranty. We provide transparent quotes before starting any work so there are no surprises.',
    price: 'From £80/hr',
    duration: 'Varies',
    icon: '⚙️',
  },
  tyres: {
    name: 'Tyre Fitting',
    description: 'We supply and fit tyres from all major brands including Michelin, Continental, Pirelli, and budget alternatives. Our service includes wheel balancing, valve replacement, and a tyre pressure check. We also offer puncture repairs and wheel alignment to ensure even tyre wear and optimal handling.',
    price: 'From £60/tyre',
    duration: '30-45 minutes',
    icon: '🚗',
  },
  bodywork: {
    name: 'Bodywork',
    description: 'Our bodywork specialists handle everything from minor scratches and dents to full panel repairs and resprays. Using colour-matching technology and quality paints, we restore your vehicle to its former glory. We also offer paintless dent removal for a quick, cost-effective solution to minor dents.',
    price: 'From £200',
    duration: '1-5 days',
    icon: '🎨',
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mb-4 text-5xl">{service.icon}</div>
            <h1 className="mb-4 text-4xl font-bold">{service.name}</h1>
            <div className="mb-6 flex flex-wrap gap-4">
              <span className="rounded-full bg-[#7c5cfc] px-5 py-2 font-semibold">
                {service.price}
              </span>
              <span className="rounded-full bg-[#18181b] px-5 py-2 text-[#a1a1aa]">
                {service.duration}
              </span>
            </div>
            <p className="leading-relaxed text-[#a1a1aa]">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="rounded-xl bg-[#18181b] p-6">
              <h2 className="mb-6 text-xl font-semibold">Book This Service</h2>
              <ServiceBookingForm
                serviceName={service.name}
                serviceSlug={slug}
              />
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
