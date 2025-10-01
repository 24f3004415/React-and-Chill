// JokeApp.jsx
import React, { useState } from 'react'
import styles from './Jokeapi.module.css'

const JokeApp = () => {
  const [joke, setJoke] = useState('')
  const [punchline, setPunchline] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPunchline, setShowPunchline] = useState(false)
  const [error, setError] = useState('')

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    setShowPunchline(false)
    setPunchline('')
    
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
      const data = await response.json()
      
      setJoke(data.setup)
      setPunchline(data.punchline)
      
      // Delay showing punchline for better UX
      setTimeout(() => {
        setShowPunchline(true)
      }, 1500)
      
    } catch (err) {
      setError('Failed to fetch joke. Please try again!')
    } finally {
      setLoading(false)
    }
  }

  const revealPunchline = () => {
    setShowPunchline(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            😄 Joke Generator
          </h1>
          <p className={styles.subtitle}>
            Get ready to laugh out loud!
          </p>
        </div>

        {/* Joke Content */}
        <div className={styles.content}>
          {!joke && !loading && (
            <div className={styles.welcomeText}>
              Click the button below to get a hilarious joke! 🎭
            </div>
          )}

          {loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}>
                <div className={styles.spinner}></div>
              </div>
              <p className={styles.loadingText}>
                Preparing something funny...
              </p>
            </div>
          )}

          {joke && !loading && (
            <div className={styles.jokeContainer}>
              <div className={styles.setupCard}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.emoji}>🎪</span>
                  Setup:
                </h2>
                <p className={styles.jokeText}>
                  {joke}
                </p>
              </div>

              {punchline && (
                <div className={`${styles.punchlineCard} ${
                  showPunchline 
                    ? styles.punchlineVisible 
                    : styles.punchlineHidden
                }`}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.emoji}>💥</span>
                    Punchline:
                  </h2>
                  <p className={styles.punchlineText}>
                    {punchline}
                  </p>
                </div>
              )}

              {punchline && !showPunchline && (
                <div className={styles.buttonContainer}>
                  <button
                    onClick={revealPunchline}
                    className={styles.revealButton}
                  >
                    Reveal Punchline! 🎉
                  </button>
                </div>
              )}
            </div>
          )}

          {error && (
            <div className={styles.errorCard}>
              <p className={styles.errorText}>
                ⚠️ {error}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actionContainer}>
          <button
            onClick={fetchJoke}
            disabled={loading}
            className={`${styles.mainButton} ${loading ? styles.disabled : ''}`}
          >
            {loading ? (
              <span className={styles.loadingButtonContent}>
                <div className={styles.buttonSpinner}></div>
                Loading...
              </span>
            ) : (
              <span className={styles.buttonContent}>
                <span className={styles.buttonEmoji}>🎲</span>
                Get New Joke
              </span>
            )}
          </button>

          {joke && showPunchline && (
            <div className={styles.thankYouText}>
              Hope that made you smile! 😊
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Powered by Official Joke API ✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default JokeApp
