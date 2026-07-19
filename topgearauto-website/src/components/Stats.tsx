import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeUp, stagger, viewport } from '../animations';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 8500, suffix: '+', label: 'Vehicles Sold' },
  { value: 150, suffix: '-pt', label: 'Inspection Standard' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-number">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-bar" aria-label="Key figures">
      <motion.div
        className="container stats-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {stats.map((s) => (
          <motion.div key={s.label} className="stat-item" variants={fadeUp}>
            <Counter value={s.value} suffix={s.suffix} />
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
