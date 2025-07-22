import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Timeline from './Timeline'
import ProjectDetail from './ProjectDetail'

function AppContent() {
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
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default AppContent 