import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../animations';

const testimonials = [
  {
    quote: 'Found my dream M4 here. The whole process — test drive, financing, paperwork — took one afternoon. Unreal service.',
    name: 'Marcus T.',
    detail: 'Bought a 2022 BMW M4',
    initials: 'MT',
    color: 'm' as const,
  },
  {
    quote: 'They gave me $2,000 more for my trade-in than the dealership across town, and the new car was spotless.',
    name: 'Priya S.',
    detail: 'Trade-in customer',
    initials: 'PS',
    color: 'p' as const,
  },
  {
    quote: 'Their service center has looked after both our family cars for three years. Honest quotes, zero surprises.',
    name: 'Dave & Karen L.',
    detail: 'Service customers since 2023',
    initials: 'DK',
    color: 'd' as const,
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="section-eyebrow" variants={fadeUp}>Testimonials</motion.span>
          <motion.h2 className="section-heading" variants={fadeUp}>
            What Our <span className="gradient-text">Drivers Say</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUp}>
            Real stories from real customers — no scripts, no edits.
          </motion.p>
        </motion.div>

        <motion.div className="testimonials-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {testimonials.map((t) => (
            <motion.figure key={t.name} className="testimonial-card" variants={fadeUp}>
              <span className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="testimonial-footer">
                <span className={`testimonial-avatar ${t.color}`} aria-hidden="true">{t.initials}</span>
                <div className="testimonial-meta">
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
