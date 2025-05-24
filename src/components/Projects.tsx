import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Sales Analysis Dashboard',
    summary: 'Comprehensive sales analysis covering product performance, seasonal trends, and regional insights. Key findings include best-selling products (Outerwear and Footwear), seasonal patterns, and regional performance across multiple countries.',
    tools: ['Tableau', 'SQL', 'Data Analysis'],
    link: 'https://public.tableau.com/app/profile/hetsuhagiya/viz/Dashboard_17376208048500/Dashboard1',
    github: 'https://github.com/HetSuhagiya/SQL-Sales-Analysis.git',
    icon: '/Assets/Proj_icons/sales_analysis.png'
  },
  {
    title: 'Refund Analysis',
    summary: 'Developed an interactive dashboard to analyse refund patterns, track transaction metrics, and identify key factors affecting customer returns.',
    tools: ['Tableau', 'SQL', 'Data Analysis'],
    link: 'https://public.tableau.com/app/profile/hetsuhagiya/viz/TransactionDashboard_17428246737940/RefundsOverview',
    icon: '/Assets/Proj_icons/finance_analysis.png'
  },
  {
    title: 'Data Pipeline: Kaggle API to PostgreSQL',
    summary: 'Built an automated ETL pipeline using the Kaggle API to reduce manual data handling and support faster insight generation. Cleaned and transformed datasets using Python (Pandas) to ensure data accuracy and enable trend analysis. Loaded processed data into PostgreSQL for efficient report generation and scalable querying.',
    tools: ['Python', 'Pandas', 'Kaggle API', 'PostgreSQL'],
    link: 'https://github.com/hetsuhagiya/etl-pipeline',
    github: 'https://github.com/HetSuhagiya/ETL.git',
    icon: '/Assets/Proj_icons/ETL.png'
  },
  {
    title: 'Medical Health Application',
    summary: 'Developed a web dashboard using Django and Plotly Dash to help users explore activity metrics and trends. Integrated structured data sources (e.g., Google Fit, CSVs) to support multi-source data aggregation and reporting. Enabled data interaction via a GPT-powered assistant, providing simplified summaries and supporting ad-hoc data assignments.',
    tools: ['Django', 'Plotly Dash', 'Google Fit API', 'Python', 'GPT-based Models'],
    link: 'https://github.com/GHMProjects/Health-Dashboard',
    github: 'https://github.com/GHMProjects/Health-Dashboard',
    icon: '/Assets/Proj_icons/health_analysis.png'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={project.icon}
                        alt={`${project.title} icon`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.a>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 