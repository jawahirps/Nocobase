import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../animations';

const cars = [
  {
    name: '2022 BMW M4 Competition',
    meta: '12,400 mi · Automatic · Petrol',
    price: '$72,900',
    image:
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
    alt: 'Blue BMW M4 Competition coupe',
  },
  {
    name: '2023 Tesla Model 3 Performance',
    meta: '8,100 mi · Automatic · Electric',
    price: '$46,500',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80',
    alt: 'White Tesla Model 3 parked outdoors',
  },
  {
    name: '2021 Ford Mustang GT',
    meta: '21,700 mi · Manual · Petrol',
    price: '$41,200',
    image:
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=900&q=80',
    alt: 'Red Ford Mustang GT on the road',
  },
];

export default function FeaturedCars() {
  return (
    <section className="section" id="inventory">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="section-label" variants={fadeUp}>
            Featured Inventory
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            This Week&apos;s Top Picks
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Every vehicle passes our 150-point inspection and comes with a full history report and
            a 7-day money-back guarantee.
          </motion.p>
        </motion.div>

        <motion.div
          className="cars-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {cars.map((car) => (
            <motion.article
              key={car.name}
              className="car-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <img src={car.image} alt={car.alt} loading="lazy" />
              <div className="car-card-body">
                <h3>{car.name}</h3>
                <p className="car-meta">{car.meta}</p>
                <div className="car-price-row">
                  <span className="car-price">{car.price}</span>
                  <a href="#contact" className="car-link" aria-label={`Enquire about ${car.name}`}>
                    Enquire →
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
