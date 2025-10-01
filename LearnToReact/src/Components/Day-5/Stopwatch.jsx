import React, { useRef, useState } from 'react'
import styles from "./Stopwatch.module.css";


const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current != null) {
      return
    }
    // this means the clock is already running

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 100)
    }, 100);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}`;
  };


  return (
    <div className={styles.stopwatch}>
      <div className={styles.display}>{formatTime(time)}</div>

      <div className={styles.controls}>
        <button onClick={handleStart} className={`${styles.btn} ${styles.start}`}>Start</button>
        <button onClick={handleStop} className={`${styles.btn} ${styles.stop}`}>Stop</button>
        <button onClick={handleReset} className={`${styles.btn} ${styles.reset}`}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
