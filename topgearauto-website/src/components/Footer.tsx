export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} TopGear Auto. All rights reserved.</span>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <a href="#inventory">Inventory</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
