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

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export function ServiceCard({ slug, name, description, price, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/services/${slug}`} className="block no-underline">
        <div className="bg-[#18181b] border border-white/5 hover:border-[#7c5cfc]/30 rounded-2xl p-6 transition-all duration-300 h-full">
          <div className="w-12 h-12 bg-[#7c5cfc]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#7c5cfc] font-semibold">{price}</span>
            <span className="text-xs text-[#71717a] group-hover:text-[#a78bfa] transition-colors">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
