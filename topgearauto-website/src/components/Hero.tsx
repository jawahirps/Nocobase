import { motion } from 'framer-motion';
import { fadeUp, slideInRight, stagger } from '../animations';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container hero-content">
        <motion.div className="hero-text" variants={stagger} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp}>
            Find Your Perfect
            <br />
            <span className="gradient-text">Ride Today</span>
          </motion.h1>
          <motion.p variants={fadeUp}>
            Hand-picked premium vehicles. 150-point inspections. Same-day financing. TopGear Auto
            makes buying your dream car effortless.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#inventory" className="btn btn-primary">
              Browse Inventory
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </motion.div>
          <motion.div className="hero-trust" variants={fadeUp}>
            <div className="trust-avatars" aria-hidden="true">
              <span>JK</span>
              <span>AL</span>
              <span>PS</span>
              <span>MT</span>
            </div>
            <div className="trust-text">
              <strong>2,300+</strong> happy drivers this year
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={slideInRight} initial="hidden" animate="visible">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Sleek sports car on display at TopGear Auto showroom"
              loading="eager"
            />
          </div>
          <motion.div
            className="hero-floating-card floating-rating"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="stars" aria-label="4.9 out of 5 stars">★★★★★</div>
            <div className="rating-info">
              <strong>4.9 / 5</strong>
              Google Reviews
            </div>
          </motion.div>
          <motion.div
            className="hero-floating-card floating-price"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="label">Starting From</div>
            <div className="value">$19,900</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
