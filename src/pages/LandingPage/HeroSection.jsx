import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const words = ["Master Python", "Solve Problems", "Level Up"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    // Typing speed, deleting speed, and reading time
    let speed = deleting ? 90 : 140;

    if (!deleting && text === word) {
      speed = 3000;
    }

    if (deleting && text === "") {
      speed = 600;
    }

    const timer = setTimeout(() => {
      // Delete one letter at a time
      if (deleting) {
        setText(text.slice(0, -1));
      } else {
        // Add one letter at a time
        setText(word.slice(0, text.length + 1));
      }

      // Start deleting when the word is complete
      if (!deleting && text === word) {
        setDeleting(true);
      }

      // Move to the next word when deletion is complete
      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <main className={styles.hero} id="home">
      <section className={styles.copy} id="Hero">
        <h1>
          Learn to Code.
          <br className={styles.desktopBreak} />
          Think. Solve. Grow.
          <br />
          <span className={styles.typingContainer}>
            <span className={styles.gradientText}>{text}</span>
            <span className={styles.cursor}>|</span>
          </span>
        </h1>

        <p>
          Your journey to becoming a better programmer starts here. Practice
          Python, master problem-
          <br className={styles.desktopBreak} />
          solving, and use AI-powered insights to write better code — one
          challenge at a time.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="/signup">
            Get Stated <span>›</span>
          </a>

          <a className={styles.secondaryButton} href="#how-it-works">
            Know more
          </a>
        </div>
      </section>
    </main>
  );
}
