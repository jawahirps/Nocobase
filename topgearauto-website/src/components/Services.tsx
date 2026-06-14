import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../animations';

const services = [
  { icon: '🚗', color: 'red', title: 'Buy & Sell', desc: 'Browse hand-picked pre-owned vehicles or get an instant, fair offer for your current car — paid out the same day.' },
  { icon: '💳', color: 'blue', title: 'Fast Financing', desc: 'Get pre-approved online in under 5 minutes. We work with 20+ lenders to find rates that fit your budget.' },
  { icon: '🔧', color: 'orange', title: 'Service & Repair', desc: 'Factory-trained technicians, genuine parts, and transparent pricing — from oil changes to full engine work.' },
  { icon: '🛡️', color: 'green', title: 'Extended Warranty', desc: 'Drive worry-free with coverage plans up to 5 years, honored at certified shops nationwide.' },
  { icon: '🔄', color: 'purple', title: 'Trade-In Program', desc: 'Upgrade without the hassle. Apply your trade-in value directly to any vehicle on our lot.' },
  { icon: '🚚', color: 'teal', title: 'Home Delivery', desc: 'Buy online and we deliver to your driveway within 3 business days, with a 7-day return policy.' },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="section-eyebrow" variants={fadeUp}>What We Do</motion.span>
          <motion.h2 className="section-heading" variants={fadeUp}>
            Everything Your Car Needs,
            <br />
            <span className="gradient-text">Under One Roof</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUp}>
            From the day you buy to every mile after — TopGear Auto keeps you moving.
          </motion.p>
        </motion.div>

        <motion.div className="services-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {services.map((s) => (
            <motion.div
              key={s.title}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className={`service-icon-wrap ${s.color}`} aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
