import { motion } from 'framer-motion';
import { scaleUp, viewport } from '../animations';

export default function CallToAction() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <motion.div className="cta-box" variants={scaleUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2>
            Ready for Your Next
            <br />
            Set of Wheels?
          </h2>
          <p>
            Book a no-pressure test drive or get your free trade-in valuation today.
            Our team replies within the hour, seven days a week.
          </p>
          <div className="cta-actions">
            <a href="tel:+1-555-867-5309" className="btn btn-primary">
              Call (555) 867-5309
            </a>
            <a href="mailto:sales@topgearauto.com" className="btn btn-secondary">
              sales@topgearauto.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
