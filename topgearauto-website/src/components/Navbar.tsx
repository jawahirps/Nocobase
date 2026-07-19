import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Inventory', href: '#inventory' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -76, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container navbar-inner">
        <a href="#top" className="logo" aria-label="TopGear Auto home">
          <span className="logo-mark">TG</span>
          TopGear Auto
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary nav-cta">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
