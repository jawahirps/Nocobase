/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Header, Footer, ServiceCard, CTA, FadeIn, SlideUp } from '@ui/components';

const services = [
  { slug: 'mot', name: 'MOT Testing', icon: '🔧', price: 'From £45', description: 'Full MOT testing with detailed advisory report.' },
  { slug: 'full-service', name: 'Full Service', icon: '🛠️', price: 'From £149', description: 'Comprehensive vehicle servicing to manufacturer standards.' },
  { slug: 'diagnostics', name: 'Diagnostics', icon: '📊', price: 'From £59', description: 'Advanced diagnostic fault finding and engine management.' },
  { slug: 'repairs', name: 'Repairs', icon: '⚙️', price: 'From £80/hr', description: 'General mechanical and specialist repairs.' },
  { slug: 'tyres', name: 'Tyre Fitting', icon: '🚗', price: 'From £60/tyre', description: 'Supply and fit quality tyres from leading brands.' },
  { slug: 'bodywork', name: 'Bodywork', icon: '🎨', price: 'From £200', description: 'Dent removal, scratch repair, and panel respray.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <SlideUp>
          <h1 className="mb-2 text-4xl font-bold">Garage Services</h1>
          <p className="mb-12 text-lg text-[#a1a1aa]">
            Professional servicing, repairs, and MOT testing
          </p>
        </SlideUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.slug}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <CTA
            title="Need a Service?"
            buttonText="Book Now"
            buttonHref="/book"
            whatsapp="441234567890"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
