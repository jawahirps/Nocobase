import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeUp, stagger, viewport } from '../animations';

interface Car {
  id: string;
  name: string;
  year: string;
  badge: string;
  tagline: string;
  specs: string[];
  features: string[];
  price: string;
  currency: string;
  image: string;
  gallery?: string[];
  alt: string;
  highlight?: string;
}

const cars: Car[] = [
  {
    id: 'civic-rs-2019',
    name: 'Honda Civic RS',
    year: '2019',
    badge: 'GCC Spec',
    tagline: '1.5L VTEC Turbo · Crystal Black · Single Owner',
    specs: ['92,000 km', 'Auto', 'Petrol Turbo', 'GCC Spec'],
    features: [
      'Full Option',
      '4-Cyl Turbo 1.5L VTEC',
      'Crystal Black Pearl',
      'Leather Seats',
      'Keyless Entry & Remote Start',
      'Sunroof',
      'Cruise Control',
      'Reverse Camera',
      'Touch Screen',
      'Bluetooth',
      'Alloy Wheels',
      'Accident Free · Original Paint',
      'Perfect Mechanical Condition',
      'Well Maintained Interior & Exterior',
    ],
    price: '54,000',
    currency: 'AED',
    image: '/cars/civic-rs-main.jpg',
    gallery: ['/cars/civic-rs-side.jpg', '/cars/civic-rs-rear.jpg', '/cars/civic-rs-interior.jpg'],
    alt: 'Honda Civic RS 2019 Crystal Black — side view',
    highlight: 'Single Owner · Accident Free',
  },
  {
    id: 'kia-pegas-2023',
    name: 'Kia Pegas',
    year: '2023',
    badge: 'Full Option',
    tagline: '4-Cyl · GCC Spec · 64k km',
    specs: ['64,000 km', 'Auto', 'Petrol', 'GCC Spec'],
    features: [
      'Full Option with Sunroof',
      '4-Cylinder Engine',
      'Fully Automatic Transmission',
      'Cruise Control',
      'Parking Sensors',
      'Touch Screen',
      'Bluetooth',
      'Reverse Camera',
      'Accident Free',
      'Single Owner',
      'Perfect Mechanical Condition',
      'Well Maintained Interior & Exterior',
    ],
    price: '35,000',
    currency: 'AED',
    image: '/cars/kia-pegas-main.jpg',
    alt: 'Kia Pegas 2023 GCC Full Option',
    highlight: 'Single Owner · Full Option',
  },
  {
    id: 'gmc-yukon',
    name: 'GMC Yukon',
    year: '2020',
    badge: 'Just In',
    tagline: 'V8 · Crystal Black · Full Option',
    specs: ['110,000 km', 'Auto', 'V8', 'GCC Spec'],
    features: [
      '5.3L V8 Engine',
      'GCC Specification',
      'Full Option',
      'Leather Seats',
      'Touch Screen',
      'Bluetooth & Apple CarPlay',
      'Reverse Camera',
      'Alloy Wheels',
      'Well Maintained',
    ],
    price: 'Call for Price',
    currency: '',
    image: '/cars/gmc-yukon-interior.jpg',
    alt: 'GMC Yukon interior cockpit view',
  },
];

const FALLBACK_IMAGES: Record<string, string> = {
  'civic-rs-2019':
    'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=900&q=80',
  'kia-pegas-2023':
    'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=900&q=80',
  'gmc-yukon':
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10m0 0L8.5 3.5M12 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2 6.5L5 9.5L11 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarModal({ car, onClose }: { car: Car; onClose: () => void }) {
  const imgSrc = car.image;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${car.year} ${car.name} details`}
    >
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal-image">
          <img
            src={imgSrc}
            alt={car.alt}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGES[car.id] ?? imgSrc;
            }}
          />
          <span className="car-badge">{car.badge}</span>
        </div>
        <div className="modal-body">
          <div className="modal-header">
            <div>
              <span className="modal-year">{car.year}</span>
              <h2 className="modal-title">{car.name}</h2>
              <p className="modal-tagline">{car.tagline}</p>
            </div>
            <div className="modal-price-block">
              <span className="modal-currency">{car.currency}</span>
              <span className="modal-price">{car.price}</span>
            </div>
          </div>
          <div className="modal-specs-row">
            {car.specs.map((s) => (
              <span key={s} className="car-specs-pill">
                {s}
              </span>
            ))}
          </div>
          {car.highlight && <p className="modal-highlight">{car.highlight}</p>}
          <div className="modal-features">
            <h3 className="modal-features-title">Features & Highlights</h3>
            <ul className="features-list">
              {car.features.map((f) => (
                <li key={f} className="feature-item">
                  <span className="feature-check">
                    <CheckIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-actions">
            <a href="#contact" className="btn btn-primary" onClick={onClose}>
              Enquire Now
            </a>
            <a href="tel:+971-000-000-0000" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedCars() {
  const [selected, setSelected] = useState<Car | null>(null);

  return (
    <section className="section" id="inventory">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Current Listings
          </motion.span>
          <motion.h2 className="section-heading" variants={fadeUp}>
            Available <span className="gradient-text">Now</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUp}>
            Every vehicle is GCC-specified, inspected and comes with full history. Prices in AED
            — financing available.
          </motion.p>
        </motion.div>

        <motion.div
          className="cars-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {cars.map((car) => (
            <motion.article
              key={car.id}
              className="car-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="car-card-image">
                <img
                  src={car.image}
                  alt={car.alt}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      FALLBACK_IMAGES[car.id] ?? car.image;
                  }}
                />
                <span className="car-badge">{car.badge}</span>
              </div>
              <div className="car-card-body">
                <span className="car-year">{car.year}</span>
                <h3>{car.name}</h3>
                <p className="car-tagline">{car.tagline}</p>
                <div className="car-specs">
                  {car.specs.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="car-footer">
                  <div className="car-price-block">
                    {car.currency && (
                      <span className="car-currency">{car.currency}</span>
                    )}
                    <span className="car-price">{car.price}</span>
                  </div>
                  <button
                    className="car-cta"
                    onClick={() => setSelected(car)}
                    aria-label={`View details for ${car.year} ${car.name}`}
                  >
                    View Details <ArrowIcon />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <CarModal car={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
