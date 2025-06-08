import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Admin from '../routes/admin'
import Timeline from './Timeline'

function AppContent() {
  const [isContentLoading, setIsContentLoading] = useState(true)
  const [animationData, setAnimationData] = useState(null)
  const [isAnimationLoading, setIsAnimationLoading] = useState(true)
  const [animationError, setAnimationError] = useState(null)

  const location = useLocation()

  // Effect for loading Lottie animation data
  useEffect(() => {
    fetch('/main_anim.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('Animation data loaded:', data)
        setAnimationData(data)
      })
      .catch(error => {
        console.error('Error loading animation:', error)
        setAnimationError(error.message)
      })
      .finally(() => {
        setIsAnimationLoading(false)
        setIsContentLoading(false)
      })
  }, [])

  // Show loading state for the content itself
  if (isContentLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Timeline />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default AppContent 