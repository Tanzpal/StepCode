import styles from "./HowItWorks.module.css";
import { BookOpen, Code2, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <span className={styles.eyebrow}>HOW STEPCODE WORKS</span>

          <h2>
            Your journey to better coding
            <br />
            starts <span>here.</span>
          </h2>

          <p>
            Three simple steps to learn, practice, and grow as a programmer.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.steps}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.icon}>
                <BookOpen size={24} />
              </div>
              <span>01</span>
            </div>

            <h3>Learn Python</h3>
            <p>
              Build strong foundations with clear concepts and guided Python
              lessons.
            </p>

            <div className={styles.bottomLine}></div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.icon}>
                <Code2 size={24} />
              </div>
              <span>02</span>
            </div>

            <h3>Practice Problems</h3>
            <p>
              Solve coding challenges, explore different approaches, and run
              your code.
            </p>

            <div className={styles.bottomLine}></div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.icon}>
                <TrendingUp size={24} />
              </div>
              <span>03</span>
            </div>

            <h3>Improve with AI</h3>
            <p>
              Submit your solutions, receive AI-powered feedback, and improve
              your skills.
            </p>

            <div className={styles.bottomLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
