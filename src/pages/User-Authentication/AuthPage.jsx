import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Navbar from "../../components/Navbar";

export default function AuthPage() {
  const isSignup = useLocation().pathname === "/signup";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("Backend authentication will be added later.");
  }

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Left Panel */}
          <div className={styles.left}>
            <h1>
              Step<span>Code</span>
            </h1>
            <p>Small steps. Big dreams.</p>

            <h2>
              {isSignup
                ? "Build your skills, one step at a time."
                : "Your next level starts here."}
            </h2>

            <p className={styles.description}>
              Learn Python, solve problems, and track your progress with
              StepCode.
            </p>

            <div className={styles.code}>
              <p>
                ● <span>●</span> <b>●</b>
              </p>
              <pre>
                <span>def</span> solve():{"\n"}
                {"    "}for i in range(5):{"\n"}
                {"        "}print("Keep going!")
              </pre>
            </div>

            <div className={styles.tags}>
              <span>Python</span>
              <span>Practice</span>
              <span>Progress</span>
            </div>
          </div>

          {/* Right Panel */}
          <div className={styles.right}>
            <h2>{isSignup ? "Create your account" : "Welcome back!"}</h2>

            <p>
              {isSignup
                ? "Start your StepCode journey today."
                : "Sign in to continue your StepCode journey."}
            </p>

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className={styles.field}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className={styles.field}>
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>

              <div className={styles.field}>
                <label>Password</label>
                <div className={styles.password}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isSignup && (
                <div className={styles.field}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    minLength={8}
                    required
                  />
                </div>
              )}

              {!isSignup && (
                <div className={styles.options}>
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              )}

              {error && <p className={styles.error}>{error}</p>}

              <button className={styles.submit} type="submit">
                {isSignup ? "Create Account →" : "Login →"}
              </button>
            </form>

            <div className={styles.or}>OR</div>

            <button
              className={styles.google}
              type="button"
              onClick={() => setError("Google login is not connected yet.")}
            >
              G &nbsp; Continue with Google
            </button>

            <div className={styles.switch}>
              {isSignup ? (
                <>
                  Already have an account? <Link to="/login">Login</Link>
                </>
              ) : (
                <>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
