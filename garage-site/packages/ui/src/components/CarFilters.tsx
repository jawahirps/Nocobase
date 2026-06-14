/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Filters {
  make: string;
  minPrice: string;
  maxPrice: string;
  transmission: string;
  fuel: string;
  sort: string;
}

interface CarFiltersProps {
  onFilter: (filters: Filters) => void;
  makes: string[];
}

export function CarFilters({ onFilter, makes }: CarFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    make: '',
    minPrice: '',
    maxPrice: '',
    transmission: '',
    fuel: '',
    sort: 'newest',
  });

  const update = useCallback((key: keyof Filters, value: string) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilter(next);
  }, [filters, onFilter]);

  const selectClass = "w-full px-3 py-2.5 bg-[#18181b] border border-white/10 rounded-xl text-sm text-white focus:border-[#7c5cfc] focus:outline-none transition-colors appearance-none";
  const inputClass = "w-full px-3 py-2.5 bg-[#18181b] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#71717a] focus:border-[#7c5cfc] focus:outline-none transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#18181b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6"
    >
      <h3 className="text-sm font-semibold text-white mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="filter-make" className="block text-xs text-[#71717a] mb-1.5">Make</label>
          <select id="filter-make" className={selectClass} value={filters.make} onChange={(e) => update('make', e.target.value)}>
            <option value="">All Makes</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="filter-min" className="block text-xs text-[#71717a] mb-1.5">Min Price</label>
            <input id="filter-min" type="number" placeholder="£0" className={inputClass} value={filters.minPrice} onChange={(e) => update('minPrice', e.target.value)} />
          </div>
          <div>
            <label htmlFor="filter-max" className="block text-xs text-[#71717a] mb-1.5">Max Price</label>
            <input id="filter-max" type="number" placeholder="Any" className={inputClass} value={filters.maxPrice} onChange={(e) => update('maxPrice', e.target.value)} />
          </div>
        </div>

        <div>
          <label htmlFor="filter-transmission" className="block text-xs text-[#71717a] mb-1.5">Transmission</label>
          <select id="filter-transmission" className={selectClass} value={filters.transmission} onChange={(e) => update('transmission', e.target.value)}>
            <option value="">Any</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter-fuel" className="block text-xs text-[#71717a] mb-1.5">Fuel Type</label>
          <select id="filter-fuel" className={selectClass} value={filters.fuel} onChange={(e) => update('fuel', e.target.value)}>
            <option value="">Any</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter-sort" className="block text-xs text-[#71717a] mb-1.5">Sort By</label>
          <select id="filter-sort" className={selectClass} value={filters.sort} onChange={(e) => update('sort', e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="mileage-asc">Mileage: Low to High</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}
