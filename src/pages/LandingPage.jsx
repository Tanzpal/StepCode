import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  // Add the phrases you want to cycle through here
  const words = ["Master Python", "Solve Problems", "Level Up"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    // Slower typing, deleting, and reading pauses
    let timerSpeed = isDeleting ? 90 : 140;

    if (!isDeleting && currentText === fullWord) {
      // Give visitors enough time to read the complete phrase
      timerSpeed = 3000;
      setIsDeleting(true);
    } else if (isDeleting && currentText === "") {
      // Brief pause before typing the next phrase
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      timerSpeed = 600;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return fullWord.substring(0, prev.length - 1);
        } else {
          return fullWord.substring(0, prev.length + 1);
        }
      });
    }, timerSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <main className={styles.hero} id="home">
      <section className={styles.copy} aria-labelledby="hero-title">
        <h1 id="hero-title">
          Learn to Code.
          <br className={styles.desktopBreak} />
          Think. Solve. Grow.
          <br />
          {/* Animated typing text container */}
          <span className={styles.typingContainer}>
            <span className={styles.gradientText}>{currentText}</span>
            <span className={styles.cursor}>|</span>
          </span>
        </h1>
        <p>
          Your journey to becoming a better programmer starts here. Practice
          Python, master problem-
          <br className={styles.desktopBreak} /> solving, and use AI-powered
          insights to write better code — one challenge at a time.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#get-started">
            Start for free <span aria-hidden="true">›</span>
          </a>
          <a className={styles.secondaryButton} href="#contact">
            Talk to sales
          </a>
        </div>
      </section>
    </main>
  );
}
