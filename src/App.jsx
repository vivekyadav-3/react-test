import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background-gradient"></div>
      
      <div className="app-container">
        <header className="hero">
          <h1>Experience the Future</h1>
          <p>
            Welcome to your new React application. 
            Built for performance, designed for impact.
          </p>

          <div className="interactive-card">
            <h3>Interactive Demo</h3>
            <div className="count-display">
              {count}
            </div>
            <button 
              className="action-btn" 
              onClick={() => setCount((count) => count + 1)}
            >
              Boost Counter 🚀
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Click to see the magic happen
            </p>
          </div>
        </header>

        <section className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Lightning Fast</h3>
            <p>Powered by Vite for instant server start and lightning fast HMR.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3>Modern Design</h3>
            <p>Glassmorphism effects and beautiful gradients out of the box.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛠️</span>
            <h3>Extensible</h3>
            <p>Built on React, ready for you to build the next big thing.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Responsive</h3>
            <p>Looks amazing on every device, from mobile to desktop.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
