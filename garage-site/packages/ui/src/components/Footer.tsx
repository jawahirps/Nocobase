/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#7c5cfc] to-[#a78bfa] bg-clip-text text-transparent">
              AutoVault
            </span>
            <p className="mt-3 text-sm text-[#a1a1aa] leading-relaxed">
              Quality used cars and expert garage services. Your trusted local dealership.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { href: '/cars', label: 'Used Cars' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#a1a1aa] hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {['MOT Testing', 'Car Servicing', 'Repairs', 'Diagnostics'].map((s) => (
                <li key={s} className="text-sm text-[#a1a1aa]">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-[#a1a1aa]">
              <p>123 Motor Lane, London, UK</p>
              <a href="tel:+441234567890" className="block hover:text-white transition-colors no-underline text-[#a1a1aa]">
                📞 01234 567 890
              </a>
              <a href="mailto:info@autovault.com" className="block hover:text-white transition-colors no-underline text-[#a1a1aa]">
                ✉️ info@autovault.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-[#71717a]">
          © {new Date().getFullYear()} AutoVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
