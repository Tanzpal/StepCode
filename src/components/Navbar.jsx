import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../assets/stepcode-logo.png";
import { Link } from "react-router-dom";

const links = [
  { label: "Contact", href: "#Contact" },
  { label: "Contact", href: "#Contact" },
  { label: "Contact", href: "#Contact" },
  { label: "Contact", href: "#Contact" },
  { label: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <a className={styles.brand} href="/">
        <img src={logo} alt="StepCode — Small steps. Big dreams." />
      </a>

      {/* Mobile menu button */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {/* Navigation links */}
      <nav
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
      >
        {links.map((link, index) => (
          <a key={index} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}

        {/* Mobile buttons */}
        <div className={styles.mobileActions}>
          <a href="#signin" onClick={() => setMenuOpen(false)}>
            Sign in
          </a>

          <Link
            className={styles.mobileGetStarted}
            to="/signup"
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Desktop buttons */}
      <div className={styles.navActions}>
        <Link className={styles.getStarted} to="/signup">
          Get started
        </Link>
      </div>
    </header>
  );
}
