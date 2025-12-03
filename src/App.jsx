import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaAtom, FaLayerGroup, FaBolt } from 'react-icons/fa'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <div className="app-container">
      <div className="background-animation">
        <div className="glowing-orb orb-1"></div>
        <div className="glowing-orb orb-2"></div>
      </div>

      <motion.div 
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          NEXT GEN <br />
          <span style={{ color: 'var(--accent-primary)' }}>INTERFACE</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Redefining the boundaries of web performance and aesthetics.
        </motion.p>

        <motion.div className="card-container" variants={itemVariants}>
          <div className="glass-card">
            <h3>System Status</h3>
            <motion.div 
              className="counter-value"
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {count}
            </motion.div>
            <button 
              className="neon-button"
              onClick={() => setCount(c => c + 1)}
            >
              Initialize Sequence
            </button>
          </div>
        </motion.div>

        <motion.div className="grid-section" variants={containerVariants}>
          <InfoCard 
            icon={<FaAtom />}
            title="Atomic Design"
            desc="Component driven architecture for maximum scalability."
            color="var(--accent-primary)"
          />
          <InfoCard 
            icon={<FaBolt />}
            title="Ultra Fast"
            desc="Powered by Vite.js for instant HMR and builds."
            color="var(--accent-secondary)"
          />
          <InfoCard 
            icon={<FaLayerGroup />}
            title="Glassmorphism"
            desc="Modern aesthetic with advanced backdrop filters."
            color="var(--accent-tertiary)"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function InfoCard({ icon, title, desc, color }) {
  return (
    <motion.div 
      className="info-card"
      whileHover={{ scale: 1.05 }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className="icon-box" style={{ color: color || 'var(--accent-primary)' }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{desc}</p>
    </motion.div>
  )
}

export default App
