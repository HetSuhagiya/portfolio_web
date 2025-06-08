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

const API_URL = 'http://localhost:3001'

function AppContent() {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [isContentLoading, setIsContentLoading] = useState(true) // Renamed for clarity
  const [animationData, setAnimationData] = useState(null)
  const [isAnimationLoading, setIsAnimationLoading] = useState(true)
  const [animationError, setAnimationError] = useState(null)

  const location = useLocation() // useLocation is now inside a component rendered by Router

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
      })
  }, [])

  // Effect for checking maintenance status
  useEffect(() => {
    const checkMaintenanceStatus = async () => {
      try {
        const response = await fetch(`${API_URL}/api/maintenance/status`)
        const data = await response.json()
        setMaintenanceMode(data.maintenanceMode)
      } catch (error) {
        console.error('Failed to fetch maintenance status:', error)
      } finally {
        setIsContentLoading(false) // Use content loading state
      }
    }

    checkMaintenanceStatus()
    // Check maintenance status every 30 seconds
    const interval = setInterval(checkMaintenanceStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  // Show loading state for the content itself
  if (isContentLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  // Show maintenance page if enabled and NOT on the admin route
  if (maintenanceMode && location.pathname !== '/admin') {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 text-center">
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-8 font-funny">
          🛠️ Site Under Maintenance
        </h2>
        <div className="w-96 h-96 mb-8 flex items-center justify-center">
          {isAnimationLoading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          ) : animationError ? (
            <div className="text-red-500 text-center">Error loading animation:<br/> {animationError}</div>
          ) : animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            // Fallback if no error and no data (shouldn't happen if loading is false)
            <div className="text-gray-600 dark:text-gray-400 text-center">Animation data not available.</div>
          )}
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          We're currently performing some maintenance on our site. Please check back soon!
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-4">
          Expected completion: Soon
        </p>
        <p className="text-2xl font-medium text-indigo-600 dark:text-indigo-400 italic">
          "Even websites need a spa day."
        </p>
      </div>
    )
  }

  // Show normal app content if maintenance is off
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