import styles from "./Final.module.css";
import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Code2 size={28} />
        </div>

        <h2>
          Ready to Start Your <span>Coding Journey?</span>
        </h2>

        <p>
          Practice Python, solve challenges, and improve your skills one step at
          a time.
        </p>

        <Link to="/Dashboard" className={styles.button}>
          Start Coding for Free <ArrowRight size={18} />
        </Link>

        <small>No experience needed. Just start learning.</small>
      </div>
    </section>
  );
}
