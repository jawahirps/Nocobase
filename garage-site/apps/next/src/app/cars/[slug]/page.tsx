/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { notFound } from 'next/navigation';
import { Header, Footer, CarGallery, CTA, FadeIn } from '@ui/components';
import EnquiryForm from './enquiry-form';

interface CarDetail {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel: string;
  bodyType: string;
  description: string;
  images: string[];
}

const carsMap: Record<string, CarDetail> = {
  'bmw-3-series-2024': {
    make: 'BMW', model: '3 Series', year: 2024, price: 28995, mileage: 12000,
    transmission: 'Automatic', fuel: 'Petrol', bodyType: 'Saloon',
    description: 'This stunning 2024 BMW 3 Series combines dynamic performance with refined luxury. Finished in metallic grey with a full black leather interior, it features BMW\'s latest iDrive infotainment system, adaptive LED headlights, and a suite of driver assistance technologies. One owner from new with full BMW service history.',
    images: [],
  },
  'mercedes-a-class-2023': {
    make: 'Mercedes', model: 'A-Class', year: 2023, price: 24500, mileage: 18000,
    transmission: 'Automatic', fuel: 'Diesel', bodyType: 'Hatchback',
    description: 'A well-maintained 2023 Mercedes A-Class with the efficient diesel engine. Features MBUX infotainment, ambient lighting, heated seats, and a reversing camera. Low mileage with full Mercedes service history and remaining manufacturer warranty.',
    images: [],
  },
  'audi-a4-2023': {
    make: 'Audi', model: 'A4', year: 2023, price: 26750, mileage: 15000,
    transmission: 'Manual', fuel: 'Petrol', bodyType: 'Saloon',
    description: 'An elegant 2023 Audi A4 in Navarra Blue with the S-Line exterior package. Equipped with Audi\'s Virtual Cockpit, MMI Navigation Plus, three-zone climate control, and sport suspension. Immaculate condition inside and out.',
    images: [],
  },
  'ford-focus-2022': {
    make: 'Ford', model: 'Focus', year: 2022, price: 16995, mileage: 25000,
    transmission: 'Manual', fuel: 'Petrol', bodyType: 'Hatchback',
    description: 'A practical and fun-to-drive 2022 Ford Focus in ST-Line trim. Features Ford\'s SYNC 3 infotainment, LED headlights, sport seats, and rear parking sensors. Excellent fuel economy and low running costs make this an ideal daily driver.',
    images: [],
  },
  'volkswagen-golf-2023': {
    make: 'Volkswagen', model: 'Golf', year: 2023, price: 22400, mileage: 14000,
    transmission: 'Automatic', fuel: 'Diesel', bodyType: 'Hatchback',
    description: 'The benchmark compact hatchback. This 2023 Volkswagen Golf R-Line features the efficient TDI diesel engine with DSG automatic gearbox. Includes digital cockpit, adaptive cruise control, wireless Apple CarPlay, and front assist with city emergency braking.',
    images: [],
  },
  'toyota-corolla-2022': {
    make: 'Toyota', model: 'Corolla', year: 2022, price: 19750, mileage: 20000,
    transmission: 'Automatic', fuel: 'Hybrid', bodyType: 'Hatchback',
    description: 'An eco-friendly 2022 Toyota Corolla Hybrid offering exceptional fuel economy and Toyota\'s legendary reliability. Features include a JBL premium sound system, head-up display, adaptive cruise control, and bi-tone paint. Low emissions make it ideal for city driving.',
    images: [],
  },
};

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = carsMap[slug];

  if (!car) {
    notFound();
  }

  const title = `${car.year} ${car.make} ${car.model}`;

  const specs = [
    { label: 'Year', value: String(car.year) },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} miles` },
    { label: 'Transmission', value: car.transmission },
    { label: 'Fuel', value: car.fuel },
    { label: 'Body Type', value: car.bodyType },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <FadeIn>
          <CarGallery images={car.images} alt={title} />
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeIn>
              <h1 className="text-3xl font-bold">{title}</h1>
              <span className="mt-3 inline-block rounded-full bg-[#7c5cfc] px-5 py-2 text-lg font-bold">
                £{car.price.toLocaleString()}
              </span>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-[#18181b] p-4 text-center"
                  >
                    <p className="text-sm text-[#a1a1aa]">{s.label}</p>
                    <p className="mt-1 font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="mb-3 text-xl font-semibold">Description</h2>
                <p className="leading-relaxed text-[#a1a1aa]">
                  {car.description}
                </p>
              </div>

              <a
                href="#"
                className="mt-8 inline-block rounded-lg bg-[#7c5cfc] px-8 py-3 font-semibold text-white transition hover:bg-[#6a4ce0]"
              >
                Reserve This Car
              </a>
            </FadeIn>
          </div>

          <aside>
            <FadeIn>
              <div className="rounded-xl bg-[#18181b] p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Enquire About This Car
                </h3>
                <EnquiryForm carTitle={title} carSlug={slug} />
              </div>
            </FadeIn>
          </aside>
        </div>

        <div className="mt-16">
          <CTA
            title="Looking for Something Else?"
            buttonText="Browse All Cars"
            buttonHref="/cars"
            whatsapp="441234567890"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
