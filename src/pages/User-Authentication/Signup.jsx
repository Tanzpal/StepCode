import styles from "./Signup.module.css";
import Navbar from "../../components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className={styles.signupPage}>
        <div className={styles.signupForm}>
          <h1>Start your coding journey.</h1>

          <p className={styles.subtitle}>
            Create your account and take your first step with StepCode.
          </p>

          <form>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              autoComplete="username"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              autoComplete="new-password"
              minLength="8"
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter your password again"
              autoComplete="new-password"
              minLength="8"
              required
            />

            <button type="submit">Create Account</button>
          </form>

          <p className={styles.loginText}>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>

        <p className={styles.footer}>Learn. Code. Grow.</p>
      </div>
    </>
  );
}
