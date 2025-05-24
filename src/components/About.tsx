import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Data Analysis',
    items: ['SQL', 'Python', 'Excel', 'Data Cleaning', 'Statistical Analysis']
  },
  {
    category: 'Visualisation',
    items: ['Tableau', 'Dashboard Design', 'Data Storytelling', 'Report Creation']
  },
  {
    category: 'Tools',
    items: ['MySQL', 'Microsoft Excel', 'Tableau', 'Power BI']
  }
]

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/profile.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-grow"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm a recent MSc graduate in Data Science and Analytics from Brunel University London. 
                I enjoy working with data, solving problems, and finding useful insights. 
                I have experience with Python, SQL, Tableau, Power BI, and Excel, and I've worked on projects like sales analysis.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I like breaking down complex data into something clear and meaningful. 
                Whether it's writing queries, building models, or creating visualisations, 
                I focus on making data useful. I'm looking forward to applying my skills 
                in a role where I can keep learning and make a real impact.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 