import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../assets/stepcode-logo.png";

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
      <a className={styles.brand} href="#home" aria-label="StepCode home">
        <img src={logo} alt="StepCode — Small steps. Big dreams." />
      </a>

      <button
        className={styles.menuToggle}
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileActions}>
          {/* <a href="#migrate" onClick={() => setMenuOpen(false)}>Migrate to StepCode</a> */}
          <a href="#signin" onClick={() => setMenuOpen(false)}>
            Sign in
          </a>
          <a
            className={styles.mobileGetStarted}
            href="#get-started"
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </a>
        </div>
      </nav>

      <div className={styles.navActions}>
        {/* <a href="#migrate">Migrate to StepCode</a> */}
        <a href="#signin">Sign in</a>
        <a className={styles.getStarted} href="#get-started">
          Get started
        </a>
      </div>
    </header>
  );
}
