import styles from "./ExploreProblems.module.css";
import { Code2, ArrowUpRight } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Check Even or Odd",
    topic: "Conditional Statements",
    difficulty: "Easy",
    description:
      "Write a Python program to check whether a number is even or odd.",
  },
  {
    number: "02",
    title: "Reverse a String",
    topic: "Strings",
    difficulty: "Medium",
    description:
      "Write a Python program that reverses a string without changing its characters.",
  },
  {
    number: "03",
    title: "Find the Largest Number",
    topic: "Lists",
    difficulty: "Hard",
    description: "Find the largest number in a list of integers using Python.",
  },
];

export default function ExploreProblems() {
  return (
    <section className={styles.section} id="problems">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>PRACTICE MAKES PROGRESS</span>

          <h2>
            Practice. Solve. <span>Improve.</span>
          </h2>

          <p>
            Explore Python challenges and build your problem-solving skills one
            question at a time.
          </p>
        </div>

        <div className={styles.problemList}>
          {problems.map((problem) => (
            <div className={styles.card} key={problem.number}>
              <div className={styles.cardTop}>
                <div className={styles.problemIcon}>
                  <Code2 size={22} />
                </div>

                <span className={styles.number}>{problem.number}</span>
              </div>

              <span
                className={`${styles.difficulty} ${
                  styles[problem.difficulty.toLowerCase()]
                }`}
              >
                {problem.difficulty}
              </span>

              <h3>{problem.title}</h3>

              <p className={styles.topic}>{problem.topic}</p>

              <p className={styles.description}>{problem.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="/signup" className={styles.viewButton}>
            Explore All Problems <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
