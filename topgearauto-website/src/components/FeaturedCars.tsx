import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../animations';

const cars = [
  {
    name: '2022 BMW M4 Competition',
    specs: ['12.4k mi', 'Auto', 'Petrol'],
    price: '$72,900',
    badge: 'Just Arrived',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
    alt: 'Blue BMW M4 Competition coupe',
  },
  {
    name: '2023 Tesla Model 3 Perf.',
    specs: ['8.1k mi', 'Auto', 'Electric'],
    price: '$46,500',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80',
    alt: 'White Tesla Model 3 parked outdoors',
  },
  {
    name: '2021 Ford Mustang GT',
    specs: ['21.7k mi', 'Manual', 'Petrol'],
    price: '$41,200',
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=900&q=80',
    alt: 'Red Ford Mustang GT on the road',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10m0 0L8.5 3.5M12 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeaturedCars() {
  return (
    <section className="section" id="inventory">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="section-eyebrow" variants={fadeUp}>Featured Inventory</motion.span>
          <motion.h2 className="section-heading" variants={fadeUp}>
            This Week&apos;s <span className="gradient-text">Top Picks</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUp}>
            Every vehicle passes our 150-point inspection and comes with a full history report,
            warranty coverage, and a 7-day money-back guarantee.
          </motion.p>
        </motion.div>

        <motion.div className="cars-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {cars.map((car) => (
            <motion.article
              key={car.name}
              className="car-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="car-card-image">
                <img src={car.image} alt={car.alt} loading="lazy" />
                <span className="car-badge">{car.badge}</span>
              </div>
              <div className="car-card-body">
                <h3>{car.name}</h3>
                <div className="car-specs">
                  {car.specs.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="car-footer">
                  <span className="car-price">{car.price}</span>
                  <a href="#contact" className="car-cta" aria-label={`Enquire about ${car.name}`}>
                    View Details <ArrowIcon />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
