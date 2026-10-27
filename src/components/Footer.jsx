import styles from "./Footer.module.css";
import { Code2, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <Code2 size={25} />
            <span>StepCode</span>
          </a>

          <p>
            Small steps. Big dreams.
            <br />
            Learn, practice, and grow with every line of code.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/#problems">Problems</a>
          <a href="/#leaderboard">Leaderboard</a>
        </div>

        <div className={styles.links}>
          <h3>Get Started</h3>
          <a href="/signup">Create Account</a>
          <a href="/login">Log In</a>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <a href="mailto:your-email@example.com">
            <Mail size={17} /> your-email@example.com
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} StepCode. All rights reserved.</p>
        <span>Made for learners, built with passion.</span>
      </div>
    </footer>
  );
}
