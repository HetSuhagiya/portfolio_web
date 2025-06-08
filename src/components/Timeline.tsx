import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'

// Components
import ScrollFloat from './ScrollFloat'

interface Milestone {
  title: string
  description: string
}

interface TimelineItem {
  date: string
  title: string
  description: string
  category: 'academic' | 'professional' | 'project'
  milestones?: Milestone[]
}

const timelineData: TimelineItem[] = [
  {
    date: '2023 - Present',
    title: 'Software Engineer',
    description: 'Working on full-stack development using React, Node.js, and TypeScript.',
    category: 'professional',
  },
  {
    date: '2019 - 2023',
    title: 'BSc in Information Technology',
    description: 'Studied computer science fundamentals, databases, and software engineering.',
    category: 'academic',
  },
  {
    date: '2023 - 2024',
    title: 'MSc in Data Science and Analytics',
    description: 'Focused on data analytics, machine learning, and statistical modeling.',
    category: 'academic',
  },
  {
    date: '2023',
    title: 'Used Car Price Scraper',
    description: 'Built a full-stack web scraper with analytics dashboard to analyse price trends.',
    category: 'project',
  },
  {
    date: '2023',
    title: 'Health Insurance Analytics',
    description: 'Conducted risk prediction and pricing analysis using Python and SQL.',
    category: 'project',
  },
  {
    date: '2024',
    title: 'Financial Risk Analysis',
    description: 'Created a multi-table SQL model to assess customer risk and transaction behavior.',
    category: 'project',
  },
]

const Timeline = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [fillHeight, setFillHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return

      const container = timelineContainerRef.current
      const containerTop = container.getBoundingClientRect().top
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight

      const distanceScrolled = windowHeight - containerTop
      const totalScrollable = containerHeight

      const scrollProgress = Math.min(1, Math.max(0, distanceScrolled / totalScrollable))
      const calculatedFillHeight = scrollProgress * containerHeight

      setFillHeight(Math.min(containerHeight, Math.max(0, calculatedFillHeight)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-500'
      case 'professional':
        return 'bg-green-500'
      case 'project':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            scrollContainerRef={window}
          >
            My Journey
          </ScrollFloat>
        </motion.div>

        <motion.div
          ref={timelineContainerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Main timeline line */}
          <div ref={lineRef} className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 z-0">
            <div
              style={{ height: `${fillHeight}px`, transition: 'height 0.2s ease-out' }}
              className="absolute top-0 left-0 w-full bg-indigo-500 dark:bg-indigo-400"
            ></div>
          </div>

          {timelineData.map((item, index) => {
            const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={`relative mb-16 flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Connecting horizontal branch from timeline node to card */}
                <div
                  className={`absolute h-0.5 bg-indigo-400 top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0
                      ? 'left-1/2 w-[calc(50%-2rem)]'
                      : 'right-1/2 w-[calc(50%-2rem)]'
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`relative w-5/12 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full">
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node (hollow dot style) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white z-10" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline