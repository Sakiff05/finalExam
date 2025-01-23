import React from "react";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <span>ELEGANCE IS ELIMINATION</span>
          <h1>Stay ahead of The Trends</h1>
          <p>Tell your brand story ideas</p>
          <button>COLLECTIONS</button>
        </div>
      </div>
    </div>
  );
}
