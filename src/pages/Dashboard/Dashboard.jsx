import { useState } from "react";
import {
  Code2,
  BookOpen,
  ArrowUpRight,
  Flame,
  Trophy,
  UserRound,
  CheckCircle2,
  Star,
} from "lucide-react";

import DashboardSidebar from "./DashboardSidebar";
import styles from "./Dashboard.module.css";

const learningCards = {
  DSA: [
    {
      title: "Complete DSA",
      description:
        "Learn data structures and algorithms from the basics to advanced topics.",
      icon: BookOpen,
      progress: 35,
      label: "Your learning path",
    },
    {
      title: "OOPS",
      description:
        "Understand classes, objects, inheritance, and other OOP concepts.",
      icon: Code2,
      progress: 20,
      label: "Core concepts",
    },
  ],
  Design: [
    {
      title: "Low Level Codes",
      description:
        "Practice designing classes, relationships, and reusable code for real-world systems.",
      icon: Code2,
      progress: 10,
      label: "Design practice",
    },
  ],
};

const players = [
  { name: "CodeMaster", xp: 2850 },
  { name: "PythonPro", xp: 2420 },
  { name: "DevNinja", xp: 2180 },
  { name: "CodeLearner", xp: 1950 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("DSA");

  return (
    <div className={styles.dashboard}>
      <DashboardSidebar />

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>YOUR CODING SPACE</p>
            <h1>Welcome back, Developer!</h1>
            <p className={styles.subtitle}>
              Small steps today. Big progress tomorrow.
            </p>
          </div>

          <div className={styles.headerAvatar}>
            <UserRound size={22} />
          </div>
        </header>

        <section className={styles.stats}>
          <div className={styles.statCard}>
            <CheckCircle2 />
            <p>Problems Solved</p>
            <h2>28</h2>
          </div>

          <div className={styles.statCard}>
            <Star />
            <p>Total XP</p>
            <h2>1,520</h2>
          </div>

          <div className={styles.statCard}>
            <Flame />
            <p>Day Streak</p>
            <h2>5 Days</h2>
          </div>

          <div className={styles.statCard}>
            <Trophy />
            <p>Your Rank</p>
            <h2>#12</h2>
          </div>
        </section>

        <div className={styles.content}>
          <section className={styles.learning}>
            <div className={styles.sectionHeading}>
              <div>
                <h2>Your Learning Path</h2>
                <p>Choose a topic and keep improving.</p>
              </div>
            </div>

            <div className={styles.tabs}>
              {["DSA", "Design"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? styles.activeTab : ""}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.learningCards}>
              {learningCards[activeTab].map((card) => {
                const Icon = card.icon;

                return (
                  <article className={styles.learningCard} key={card.title}>
                    <div className={styles.cardTop}>
                      <div className={styles.cardIcon}>
                        <Icon size={23} />
                      </div>
                      <ArrowUpRight size={20} />
                    </div>

                    <span className={styles.cardLabel}>{card.label}</span>
                    <h3>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>

                    <div className={styles.progressInfo}>
                      <span>Progress</span>
                      <span>{card.progress}%</span>
                    </div>

                    <div className={styles.progressBar}>
                      <div style={{ width: `${card.progress}%` }} />
                    </div>

                    <a href="#" className={styles.continueLink}>
                      Continue Learning <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          <aside className={styles.rightSide}>
            <section className={styles.streakCard}>
              <div className={styles.sideHeading}>
                <Flame size={22} />
                <h3>Coding Streak</h3>
              </div>

              <h2>
                5 Days <span>🔥</span>
              </h2>
              <p>You're building a great habit. Keep it going!</p>

              <div className={styles.week}>
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div key={index}>
                    <span className={index < 5 ? styles.dayDone : ""}>
                      {index < 5 ? "✓" : "·"}
                    </span>
                    <small>{day}</small>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.leaderboard}>
              <div className={styles.sideHeading}>
                <Trophy size={22} />
                <h3>Leaderboard</h3>
              </div>

              <p className={styles.leaderboardSubtitle}>
                Top learners this week
              </p>

              {players.map((player, index) => (
                <div className={styles.player} key={player.name}>
                  <span className={styles.rank}>{index + 1}</span>

                  <div className={styles.playerAvatar}>
                    <UserRound size={17} />
                  </div>

                  <span className={styles.playerName}>{player.name}</span>
                  <span className={styles.playerXP}>{player.xp} XP</span>
                </div>
              ))}

              <a href="#" className={styles.viewLeaderboard}>
                View Leaderboard <ArrowUpRight size={16} />
              </a>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
