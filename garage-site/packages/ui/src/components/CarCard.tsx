/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CarCardProps {
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel: string;
  imageUrl?: string;
  status: 'available' | 'reserved' | 'sold';
}

export function CarCard({ slug, make, model, year, price, mileage, transmission, fuel, imageUrl, status }: CarCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/cars/${slug}`} className="block group no-underline">
        <div className="bg-[#18181b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#7c5cfc]/30 transition-all duration-300">
          <div className="relative aspect-[16/10] bg-[#27272a] overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${year} ${make} ${model}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#71717a]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.2-3.3C13 5.6 12 5 11 5H7c-1 0-2 .6-2.8 1.7C3.3 8 2 10 2 10s-2 .5-2 2.5V16c0 .6.4 1 1 1h2" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="16.5" cy="17.5" r="2.5" />
                </svg>
              </div>
            )}
            {status !== 'available' && (
              <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
                status === 'reserved' ? 'bg-[#f59e0b]/90 text-black' : 'bg-[#ef4444]/90 text-white'
              }`}>
                {status === 'reserved' ? 'Reserved' : 'Sold'}
              </div>
            )}
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">{make} {model}</h3>
                <p className="text-sm text-[#71717a] mt-0.5">{year} · {mileage.toLocaleString()} miles</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-[#7c5cfc]">£{price.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <span className="px-2.5 py-1 text-xs bg-white/5 text-[#a1a1aa] rounded-md">{transmission}</span>
              <span className="px-2.5 py-1 text-xs bg-white/5 text-[#a1a1aa] rounded-md">{fuel}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
