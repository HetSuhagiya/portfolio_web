import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'

// Components
import ScrollFloat from './ScrollFloat'
import TrueFocus from './TrueFocus'

interface Milestone {
  title: string
  description: string
  date: string
}

const timelineData: Milestone[] = [
  {
    date: '2023 - Present',
    title: 'MSc Data Science and Analytics',
    description: 'Graduated from Brunel University London with a focus on data analysis, machine learning, and statistical methods.'
  },
  {
    date: '2022 - 2023',
    title: 'Data Analysis Projects',
    description: 'Developed comprehensive sales analysis dashboards using Tableau and SQL, focusing on product performance and regional insights.'
  },
  {
    date: '2021 - 2022',
    title: 'Data Visualization Training',
    description: 'Mastered data visualization tools including Tableau and Power BI, creating interactive dashboards and reports.'
  }
]

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [fillHeight, setFillHeight] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current || !lineRef.current) return

      const containerRect = timelineContainerRef.current.getBoundingClientRect()
      const lineRect = lineRef.current.getBoundingClientRect()
      const scrollProgress = Math.min(
        Math.max(
          (window.innerHeight - containerRect.top) /
            (containerRect.height + window.innerHeight),
          0
        ),
        1
      )

      setFillHeight(lineRect.height * scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <TrueFocus
              sentence="My Journey"
              manualMode={false}
              blurAmount={5}
              borderColor="#6366f1"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
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