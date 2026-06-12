import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../animations';

const testimonials = [
  {
    quote:
      'Found my dream M4 here. The whole process — test drive, financing, paperwork — took one afternoon. Unreal.',
    name: 'Marcus T.',
    detail: 'Bought a 2022 BMW M4',
  },
  {
    quote:
      'They gave me $2,000 more for my trade-in than the dealership across town, and the new car was spotless.',
    name: 'Priya S.',
    detail: 'Trade-in customer',
  },
  {
    quote:
      'Their service center has looked after both our family cars for three years. Honest quotes, zero surprises.',
    name: 'Dave & Karen L.',
    detail: 'Service customers since 2023',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="section-label" variants={fadeUp}>
            Reviews
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Drivers Who Took the Wheel With Us
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((item) => (
            <motion.figure key={item.name} className="testimonial-card" variants={fadeUp}>
              <span className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption className="testimonial-author">
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
