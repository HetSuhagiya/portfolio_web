import { BrowserRouter as Router } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import Lottie from 'lottie-react'
// import { useInView } from 'react-intersection-observer'

// Components
import AppContent from './components/AppContent'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Admin from './routes/admin'

// const API_URL = 'http://localhost:3001'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
