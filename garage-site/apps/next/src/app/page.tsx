/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import Link from 'next/link';
import {
  Header,
  HeroSection,
  Footer,
  CTA,
  ServiceCard,
  CarCard,
  FadeIn,
  SlideUp,
} from '@ui/components';

const featuredCars = [
  {
    slug: 'bmw-3-series-2024',
    make: 'BMW',
    model: '3 Series',
    year: 2024,
    price: 28995,
    mileage: 12000,
    transmission: 'Auto' as const,
    fuel: 'Petrol' as const,
    status: 'available' as const,
  },
  {
    slug: 'mercedes-a-class-2023',
    make: 'Mercedes',
    model: 'A-Class',
    year: 2023,
    price: 24500,
    mileage: 18000,
    transmission: 'Auto' as const,
    fuel: 'Diesel' as const,
    status: 'available' as const,
  },
  {
    slug: 'audi-a4-2023',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    price: 26750,
    mileage: 15000,
    transmission: 'Manual' as const,
    fuel: 'Petrol' as const,
    status: 'available' as const,
  },
];

const services = [
  { slug: 'mot', name: 'MOT Testing', icon: '🔧', price: 'From £45', description: 'Full MOT testing and advisory service.' },
  { slug: 'full-service', name: 'Full Service', icon: '🛠️', price: 'From £149', description: 'Comprehensive vehicle servicing.' },
  { slug: 'diagnostics', name: 'Diagnostics', icon: '📊', price: 'From £59', description: 'Advanced diagnostic fault finding.' },
  { slug: 'repairs', name: 'Repairs', icon: '⚙️', price: 'From £80/hr', description: 'General and specialist repairs.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="pt-24">
        <HeroSection />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="mb-2 text-center text-3xl font-bold">Featured Cars</h2>
            <p className="mb-12 text-center text-[#a1a1aa]">
              Hand-picked vehicles ready to drive away
            </p>
          </SlideUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => (
              <FadeIn key={car.slug}>
                <CarCard {...car} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cars"
              className="inline-block rounded-lg bg-[#7c5cfc] px-8 py-3 font-semibold text-white transition hover:bg-[#6a4ce0]"
            >
              View All Cars
            </Link>
          </div>
        </section>

        <section className="bg-[#18181b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SlideUp>
              <h2 className="mb-2 text-center text-3xl font-bold">Our Services</h2>
              <p className="mb-12 text-center text-[#a1a1aa]">
                Professional garage services you can trust
              </p>
            </SlideUp>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <FadeIn key={service.slug}>
                  <ServiceCard {...service} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Find Your Next Car?"
          buttonText="Browse All Cars"
          buttonHref="/cars"
          whatsapp="441234567890"
        />
      </main>
      <Footer />
    </div>
  );
}
