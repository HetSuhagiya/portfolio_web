import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import MaintenanceMode from '../components/MaintenanceMode'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [isMaintenance, setIsMaintenance] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMaintenance = async () => {
      try {
        const response = await fetch('/api/maintenance/status')
        const data = await response.json()
        setIsMaintenance(data.maintenanceMode)
      } catch (error) {
        console.error('Error checking maintenance status:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkMaintenance()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  // Don't show maintenance mode for the admin page
  if (isMaintenance && Component.name !== 'Admin') {
    return <MaintenanceMode />
  }

  return <Component {...pageProps} />
} 