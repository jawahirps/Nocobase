import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../animations';

const services = [
  {
    icon: '🚗',
    title: 'Buy & Sell',
    description:
      'Browse hand-picked pre-owned vehicles or get an instant, fair offer for your current car — paid out the same day.',
  },
  {
    icon: '💳',
    title: 'Fast Financing',
    description:
      'Get pre-approved online in under 5 minutes. We work with 20+ lenders to find rates that fit your budget.',
  },
  {
    icon: '🔧',
    title: 'Service & Repair',
    description:
      'Factory-trained technicians, genuine parts and transparent pricing — from oil changes to full engine work.',
  },
  {
    icon: '🛡️',
    title: 'Extended Warranty',
    description:
      'Drive worry-free with coverage plans up to 5 years, honored at certified shops nationwide.',
  },
  {
    icon: '🔄',
    title: 'Trade-In Program',
    description:
      'Upgrade without the hassle. Apply your trade-in value directly to any vehicle on our lot.',
  },
  {
    icon: '🚚',
    title: 'Home Delivery',
    description:
      'Buy online and we deliver to your driveway within 3 days, with a 7-day money-back guarantee.',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="section-label" variants={fadeUp}>
            What We Do
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Everything Your Car Needs, Under One Roof
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            From the day you buy to every mile after — TopGear Auto keeps you moving.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: 'rgba(230, 57, 70, 0.45)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
