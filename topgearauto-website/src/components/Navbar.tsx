import { motion } from 'framer-motion';

const links = [
  { label: 'Inventory', href: '#inventory' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <a href="#top" className="brand" aria-label="TopGear Auto home">
          TopGear<span>Auto</span>
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
                Book a Test Drive
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
