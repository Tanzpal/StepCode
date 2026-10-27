import styles from "./DashboardSidebar.module.css";
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  Trophy,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Learn Python", icon: BookOpen },
  { label: "Practice Problems", icon: Code2 },
  { label: "Leaderboard", icon: Trophy },
  { label: "My Profile", icon: UserRound },
];

export default function DashboardSidebar() {
  return (
    <aside className={styles.sidebar}>
      <a href="/" className={styles.logo}>
        <Code2 size={27} />
        <span>StepCode</span>
      </a>

      <p className={styles.label}>WORKSPACE</p>

      <nav className={styles.nav}>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              href={link.label === "Dashboard" ? "/dashboard" : "#"}
              key={link.label}
              className={`${styles.link} ${link.active ? styles.active : ""}`}
            >
              <Icon size={19} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </nav>

      <div className={styles.bottom}>
        <a href="#settings" className={styles.link}>
          <Settings size={19} />
          <span>Settings</span>
        </a>

        <a href="/login" className={styles.link}>
          <LogOut size={19} />
          <span>Log out</span>
        </a>

        <div className={styles.user}>
          <div className={styles.avatar}>
            <UserRound size={20} />
          </div>
          <div>
            <strong>Developer</strong>
            <p>StepCode Learner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
