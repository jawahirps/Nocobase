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

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  whatsappNumber?: string;
}

export function CTA({ title, description, buttonText, buttonHref, whatsappNumber }: CTAProps) {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#7c5cfc]/20 to-[#a78bfa]/10 border border-[#7c5cfc]/20 rounded-3xl p-12 sm:p-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-[#a1a1aa] max-w-xl mx-auto">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="px-8 py-3.5 bg-[#7c5cfc] hover:bg-[#6d4fe0] text-white font-medium rounded-full transition-all duration-200 no-underline"
          >
            {buttonText}
          </Link>
          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#25d366] font-medium rounded-full border border-[#25d366]/20 transition-all duration-200 no-underline"
            >
              WhatsApp Us
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
