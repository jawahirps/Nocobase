import { motion } from 'framer-motion';
import { scaleIn, viewportOnce } from '../animations';

export default function CallToAction() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="cta-panel"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2>Ready for Your Next Set of Wheels?</h2>
          <p>
            Book a no-pressure test drive or get your free trade-in valuation today. Our team
            replies within the hour, seven days a week.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="tel:+1-555-867-5309" className="btn btn-primary">
              Call (555) 867-5309
            </a>
            <a href="mailto:sales@topgearauto.com" className="btn btn-ghost">
              sales@topgearauto.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
