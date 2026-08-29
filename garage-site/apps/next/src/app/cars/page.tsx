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
import { Header, Footer, CarFilters, CarGrid, FadeIn, SlideUp } from '@ui/components';

interface Car {
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Auto' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  status: 'available' | 'sold' | 'reserved';
}

const allCars: Car[] = [
  { slug: 'bmw-3-series-2024', make: 'BMW', model: '3 Series', year: 2024, price: 28995, mileage: 12000, transmission: 'Auto', fuel: 'Petrol', status: 'available' },
  { slug: 'mercedes-a-class-2023', make: 'Mercedes', model: 'A-Class', year: 2023, price: 24500, mileage: 18000, transmission: 'Auto', fuel: 'Diesel', status: 'available' },
  { slug: 'audi-a4-2023', make: 'Audi', model: 'A4', year: 2023, price: 26750, mileage: 15000, transmission: 'Manual', fuel: 'Petrol', status: 'available' },
  { slug: 'ford-focus-2022', make: 'Ford', model: 'Focus', year: 2022, price: 16995, mileage: 25000, transmission: 'Manual', fuel: 'Petrol', status: 'available' },
  { slug: 'volkswagen-golf-2023', make: 'Volkswagen', model: 'Golf', year: 2023, price: 22400, mileage: 14000, transmission: 'Auto', fuel: 'Diesel', status: 'available' },
  { slug: 'toyota-corolla-2022', make: 'Toyota', model: 'Corolla', year: 2022, price: 19750, mileage: 20000, transmission: 'Auto', fuel: 'Hybrid', status: 'available' },
];

const makes = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Volkswagen', 'Toyota'];

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(allCars);

  const handleFilter = (filters: Record<string, string | number | undefined>) => {
    let result = allCars;

    if (filters.make) {
      result = result.filter((c) => c.make === filters.make);
    }
    if (filters.transmission) {
      result = result.filter((c) => c.transmission === filters.transmission);
    }
    if (filters.fuel) {
      result = result.filter((c) => c.fuel === filters.fuel);
    }
    if (filters.minPrice) {
      result = result.filter((c) => c.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((c) => c.price <= Number(filters.maxPrice));
    }

    setFilteredCars(result);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <SlideUp>
          <h1 className="mb-2 text-4xl font-bold">Used Cars</h1>
          <p className="mb-10 text-lg text-[#a1a1aa]">
            Browse our selection of quality used vehicles
          </p>
        </SlideUp>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-72">
            <FadeIn>
              <CarFilters makes={makes} onFilter={handleFilter} />
            </FadeIn>
          </aside>
          <div className="flex-1">
            <FadeIn>
              <CarGrid cars={filteredCars} />
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
