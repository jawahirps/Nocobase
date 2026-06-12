import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp}>
            Drive Home in the Car You <em>Deserve</em>
          </motion.h1>
          <motion.p variants={fadeUp}>
            TopGear Auto hand-picks premium pre-owned vehicles, backs every sale with a 150-point
            inspection, and gets you financed in minutes — not days.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#inventory" className="btn btn-primary">
              Browse Inventory
            </a>
            <a href="#services" className="btn btn-ghost">
              Our Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
            alt="Sports car on display at TopGear Auto showroom"
            loading="eager"
          />
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <strong>4.9 / 5</strong>
            Rated by 2,300+ happy drivers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
