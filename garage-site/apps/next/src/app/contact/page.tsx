/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Header, Footer, ContactForm, FadeIn, SlideUp } from '@ui/components';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <SlideUp>
          <h1 className="mb-2 text-4xl font-bold">Contact Us</h1>
          <p className="mb-12 text-lg text-[#a1a1aa]">
            Get in touch — we&apos;d love to hear from you
          </p>
        </SlideUp>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="mb-3 text-xl font-semibold">Address</h2>
                <p className="text-[#a1a1aa]">
                  AutoVault Ltd
                  <br />
                  42 Industrial Estate
                  <br />
                  Birmingham, B1 2AB
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Phone</h2>
                <a
                  href="tel:+441234567890"
                  className="text-[#7c5cfc] transition hover:underline"
                >
                  01234 567 890
                </a>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Email</h2>
                <a
                  href="mailto:info@autovault.co.uk"
                  className="text-[#7c5cfc] transition hover:underline"
                >
                  info@autovault.co.uk
                </a>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Opening Hours</h2>
                <div className="space-y-1 text-[#a1a1aa]">
                  <p>Monday &ndash; Friday: 8:00am &ndash; 6:00pm</p>
                  <p>Saturday: 9:00am &ndash; 4:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://wa.me/441234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-xl bg-[#18181b] p-6">
              <h2 className="mb-6 text-xl font-semibold">Send Us a Message</h2>
              <ContactForm />
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-16">
            <h2 className="mb-4 text-xl font-semibold">Find Us</h2>
            <div
              className="flex h-80 items-center justify-center rounded-xl bg-[#18181b] text-[#a1a1aa]"
              aria-label="Map placeholder"
              role="img"
            >
              <p>Google Maps embed will appear here</p>
            </div>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
