import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import ScrollFloat from './ScrollFloat'
// import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const letters = "Het".split("")

  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true
  // })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              scrollContainerRef={window}
            >
              Hi, I'm
            </ScrollFloat>
            <span className="text-indigo-500 font-handwriting inline-flex text-4xl sm:text-5xl lg:text-6xl">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Data Analyst
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-700 dark:bg-indigo-300 text-neutral-100 dark:text-neutral-900 hover:bg-indigo-800 dark:hover:bg-indigo-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="btn-outline px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Home image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <motion.img
              src="/Home.png"
              alt="Data Analysis Illustration"
              className="w-full max-w-lg object-contain"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
          whileHover={{ y: 5 }}
        >
          <ArrowDownIcon className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  )
} 