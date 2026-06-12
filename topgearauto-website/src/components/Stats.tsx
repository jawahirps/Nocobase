import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { staggerContainer, fadeUp, viewportOnce } from '../animations';

const stats = [
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 8500, suffix: '+', label: 'Cars Sold' },
  { value: 150, suffix: '-pt', label: 'Inspection on Every Car' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats" aria-label="TopGear Auto by the numbers">
      <motion.div
        className="container stats-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <div className="stat-value">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
